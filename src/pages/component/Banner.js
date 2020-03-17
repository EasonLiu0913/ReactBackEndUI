import React from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'

//icon
import { IconContext } from 'react-icons'
import { FiLogOut } from 'react-icons/fi'

//SCSS
// import "./Header.scss";

const Banner = props => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'left',
        background: '#fff',
        height: '100px',
        padding: '16px 0px',
      }}
    >
      <div style={{ marginLeft: '10px' }}>
        <span style={{ fontSize: '24px' }}>廠商管理後台</span>
      </div>
      <div style={{ marginLeft: '10px' }}>
        {' '}
        <span> Home / {props.pageName} </span>
      </div>
    </div>
  )
}

export default Banner
