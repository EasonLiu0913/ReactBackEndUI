import React, { useState, useEffect } from 'react'
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
import { getOrderlistData } from './component/ship/actions'

//header
import Header from './component/Header'
import Banner from './component/Banner'
import ShipFilter from './component/ship/ShipFilter'
import ShipTable from './component/ship/ShipTable'

const pageName = '出貨'

const bgStyle = {
  flex: 1,
  height: '300vh',
  padding: '0',
}

const Ship = props => {
  const [orderID, setOrderID] = useState('')
  const [orderStatus, setOrderStatus] = useState('')
  const [orderCustomer, setOrderCustomer] = useState('')
  useEffect(() => {
    props.getOrderlistData()
  }, [])

  return (
    <>
      <div id="page-wrapper" className="gray-bg" style={bgStyle}>
        <Header />
        <Banner pageName={pageName} />
        <ShipFilter
          sendOrderID={text => {
            //傳入text，然後回設定父母元件的state值
            setOrderID(text)
          }}
          sendOrderStatus={text => {
            //傳入text，然後回設定父母元件的state值
            setOrderStatus(text)
          }}
          sendOrderCustomer={text => {
            //傳入text，然後回設定父母元件的state值
            setOrderCustomer(text)
          }}
        />
        <ShipTable
          data={props.data}
          orderID={orderID}
          orderStatus={orderStatus}
          orderCustomer={orderCustomer}
        />
      </div>
    </>
  )
}

// 選擇對應的reducer
const mapStateToProps = store => {
  return { data: store.orderlistData }
}

//action
const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      getOrderlistData,
    },
    dispatch
  )
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Ship))
