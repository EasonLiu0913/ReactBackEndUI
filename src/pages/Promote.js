import React, { useState, useEffect, useSelector } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  withRouter,
} from 'react-router-dom'

//redux
import { connect } from 'react-redux'
//action
import { bindActionCreators } from 'redux'

//component
import Header from './component/common/Header'
import Banner from './component/common/Banner'
import AddCoupon from './component/stacey/AddCoupon'
import CouponList from './component/stacey/CouponList'
import AdList from './component/stacey/AdList'



const pageName = '訊息'

const bgStyle = {
  flex: 1,
  height: '300vh',
  padding: '0',
}

const Promote = () => {
  return (
    <>
      <div id="page-wrapper" className="gray-bg" style={bgStyle}>
        <Header />
        <Banner pageName={pageName} />
        <Switch>
          <Route path="/Promote/couponList">
            <CouponList />
          </Route>
          <Route path="/Promote/addCoupon">
            <AddCoupon />
          </Route>
          <Route path="/Promote/adList">
            <AdList />
          </Route>
        </Switch>
        
      </div>
    </>
  )
}


// 選擇對應的reducer
const mapStateToProps = store => {
  return {
    
  }
}

//action
const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      
    },
    dispatch
  )
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Promote))

