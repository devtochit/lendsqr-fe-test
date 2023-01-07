
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
        icon: './dashboard.png',
        category: 'customer',
    },
    {
        title: 'Guarantors',
        href: '/#&',
        icon: './dashboard.png',
        category: 'customer',
    },
    {
        title: 'Loans',
        href: '/#&',
        icon: './dashboard.png',
        category: 'customer',
    },
    {
        title: 'Decision Models',
        href: '/#&',
        icon: './dashboard.png',
        category: 'customer',
    },
    {
        title: 'Savings',
        href: '/#&',
        icon: './dashboard.png',
        category: 'customer',
    },
    {
        title: 'Loan Requests',
        href: '/#&',
        icon: './dashboard.png',
        category: 'customer',
    },
    {
        title: 'Whitelist',
        href: '/#&',
        icon: './dashboard.png',
        category: 'customer',
    },
    {
        title: 'Karma',
        href: '/#&',
        icon: './dashboard.png',
        category: 'customer',
    },
    {
        title: 'Organization',
        href: '/#&',
        icon: './dashboard.png',
        category: 'business',
    },
    {
        title: 'Loan Products',
        href: '/#&',
        icon: './dashboard.png',
        category: 'business',
    },
    {
        title: 'Savings Products',
        href: '/#&',
        icon: './dashboard.png',
        category: 'business',
    },
    {
        title: 'Fees and Charges',
        href: '/#&',
        icon: './dashboard.png',
        category: 'business',
    },
    {
        title: 'Transactions',
        href: '/#&',
        icon: './dashboard.png',
        category: 'business',
    },
    {
        title: 'Services',
        href: '/#&',
        icon: './dashboard.png',
        category: 'business',
    },
    {
        title: 'Service Account',
        href: '/#&',
        icon: './dashboard.png',
        category: 'business',
    },
    {
        title: 'Settlements',
        href: '/#&',
        icon: './dashboard.png',
        category: 'business',
    },
    {
        title: 'Reports',
        href: '/#&',
        icon: './dashboard.png',
        category: 'business',
    },
    {
        title: 'Preferences',
        href: '/#&',
        icon: './dashboard.png',
        category: 'settings',
    },
    {
        title: 'Fees and Pricing',
        href: '/#&',
        icon: './dashboard.png',
        category: 'settings',
    },
    {
        title: 'Audit Logs',
        href: '/#&',
        icon: './dashboard.png',
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