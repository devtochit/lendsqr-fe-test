import Input from '../../components/Shared/Input'
import Button from '../../components/Shared/Button/Index'
import useOnClickOutside from '../../hooks/useOnClickOutside'
import { useRef, useState } from 'react'
import '../Filters/filters.scss'
import { useAppDispatch } from '../../app/hooks'
import { motion } from 'framer-motion'
import {
    getAllUsers, filterByUsername, filterByEmail, filterByDateJoined, filterByPhoneNumber, filterByOrgName,
    filterByActiveStatus, filterByPendingStatus, filterByInactveStatus, filterByBlacklistStatus
} from '../../features/users/usersSlice'
import CaretDownIcon from '../../components/Icons/CaretDownIcon'


interface IFilter {
    setIsFilterModal: any,
    currentUsers: any,
}

const Index = ({ setIsFilterModal, currentUsers }: IFilter) => {
    const filterModalRef = useRef<HTMLDivElement>(null);
    const clickOutsidehandler = () => { setIsFilterModal(false) };
    useOnClickOutside(filterModalRef, clickOutsidehandler);
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
            ref={filterModalRef} className='filters__wrapper'>
            <label className='label__class'>{'Organisation'}</label>
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
            <Input label={'Username'} input__class={'input__class'} label__class={'label__class'} myRef={usernameRef} onHandleInputChange={filterByUsernameAction} />
            <Input label={'Email'} input__class={'input__class'} label__class={'label__class'} myRef={emailRef} onHandleInputChange={filterByEmailAction} />
            <Input type={'date'} label={'Date'} input__class={'input__class'} label__class={'label__class'} myRef={dateRef} onHandleInputChange={filterByDateJoinedAction} />
            <Input label={'Phone Number'} input__class={'input__class'} label__class={'label__class'} myRef={phoneRef} onHandleInputChange={filterByPhoneNumberAction} />
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
            <div className='filter__cta'>
                <Button background='reset__styles' children={'Reset'} onClick={resetAction} />
            </div>
        </motion.span>
    )
}

export default Index;