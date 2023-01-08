import { lazy } from 'react';
import '../Layout/layout.scss'
import { useState, useEffect } from 'react'
const Navbar = lazy(() => import('../Navbar/index'));
const Sidebar = lazy(() => import('../Sidebar/index'));

interface Props {
  children: any
}


const Layout = ({ children }: Props) => {
  const [isNavOpen, setIsNavOpen] = useState(false)

  const handleResize = () => {
    window.innerWidth < 1024 ? setIsNavOpen(false) : setIsNavOpen(true)
  }

  useEffect(() => {
    window.innerWidth > 1024 &&  setIsNavOpen(true)
    window.addEventListener("resize", handleResize)
  }, [])

  return (
    <div className='layout__wrapper'>
      <Navbar setIsNavOpen={setIsNavOpen} isNavOpen={isNavOpen}/>
      <Sidebar isNavOpen={isNavOpen} />
      <div className='children__display'>
      {children}
      </div>
    </div>
  )
}

export default Layout
