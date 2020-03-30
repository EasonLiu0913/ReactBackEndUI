import React, { useEffect , useState} from 'react'
import { NavLink } from 'react-router-dom'

import classnames from 'classnames'

//CSS
import '../css/bootstrap.min.css'
import '../font-awesome/css/font-awesome.css'
import '../css/style.css'
import '../css/plugins/toastr/toastr.min.css'
// import "../js/plugins/gritter/jquery.gritter.css";
import './styNav.scss'



function LeftNav() {

  useEffect(() => {}, [])

  const [promoteClick,setPromoteClick] = useState(false)
  const [couponClick,setCouponClick] = useState(false)
  const [adClick,setAdClick] = useState(false)

  const promoteOpen = classnames('nav' ,'sty-nav', 'nav-second-level', 'collapse' , {in:promoteClick })
  const couponActive = classnames({ active : couponClick })
  const adActive = classnames({ active : adClick })


  // 左選單樣式
  const navStyle = {
    // width: "220px",
    // height: "100vh"
    position: 'fixed',
  }

  // 左選單選取高亮
  const selectStyle = {
    borderLeft: '4px solid #19aa8d',
    background: '#293846',
  }

  return (
    <div style={navStyle}>
      <nav className="navbar-default navbar-static-side" role="navigation">
        <div className="sidebar-collapse">
          <ul className="nav metismenu" id="side-menu">
            <li className="nav-header">
              <div className="dropdown profile-element">
                <img
                  alt=""
                  className="rounded-circle"
                  src="img/profile_small.jpg"
                />
                <a
                  data-toggle="dropdown"
                  className="dropdown-toggle"
                  href="index.html"
                >
                  <span className="block m-t-xs font-bold" style={{fontSize:'20px'}}>David Wang</span>
                  <span className="text-muted text-xs block"  style={{fontSize:'16px'}}>
                    GARMIN 銷售總監 <b className="caret"></b>
                  </span>
                </a>
                <ul className="dropdown-menu animated fadeInRight m-t-xs">
                  <li>
                    <a className="dropdown-item" href="profile.html">
                      Profile
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="contacts.html">
                      Contacts
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="mailbox.html">
                      Mailbox
                    </a>
                  </li>
                  <li className="dropdown-divider"></li>
                  <li>
                    <a className="dropdown-item" href="login.html">
                      Logout
                    </a>
                  </li>
                </ul>
              </div>
              <div className="logo-element">IN+</div>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/Ship"
                activeStyle={selectStyle}
              >
                <i className="fa fa-shopping-cart"></i>{' '}
                <span className="nav-label">出貨</span>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/Message"
                activeStyle={selectStyle}
              >
                <i className="fa fa-envelope"></i>{' '}
                <span className="nav-label">留言 </span>
                <span className="label label-warning float-right">16/24</span>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/Product"
                activeStyle={selectStyle}
              >
                <i className="fa fa-th-large"></i>{' '}
                <span className="nav-label">商品上架</span>{' '}
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/Promote"
                activeStyle={selectStyle}
                onClick={()=>setPromoteClick(!promoteClick)}
              >
                <i className="fa fa-diamond"></i>{' '}
                <span className="nav-label">行銷</span>
                </NavLink>
                <ul className={promoteOpen}>
                  <NavLink
                  className="nav-link"
                  to="/Promote/couponList"
                  onClick={()=>setCouponClick(!couponClick)}
                  >
                    <li className={couponActive}>優惠券</li>
                  </NavLink>
                  <NavLink
                  className="nav-link"
                  to="/Promote/adList"
                  onClick={()=>setAdClick(!adClick)}
                  >
                    <li className={adActive}>廣告</li>
                  </NavLink>
                </ul>
               
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                to="/Chart"
                activeStyle={selectStyle}
              >
                <i className="fa fa-bar-chart-o"></i>{' '}
                <span className="nav-label">報表</span>
                <span className="fa arrow"></span>
              </NavLink>
              <ul className="nav nav-second-level collapse">
                <li>
                  <a href="graph_flot.html">Flot Charts</a>
                </li>
                <li>
                  <a href="graph_morris.html">Morris.js Charts</a>
                </li>
                <li>
                  <a href="graph_rickshaw.html">Rickshaw Charts</a>
                </li>
                <li>
                  <a href="graph_chartjs.html">Chart.js</a>
                </li>
                <li>
                  <a href="graph_chartist.html">Chartist</a>
                </li>
                <li>
                  <a href="c3.html">c3 charts</a>
                </li>
                <li>
                  <a href="graph_peity.html">Peity Charts</a>
                </li>
                <li>
                  <a href="graph_sparkline.html">Sparkline Charts</a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default LeftNav
