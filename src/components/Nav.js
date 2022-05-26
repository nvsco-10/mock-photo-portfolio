import { useState } from 'react'
import Wrapper from '../assets/wrappers/Nav'
import logo from '../assets/img/jacobsanders.png'
import PortfolioNav from './PortfolioNav'
import { GiHamburgerMenu } from 'react-icons/gi'

const Nav = () => {
  const [ showMenu, setShowMenu ] = useState(false)

  const handleClick = () => {
    setShowMenu(!showMenu)
  }

  const toggleMenuClass = () => {
    if(showMenu) {
      return 'menu active'
    } else {
      return 'menu'
    }
  }
  
  return (
    <Wrapper>
      <div className='mobile-header'>
        <a href="/">
          <img src={logo} alt="jacob sanders" />
        </a>
        <GiHamburgerMenu className='burger' onClick={handleClick}/>
      </div>
      <ul className={toggleMenuClass(showMenu)}>
        <PortfolioNav />
        <li><a href="/about">About</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
    </Wrapper>
  )
}

export default Nav