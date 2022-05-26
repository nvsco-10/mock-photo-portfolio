import React, { useState, useEffect } from 'react'
import { usePortfolio } from '../utils/PortfolioContext'
import { useLocation, Link } from "react-router-dom";

const PortfolioNav = () => {
  let location = useLocation();
  const [ showMenu, setShowMenu ] = useState(false)
  const [ redirect, setRedirect ] = useState(false)
  const { activePage, setActivePage } = usePortfolio();

  const handleClick = (e) => {
      const target = e.target.textContent;
      setActivePage(target);

  }

  useEffect(() => {
    if(location.pathname !== '/') {
      setRedirect(true)
    } else {
      setRedirect(false)
    }
  }, [])

  const toggleClass = (e) => {

    if (showMenu) {
      return 'portfolio-menu active'
    } else {
      return `portfolio-menu`
    }
  }
  
  const handleMenuToggle = (e) => {
    if (e.target.id === 'toggle') {
        setShowMenu(!showMenu)
    }
  }

  const activeStyle = (link) => {
    if (link === activePage) {
        return "link active"
    } else {
        return "link inactive"
    }
}

  return (
    <li id='toggle' onClick={handleMenuToggle}>
        Portfolio
        <ul className={toggleClass(showMenu)}>
            {redirect ? (
              <Link to='/'>
              <li className={activeStyle('Nature')} onClick={handleClick}>Nature</li>
              <li className={activeStyle('Portrait')} onClick={handleClick}>Portrait</li>
              <li className={activeStyle('Architecture')} onClick={handleClick}>Architecture</li>
              </Link> )
              : (
              <>
              <li className={activeStyle('Nature')} onClick={handleClick}>Nature</li>
              <li className={activeStyle('Portrait')} onClick={handleClick}>Portrait</li>
              <li className={activeStyle('Architecture')} onClick={handleClick}>Architecture</li>
              </>
              )
            }
        </ul>
    </li>
  )
}

export default PortfolioNav