import ArrowBack from 'components/Icons/ArrowBack'
import Tabs from 'components/CustomTabs/Tabs'
import '../UserDetails/userdetails.scss'
import StarIcon from 'components/Icons/StarIcon'
import Button from 'components/Shared/Button/Index'
import { useNavigate, useParams } from 'react-router-dom'
import { getUserById } from 'features/users/usersSlice';
import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from 'app/hooks'
import { characterLimit } from 'utils/helpers'



const Index = () => {
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const { id } = useParams()
    const { user, isError } = useAppSelector((state: any) => state.users)


    useEffect(() => {
        dispatch(getUserById(id))
      }, [])


    return (
        <section>
            <div className='user__details__wrapper'>
                <button
                    onClick={() => navigate(-1)}
                    className='back__btn'>
                    <ArrowBack />&nbsp; Back to Users
                </button>
                <div className='activation__cta'>
                    <h1 className='heading'>User Details</h1>
                    <div>
                        <Button background='blacklist__btn' children={'Blacklist User'} />
                        <Button background='activate__btn' children={'Activate User'} />
                    </div>
                </div>
                <div className='user__board'>
                    <div className="tandem__one">
                        <div className='user__profile'>
                            <img src={user?.profile?.avatar} alt={`${user?.profile?.firstName}_avatar`} />
                            <div>
                                <h1>{user?.profile?.firstName} {user?.profile?.lastName}</h1>
                                <p>{user?.accountNumber}</p>
                            </div>
                        </div>
                        <div className='user__tier'>
                            <h1>User’s Tier</h1>
                            <StarIcon />
                        </div>
                        <div className='bank__details'>
                            <h1>{user?.profile?.currency}{user?.accountBalance}</h1>
                            <p>{user?.profile?.bvn}/Providus Bank</p>
                        </div>
                    </div>
                    <Tabs>
                        <section className='tab__style' title={`General Details`}>
                            <div className='tandem__two'>
                                <h5>Personal Information</h5>
                                <div className='block__base'>
                                    <div>
                                        <h2>{'full Name'}</h2>
                                        <h3>{user?.profile?.firstName} {user?.profile?.lastName}</h3>
                                    </div>
                                    <div>
                                        <h2>{'phone number'}</h2>
                                        <h3>{user?.profile?.phoneNumber}</h3>
                                    </div>
                                    <div>
                                        <h2>{'email address'}</h2>
                                        <h3>{characterLimit(user?.email, 15)}</h3>
                                    </div>
                                    <div>
                                        <h2>{'bvn'}</h2>
                                        <h3>{user?.profile?.bvn}</h3>
                                    </div>
                                    <div>
                                        <h2>{'gender'}</h2>
                                        <h3>{user?.profile?.gender}</h3>
                                    </div>
                                    <div>
                                        <h2>{'marital status'}</h2>
                                        <h3>{user?.profile?.status || 'Single'}</h3>
                                    </div>
                                    <div>
                                        <h2>{'children'}</h2>
                                        <h3>{user?.profile?.children || 0}</h3>
                                    </div>
                                    <div>
                                        <h2>{'type of residence'}</h2>
                                        <h3>{user?.profile?.address}</h3>
                                    </div>
                                </div>
                            </div>
                            <div className='tandem__two'>
                                <h5>Education and Employment</h5>
                                <div className='block__base'>
                                    <div>
                                        <h2>{'level of education'}</h2>
                                        <h3>{user?.education?.level}</h3>
                                    </div>
                                    <div>
                                        <h2>{'employment status'}</h2>
                                        <h3>{user?.education?.employmentStatus}</h3>
                                    </div>
                                    <div>
                                        <h2>{'sector of employment'}</h2>
                                        <h3>{user?.education?.sector}</h3>
                                    </div>
                                    <div>
                                        <h2>{'Duration of employment'}</h2>
                                        <h3>{user?.education?.duration}</h3>
                                    </div>
                                    <div>
                                        <h2>{'office email'}</h2>
                                        <h3>{user?.education?.officeEmail}</h3>
                                    </div>
                                    <div>
                                        <h2>{'Monthly income'}</h2>
                                        <h3>{user?.profile?.currency}{user?.education?.monthlyIncome[1]} - {user?.profile?.currency}{user?.education?.monthlyIncome[0]}</h3>
                                    </div>
                                    <div>
                                        <h2>{'loan repayment'}</h2>
                                        <h3>{user?.profile?.currency}{user?.education?.loanRepayment}</h3>
                                    </div>
                                </div>
                            </div>
                            <div className='tandem__two'>
                                <h5>Socials</h5>
                                <div className='block__base'>
                                    <div>
                                        <h2>{'twitter'}</h2>
                                        <h3>{user?.socials?.twitter}</h3>
                                    </div>
                                    <div>
                                        <h2>{'facebook'}</h2>
                                        <h3>{user?.socials?.facebook}</h3>
                                    </div>
                                    <div>
                                        <h2>{'instagram'}</h2>
                                        <h3>{user?.socials?.instagram}</h3>
                                    </div>
                                </div>
                            </div>
                            <div className='tandem__two'>
                                <h5>Guarantor</h5>
                                <div className='block__base'>
                                    <div>
                                        <h2>{'full bame'}</h2>
                                        <h3>{user?.guarantor?.firstName}</h3>
                                    </div>
                                    <div>
                                        <h2>{'Phone Number'}</h2>
                                        <h3>{user?.guarantor?.phoneNumber}</h3>
                                    </div>
                                    <div>
                                        <h2>{'email address'}</h2>
                                        <h3>{user?.guarantor?.address}</h3>
                                    </div>
                                    <div>
                                        <h2>{'relationship'}</h2>
                                        <h3>{user?.guarantor?.relationship || 'Sister'}</h3>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <span className='l__tabs' title={`Documents`}> Currently Unavailable </span>
                        <span className='l__tabs' title={`Bank Details`}> Currently Unavailable </span>
                        <span className='l__tabs' title={`Loans`}> Currently Unavailable </span>
                        <span className='l__tabs' title={`Savings`}> Currently Unavailable </span>
                        <span className='l__tabs' title={`App and System`}> Currently Unavailable </span>
                    </Tabs>
                </div>
            </div>
        </section>
    )
}

export default Index
