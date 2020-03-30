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
        padding: '25px 0px',
      }}
    >
      <div style={{ marginLeft: '10px' }}>
        <span style={{ fontSize: '30px' }}>廠商管理後台</span>
      </div>
      <div style={{ margin: '15px 0px 0px 20px' }}>
        {' '}
        <span style={{fontSize: '20px'}}> Home / {props.pageName} </span>
      </div>
    </div>
  )
}

export default Banner
