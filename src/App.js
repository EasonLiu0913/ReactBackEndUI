import React, { useEffect } from 'react'
import logo from './logo.svg'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'

import Product from './pages/Product'
import Ship from './pages/Ship'
import Message from './pages/Message'
import Promote from './pages/Promote'
import Chart from './pages/Chart'

import LeftNav from './component/LeftNav'
import ScrollToTop from './component/ScrollToTop'

//CSS
import './App.css'
import './css/bootstrap.min.css'
import './font-awesome/css/font-awesome.css'
import './css/style.css'
import './css/plugins/toastr/toastr.min.css'
// import "./js/plugins/gritter/jquery.gritter.css";

function App() {
  useEffect(() => {}, [])
  return (
    <>
      <Router>
        <LeftNav />
        <ScrollToTop>
          <Switch>
            <Route path="/Ship">
              <Ship />
            </Route>
            <Route path="/Message">
              <Message />
            </Route>
            <Route path="/Product">
              <Product />
            </Route>
            <Route path="/Promote">
              <Promote />
            </Route>
            <Route path="/Chart">
              <Chart />
            </Route>

            <Route exact path="/">
              <Ship />
            </Route>
          </Switch>
        </ScrollToTop>
      </Router>
    </>
  )
}

export default App
