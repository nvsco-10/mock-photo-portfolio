import React, { useState, useEffect } from 'react'
import { usePortfolio } from '../utils/PortfolioContext'
import { useLocation, Link } from "react-router-dom";

const PortfolioNav = () => {
  let location = useLocation();
  const [ showMenu, setShowMenu ] = useState(false)
  const [ redirect, setRedirect ] = useState(false)
  const { setActivePage } = usePortfolio();

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

  return (
    <li id='toggle' onClick={handleMenuToggle}>
        Portfolio
        <ul className={toggleClass(showMenu)}>
            {redirect ? (
              <Link to='/'>
              <li onClick={handleClick}>Nature</li>
              <li onClick={handleClick}>Portrait</li>
              <li onClick={handleClick}>Architecture</li>
              </Link> )
              : (
              <>
              <li onClick={handleClick}>Nature</li>
              <li onClick={handleClick}>Portrait</li>
              <li onClick={handleClick}>Architecture</li>
              </>
              )
            }
        </ul>
    </li>
  )
}

export default PortfolioNav