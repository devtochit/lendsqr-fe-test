import CaretDownIcon from 'components/Icons/CaretDownIcon'
import Suitcase from 'components/Icons/Suitcase'
import { animationRightVariant, navLinks } from 'utils/data'
import '../Sidebar/sidebar.scss'
import { NavLink } from 'react-router-dom'
import { motion } from 'framer-motion'

interface Props {
  isNavOpen: boolean
}

const index = ({ isNavOpen }: Props) => {
  const isActiveStyle = {
    background: '#97fafa28',
    borderLeft: '3px solid #39CDCC',
  }

  const navLinkSequence = (i: number, navlink: any) => (
    <motion.span
      initial={{ opacity: 0, translateY: -40 }}
      animate={{ opacity: 1, translateY: 0 }}
      transition={{ duration: 0.2, delay: i * 0.1 }}
      key={i}>
      <NavLink to={navlink.href} className='navlinks'
        style={({ isActive }) => isActive ? isActiveStyle : undefined}
      >
        <img src={navlink.icon} alt={`${navlink.title}_icon_group`} />
        <p>{navlink.title}</p>
      </NavLink>
    </motion.span>
  )

  const renderDashboard = navLinks.filter((val => val.category.includes('dashboard'))).map((navlink, i) => (
    navLinkSequence(i, navlink)
  ))

  const renderCustomersNav = navLinks.filter((val => val.category.includes('customer'))).map((navlink, i) => (
    navLinkSequence(i, navlink)
  ))

  const renderBusinessNav = navLinks.filter((val => val.category.includes('business'))).map((navlink, i) => (
    navLinkSequence(i, navlink)
  ))

  const renderSettingsNav = navLinks.filter((val => val.category.includes('settings'))).map((navlink, i) => (
    navLinkSequence(i, navlink)
  ))

  return (
    <>
      {isNavOpen &&
        <motion.section
          variants={animationRightVariant}
          initial="initial"
          animate="final"
          exit="exit"
          className='sidebar__wrapper'>
          <div className='sidebar__content'>
            <div className='switch_org_toggle'>
              <Suitcase />
              Switch Organization
              <CaretDownIcon />
            </div>

            <h1 className='section__header'>&nbsp;</h1>
            {renderDashboard}

            <h1 className='section__header'>Customers</h1>
            {renderCustomersNav}

            <h1 className='section__header'>Businesses</h1>
            {renderBusinessNav}

            <h1 className='section__header'>Settings</h1>
            {renderSettingsNav}

          </div>
        </motion.section>}
    </>
  )
}

export default index