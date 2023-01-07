import BellIcon from '../Icons/BellIcon'
import CaretDownIcon from '../Icons/CaretDownIcon'
import Hamburger from '../Icons/Hamburger'
import LogoIcon from '../Icons/LogoIcon'
import Searchbar from '../Shared/Searchbar/Index'
import '../Navbar/navbar.scss'

interface Props {
  isNavOpen: boolean,
  setIsNavOpen: any
}

const index = ({isNavOpen, setIsNavOpen }: Props) => {
  return (
      <nav className='nav__wrapper'>
        <div className='logo_wrapper'>
          <span onClick={()=> setIsNavOpen(!isNavOpen)} className='hamburger'><Hamburger /></span><LogoIcon />
        </div>
        <div className='interactive__board'>
          <div className=' xm__hide'>
            <Searchbar />
          </div>
          <div className='interactive__board__content'>
            <div className='xl__hide'><a href="https://github.com/Layoolar/lendsqr-fe-test" target={'_blank'}>Docs</a></div>
            <BellIcon />
            <div className='user__actions'>
              <img src={require('./profile__user.png')} alt="user__icon" />
              <h2 className=' xm__hide'>{'Olayiwola'}</h2>
              <span className='xm__hide'><CaretDownIcon /></span>
            </div>
          </div>
        </div>
      </nav>
  )
}

export default index