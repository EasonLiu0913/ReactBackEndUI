import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom'

//CSS
import '../css/bootstrap.min.css'
import '../font-awesome/css/font-awesome.css'
import '../css/style.css'
import '../css/plugins/toastr/toastr.min.css'
// import "../js/plugins/gritter/jquery.gritter.css";

function LeftNav() {
  useEffect(() => {}, [])

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
                  <span className="block m-t-xs font-bold">David Williams</span>
                  <span className="text-muted text-xs block">
                    Art Director <b className="caret"></b>
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
              >
                <i className="fa fa-diamond"></i>{' '}
                <span className="nav-label">行銷</span>
              </NavLink>
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
