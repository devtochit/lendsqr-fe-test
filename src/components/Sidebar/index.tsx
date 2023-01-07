import CaretDownIcon from '../Icons/CaretDownIcon'
import Suitcase from '../Icons/Suitcase'
import { animationRightVariant,navLinks } from '../../utils/data'
import './sidebar.scss'
import { NavLink } from 'react-router-dom'
import { motion } from 'framer-motion'

navLinks.filter((val => val.category.includes('customer'))).map((navlink, i) => (
    console.log(navlink.icon)
  ))
interface Props {
  isNavOpen: boolean
}
const index = ({ isNavOpen }: Props) => {
  const isActiveStyle = {
    background: '#97fafa28',
    borderLeft: '3px solid #39CDCC',
  }

const navLinks: { title: string; icon: string; href: string, category: string }[] = [
    {
        title: 'Dashboard',
        href: '/dashboard',
        icon: './dashboard.png',
        category: 'dashboard',
    },
    {
        title: 'Users',
        href: '/users',
        icon: './users.png',
        category: 'customer',
    },
    {
        title: 'Guarantors',
        href: '/#&',
        icon: './guarantor.png',
        category: 'customer',
    },
    {
        title: 'Loans',
        href: '/#&',
        icon: './loans.png',
        category: 'customer',
    },
    {
        title: 'Decision Models',
        href: '/#&',
        icon: './decision.png',
        category: 'customer',
    },
    {
        title: 'Savings',
        href: '/#&',
        icon: './savings.png',
        category: 'customer',
    },
    {
        title: 'Loan Requests',
        href: '/#&',
        icon: './loanRequest.png',
        category: 'customer',
    },
    {
        title: 'Whitelist',
        href: '/#&',
        icon: './whitelist.png',
        category: 'customer',
    },
    {
        title: 'Karma',
        href: '/#&',
        icon: './karma.png',
        category: 'customer',
    },
    {
        title: 'Organization',
        href: '/#&',
        icon: './organization.png',
        category: 'business',
    },
    {
        title: 'Loan Products',
        href: '/#&',
        icon: './loanProducts.png',
        category: 'business',
    },
    {
        title: 'Savings Products',
        href: '/#&',
        icon: './savingsProducts.png',
        category: 'business',
    },
    {
        title: 'Fees and Charges',
        href: '/#&',
        icon: './feesAndCharges.png',
        category: 'business',
    },
    {
        title: 'Transactions',
        href: '/#&',
        icon: './transactions.png',
        category: 'business',
    },
    {
        title: 'Services',
        href: '/#&',
        icon: './services.png',
        category: 'business',
    },
    {
        title: 'Service Account',
        href: '/#&',
        icon: './serviceAccount.png',
        category: 'business',
    },
    {
        title: 'Settlements',
        href: '/#&',
        icon: './settlements.png',
        category: 'business',
    },
    {
        title: 'Reports',
        href: '/#&',
        icon: './reports.png',
        category: 'business',
    },
    {
        title: 'Preferences',
        href: '/#&',
        icon: './preferences.png',
        category: 'settings',
    },
    {
        title: 'Fees and Pricing',
        href: '/#&',
        icon: './feesAndPricing.png',
        category: 'settings',
    },
    {
        title: 'Audit Logs',
        href: '/#&',
        icon: './auditLogs.png',
        category: 'settings',
    },
  ]


  const navLinkSequence = (i: number, navlink: any) => (
    <motion.span
      initial={{ opacity: 0, translateY: -40 }}
      animate={{ opacity: 1, translateY: 0 }}
      transition={{ duration: 0.2, delay: i * 0.1 }}
      key={i}>
      <NavLink to={navlink.href} className='navlinks'
        style={({ isActive }) => isActive ? isActiveStyle : undefined}
      >
        <img src={require(`${navlink.icon}`)} alt={`${navlink.title}_icon_group`} />
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