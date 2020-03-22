import React from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'

//icon
import { IconContext } from 'react-icons'
import { FiLogOut } from 'react-icons/fi'

//SCSS
import './Header.scss'

const Header = () => {
  return (
    <header
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        color: '#888888',
        height: '60px',
      }}
    >
      <div>
        <span style={{ fontSize: '14px', marginLeft: '10px' }}>
          Welcome to TRIPLEC Admin System.
        </span>
      </div>
      <div>
        <Link to="#" className="logout-link">
          <span>Log Out</span>
          <IconContext.Provider
            value={{
              className: 'logout-icon',
            }}
          >
            <FiLogOut />
          </IconContext.Provider>
        </Link>
      </div>
    </header>
  )
}

export default Header
