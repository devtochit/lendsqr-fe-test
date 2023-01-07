import ActivateUserIcon from '../../components/Icons/ActivateUserIcon';
import BlackListIcon from '../../components/Icons/BlackListIcon';
import Ellipsis from '../../components/Icons/Ellipsis';
import EyeIcon from '../../components/Icons/EyeIcon';
import SortIcon from '../../components/Icons/SortIcon';
import Filters from '../../components/Filters/index'
import { useState, useRef } from 'react';
import { headings } from '../../utils/data';
import { characterLimit, formatDate, getYearsBetween } from '../../utils/helpers';
import useOnClickOutside from '../../hooks/useOnClickOutside';
import { motion } from 'framer-motion';
import '../Users/users.scss'
import Pagination from '../../components/Pagination/Pagination';
import CaretDownIcon from '../../components/Icons/CaretDownIcon';


interface Props {
    tableData: [],
}


const UsersTable = ({ tableData }: Props) => {
    const [activeIndex, setActiveIndex] = useState<any>('')
    const [isFilterModal, setIsFilterModal] = useState<boolean>(false)
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [usersPerPage, setUsersPerPage] = useState<number>(10)
    const [selected, setSelcted] = useState<number>(10)
    const [showDrop, setShowDrop] = useState<boolean>(false)
    const indexOfLastUser = currentPage * usersPerPage;
    const indexOfFirstUser = indexOfLastUser - usersPerPage;
    const currentUsers = tableData && tableData.slice(indexOfFirstUser, indexOfLastUser)
    const promptModalRef = useRef<HTMLDivElement>(null);
    const clickOutsidehandler = () => { setActiveIndex('') };
    useOnClickOutside(promptModalRef, clickOutsidehandler);



    const renderTableHeadings = headings.map((val: any, i: number) => (
        <th
            onClick={() => setIsFilterModal(!isFilterModal)} key={i}>
            <span className='table__headings'>{val.title}&nbsp;
                <span style={{ cursor: 'pointer' }}><SortIcon /></span>
            </span>
        </th>
    ))


    const renderUsers = currentUsers?.map((user: any, i: number) => (
        <motion.tr key={i}
        >
            <td className='row__data'>{characterLimit(user.orgName, 24)} </td>
            <td>{user.userName}</td>
            <td>{characterLimit(user.email, 20)}</td>
            <td>{user.phoneNumber}</td>
            <td>{formatDate(user.createdAt)}</td>
            <td>{
                (getYearsBetween(user.createdAt, user.lastActiveDate)) <= 40 ? <span className="status__btn active__status">{'Active'}</span>
                    : (getYearsBetween(user.createdAt, user.lastActiveDate)) > 40 && (getYearsBetween(user.createdAt, user.lastActiveDate)) <= 60 ? <span className="status__btn pending__status">{'Pending'}</span>
                        : (getYearsBetween(user.createdAt, user.lastActiveDate)) > 60 && (getYearsBetween(user.createdAt, user.lastActiveDate)) <= 90 ? <span className="status__btn inactive__status">{'Inactive'}</span>
                            : (getYearsBetween(user.createdAt, user.lastActiveDate)) > 90 && <span className="status__btn blacklsted__status">{'Blacklisted'}</span>
            }
            </td>
            <td onClick={() => setActiveIndex(i)} className='action__group'><Ellipsis />
                {activeIndex === i &&
                    <motion.div ref={promptModalRef}
                        initial={{ opacity: 0, translateX: -50, zIndex: 99 }}
                        animate={{ opacity: 1, translateX: 0, zIndex: 99 }}
                        transition={{ duration: 0.4, ease: [0.43, 0.13, 0.23, 0.96], delay: i * 0.1 }}
                        className='action__prompt'>
                        <a href={`users/${user.id}`}><div><EyeIcon /> View Details</div></a>
                        <div><BlackListIcon /> Blacklist User</div>
                        <div><ActivateUserIcon /> Activate User</div>
                    </motion.div>
                }
            </td>
        </motion.tr>
    ))


// muber per-page control
    const arr = Array.from({ length: 5 }, (_, i) => (i + 1) * 5)
    const arrOfStr = arr.map(num => { return String(num); });
    function autoSetUserPerPage(item: any, index: number) {
        var newOptions = { option: item };
        return newOptions;
    }
    var options = arrOfStr.map(autoSetUserPerPage);


    const updateVal = (val: any) => {
        setSelcted(val.option)
        setUsersPerPage(val.option)
        setShowDrop(!showDrop)
    }

    return (
        <>
            {isFilterModal && <Filters currentUsers={currentUsers} setIsFilterModal={setIsFilterModal} />}
            <section className='table__container'>
                <table className="table__wrapper">
                    <thead>
                        <tr>
                            {renderTableHeadings}
                        </tr>
                    </thead>
                    <tbody>
                        {renderUsers}
                    </tbody>
                </table>
            </section>
            <div className='table__footer'>
                <section className='page__number'>
                    <p>Showing</p>
                    <div className='dropbox'>
                        <div onClick={() => setShowDrop(!showDrop)} className='selected'>
                            <div>{tableData.length > selected ? selected : tableData.length}</div>
                            <p><CaretDownIcon /></p>
                        </div>
                        {
                            showDrop &&
                            <div className='options'>
                                {options?.map((val: any, i: number) =>
                                    <p key={i} onClick={() => updateVal(val)}>{val.option}</p>
                                )}
                            </div>
                        }
                    </div>
                    <p>out of {tableData.length}</p>
                </section>
                <div>
                    <Pagination
                        currentPage={currentPage}
                        lastPage={tableData.length / usersPerPage}
                        maxLength={7}
                        setCurrentPage={setCurrentPage}
                    />
                </div>
            </div>
        </>
    )
}

export default UsersTable






