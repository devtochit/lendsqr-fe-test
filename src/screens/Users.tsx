import React, { lazy, useEffect } from 'react'
import ActiveUsersIcon from '../constants/icons/ActivateUserIcon';
import UserLoansIcon from '../constants/icons/UserLoansIcon';
import UserSavingsIcon from '../constants/icons/UserSavingsIcon';
import UsersIcon from '../constants/icons/UsersIcon';
import { useAppDispatch, useAppSelector } from '../hooks/hooks';
import '../saas/Users/users.scss'
import { getAllUsers } from '../functions/usersSlice';
import { getYearsBetween } from '../constants/utils/helpers';
import Loading from '../components/constants/Loading';

const UsersCard = lazy(() => import('../components/constants/UsersCard'));
const UsersTable = lazy(() => import('../components/UsersTable'));
 
export default function Users() {
    const dispatch = useAppDispatch()
  const { filteredUsers, isError, isLoading, message } = useAppSelector((state: any) => state.users)

    const activeUsers = filteredUsers.filter((val: any) => getYearsBetween(val.createdAt, val.lastActiveDate) < 40)
    const usersWithLoan = filteredUsers.filter((val:any) => (val?.education?.loanRepayment) > 0 )
    const getAllEarners = filteredUsers.map((val:any) => (val?.education?.monthlyIncome) )
    const xt = getAllEarners.map((val:any) => (Math.trunc(Number(val[1])) - Math.trunc(Number(val[0]))))
    const getUsersWithSaving = xt.filter((val:any) => val > -1);
    
    useEffect(() => {
    dispatch(getAllUsers())
  }, [])

    const cardInfo: { title: string; data: string; icon: any }[] = [
    {
      title: 'users',
      icon: <UsersIcon />,
      data: filteredUsers?.length || 0
    },
    {
      title: 'active users',
      icon: <ActiveUsersIcon />,
      data: activeUsers.length || 0
    },
    {
      title: 'users with loan',
      icon: <UserLoansIcon />,
      data: usersWithLoan.length || 0
    },
    {
      title: 'users with savings',
      icon: <UserSavingsIcon />,
      data: getUsersWithSaving.length || 0
    },
  ]

  const renderCards = cardInfo.map((card, i) => (
    <UsersCard  key={i} i={i} card={card} />
  ))

  return (
    <div>
      {isLoading && <Loading />}
      {isError && <span>{message}</span>}
      {!isError &&
        <div className='users__wrapper'>
        <h1 className='heading'>Users</h1>
        <div className='cards__wrapper'>
          {renderCards}
        </div>
          {!isLoading && <UsersTable tableData={filteredUsers}/> }
      </div>
      }
    </div>
  )
}
