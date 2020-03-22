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
import Header from './component/common/Header'
import Banner from './component/common/Banner'
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
  const [orderDate, setOrderDate] = useState('')
  const [orderDateOn, setOrderDateOn] = useState(false)
  const [orderShipMethods, setOrderShipMethods] = useState('')
  const [orderAmount, setOrderAmount] = useState('')

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
          sendOrderDate={text => {
            //傳入text，然後回設定父母元件的state值
            setOrderDate(text)
          }}
          sendOrderDateOn={text => {
            //傳入text，然後回設定父母元件的state值
            setOrderDateOn(text)
          }}
          sendOrderShipMethods={text => {
            //傳入text，然後回設定父母元件的state值
            setOrderShipMethods(text)
          }}
          sendOrderAmount={text => {
            //傳入text，然後回設定父母元件的state值
            setOrderAmount(text)
          }}
        />
        <ShipTable
          data={props.data}
          orderID={orderID}
          orderStatus={orderStatus}
          orderCustomer={orderCustomer}
          orderDate={orderDate}
          orderShipMethods={orderShipMethods}
          orderAmount={orderAmount}
          orderDateOn={orderDateOn}
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
