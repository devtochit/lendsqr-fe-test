import InputField from "./constants/InputField";
import Button from "./constants/Button";
import CaretDownIcon from "../constants/icons/CaretDownIcon";
import Listener from "../hooks/Listener";
import { useRef, useState } from 'react';
import '../saas/Filters/filters.scss';
import { useAppDispatch } from "../hooks/hooks";
import { motion } from 'framer-motion';
import { getAllUsers, filterByUsername, filterByEmail, filterByDateJoined, filterByPhoneNumber, filterByOrgName,
    filterByActiveStatus, filterByPendingStatus, filterByInactveStatus, filterByBlacklistStatus 
} from '../functions/usersSlice';
import { characterLimit } from "../constants/utils/helpers";


interface IFilter {
    setIsFilterModal: any,
    currentUsers: any,
}

const Filter = ({ setIsFilterModal, currentUsers }: IFilter) => {
    const filterModalRef = useRef<HTMLDivElement>(null);
    const clickOutsidehandler = () => { setIsFilterModal(false) };
    Listener(filterModalRef, clickOutsidehandler);
    const [showDrop, setShowDrop] = useState<boolean>(false)
    const [showStatusDrop, setShoStatusDrop] = useState<boolean>(false)
    const [selected, setSelcted] = useState<string>('Select')
    const [selectedd, setSelctedd] = useState<string>('Select')
    const dispatch = useAppDispatch();


    const usernameRef = useRef<HTMLInputElement | null>(null);
    const emailRef = useRef<HTMLInputElement | null>(null);
    const dateRef = useRef<HTMLInputElement | null>(null);
    const phoneRef = useRef<HTMLInputElement | null>(null);

    const filterByUsernameAction = () => { dispatch(filterByUsername(usernameRef.current?.value)) };
    const filterByEmailAction = () => { dispatch(filterByEmail(emailRef.current?.value)) };
    const filterByDateJoinedAction = () => { dispatch(filterByDateJoined(dateRef.current?.value)) };
    const filterByPhoneNumberAction = () => { dispatch(filterByPhoneNumber(phoneRef.current?.value)) };


    const updateVal = (val: any) => {
        setSelcted(prev => val.orgName)
        dispatch(filterByOrgName(val.orgName))
        setShowDrop(!showDrop)
    }

    const resetAction = () => {
        dispatch(getAllUsers())
        setSelcted('Select')
        setIsFilterModal(false)
    }

    return (
        <motion.span
            initial={{ opacity: 0, translateX: -50, zIndex: 99 }}
            animate={{ opacity: 1, translateX: 0, zIndex: 99 }}
            transition={{ duration: 0.4, ease: [0.43, 0.13, 0.23, 0.96], delay: 0.1 }}
            ref={filterModalRef} className='filters-container'>
            <label className='label-class'>{'Organisation'}</label>
            <div className='dropbox'>
                <div onClick={() => setShowDrop(!showDrop)} className='selected'>
                    <div>{selected}</div>
                    <p><CaretDownIcon /></p>
                </div>
                {
                    showDrop &&
                    <div className='options'>
                        {currentUsers?.map((val: any, i: number) =>
                            <p key={i} onClick={() => updateVal(val)}>{characterLimit(val.orgName, 20)}</p>
                        )}
                    </div>
                }
            </div>
            <InputField label={'Username'} inputClass={'input-class'} labelClass={'label-class'} myRef={usernameRef} handleChange={filterByUsernameAction} />
            <InputField label={'Email'} inputClass={'input-class'} labelClass={'label-class'} myRef={emailRef} handleChange={filterByEmailAction} />
            <InputField type={'date'} label={'Date'} inputClass={'input-class'} labelClass={'label-class'} myRef={dateRef} handleChange={filterByDateJoinedAction} />
            <InputField label={'Phone Number'} inputClass={'input-class'} labelClass={'label-class'} myRef={phoneRef} handleChange={filterByPhoneNumberAction} />
            <div className='dropbox'>
                <div onClick={() => setShoStatusDrop(!showStatusDrop)} className='selected'>
                    <div>{selectedd}</div>
                    <p><CaretDownIcon /></p>
                </div>
                {
                    showStatusDrop &&
                    <div className='options'>
                        <p onClick={() => { dispatch(filterByActiveStatus(null)); setShoStatusDrop(!showStatusDrop); setSelctedd('active') }}>{'active'}</p>
                        <p onClick={() => { dispatch(filterByPendingStatus(null)); setShoStatusDrop(!showStatusDrop); setSelctedd('pending') }}>{'pending'}</p>
                        <p onClick={() => { dispatch(filterByInactveStatus(null)); setShoStatusDrop(!showStatusDrop); setSelctedd('inactive') }}>{'inactive'}</p>
                        <p onClick={() => { dispatch(filterByBlacklistStatus(null)); setShoStatusDrop(!showStatusDrop); setSelctedd('blacklisted') }}>{'blacklisted'}</p>
                    </div>
                }
            </div>
            <div className='filter-cta'>
                <Button background='reset-styles' children={'Reset'} onClick={resetAction} />
            </div>
        </motion.span>
    )
}

export default Filter;