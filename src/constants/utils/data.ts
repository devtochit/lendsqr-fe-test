
const navLinks: { title: string; icon: string; href: string, category: string }[] = [
    {
        title: 'Dashboard',
        href: '/dashboard',
        icon: './images/navlinkIcons/home_icon.svg',
        category: 'dashboard',
    },
    {
        title: 'Users',
        href: '/users',
        icon: './images/navlinkIcons/users_icon.svg',
        category: 'customer',
    },
    {
        title: 'Guarantors',
        href: '/#&',
        icon: './images/navlinkIcons/guarantors_icon.svg',
        category: 'customer',
    },
    {
        title: 'Loans',
        href: '/#&',
        icon: './images/navlinkIcons/loan_icon.svg',
        category: 'customer',
    },
    {
        title: 'Decision Models',
        href: '/#&',
        icon: './images/navlinkIcons/models_icon.svg',
        category: 'customer',
    },
    {
        title: 'Savings',
        href: '/#&',
        icon: './images/navlinkIcons/savings_icon.svg',
        category: 'customer',
    },
    {
        title: 'Loan Requests',
        href: '/#&',
        icon: './images/navlinkIcons/loanRequest_icon.svg',
        category: 'customer',
    },
    {
        title: 'Whitelist',
        href: '/#&',
        icon: './images/navlinkIcons/whitelist_icon.svg',
        category: 'customer',
    },
    {
        title: 'Karma',
        href: '/#&',
        icon: './images/navlinkIcons/karma_icon.svg',
        category: 'customer',
    },
    {
        title: 'Organization',
        href: '/#&',
        icon: './images/navlinkIcons/organisation_icon.svg',
        category: 'business',
    },
    {
        title: 'Loan Products',
        href: '/#&',
        icon: './images/navlinkIcons/loanRequest_icon.svg',
        category: 'business',
    },
    {
        title: 'Savings Products',
        href: '/#&',
        icon: './images/navlinkIcons/bank_icon.svg',
        category: 'business',
    },
    {
        title: 'Fees and Charges',
        href: '/#&',
        icon: './images/navlinkIcons/fees_icon.svg',
        category: 'business',
    },
    {
        title: 'Transactions',
        href: '/#&',
        icon: './images/navlinkIcons/transactions_icon.svg',
        category: 'business',
    },
    {
        title: 'Services',
        href: '/#&',
        icon: './images/navlinkIcons/services_icon.svg',
        category: 'business',
    },
    {
        title: 'Service Account',
        href: '/#&',
        icon: './images/navlinkIcons/serviceAccount_icon.svg',
        category: 'business',
    },
    {
        title: 'Settlements',
        href: '/#&',
        icon: './images/navlinkIcons/settlements_icon.svg',
        category: 'business',
    },
    {
        title: 'Reports',
        href: '/#&',
        icon: './images/navlinkIcons/reports_icon.svg',
        category: 'business',
    },
    {
        title: 'Preferences',
        href: '/#&',
        icon: './images/navlinkIcons/preferences_icon.svg',
        category: 'settings',
    },
    {
        title: 'Fees and Pricing',
        href: '/#&',
        icon: './images/navlinkIcons/fees_and_pricing_icon.svg',
        category: 'settings',
    },
    {
        title: 'Audit Logs',
        href: '/#&',
        icon: './images/navlinkIcons/auditLogs_icon.svg',
        category: 'settings',
    },
   
]

const headings: { title: string; }[] = [
    { title: "Organisation" },
    { title: "Username" },
    { title: "Email" },
    { title: "Phone Number" },
    { title: "Date Joined" },
    { title: "Status" }
]


const animationRightVariant = {
    initial: {
      opactity: 0,
      x: "-100vw",
    },
    final: {
      opactity: 1,
      x: 0,
      transition: {duration: 0.2}
    },
    exit: {
      opactity: 0,
      x: "-100vw",
      transition: {duration: 0.2},
    }
  };

export {
    navLinks,
    headings,
    animationRightVariant
}