import React, { useState, useEffect } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  useHistory,
} from 'react-router-dom'

// ANTD
import { Select, Button } from 'antd'
import 'antd/dist/antd.css'

// jQuery
import $ from 'jquery'
import 'jquery-ui/ui/widgets/datepicker'
import 'jquery-ui/themes/base/datepicker.css'

import Calendar from 'react-calendar'
import moment from 'moment'

// CSS
import './ShipFilter.scss'
import './reactCal.css'
import 'react-calendar/dist/Calendar.css'

const ShipFilter = props => {
  const { Option } = Select
  const history = useHistory()

  const [dateFilterBtn, setDateFilterBtn] = useState(false)
  const [showCal, setShowCal] = useState(false)
  const [inputDate, setInputDate] = useState(new Date())
  useEffect(() => {
    $(document).ready(function() {
      $('#date_added').focus(function() {
        setShowCal(true)
      })

      // $('#date_added').datepicker({
      //   keyboardNavigation: false,
      //   forceParse: false,
      //   calendarWeeks: true,
      //   autoclose: true,
      //   dateFormat: 'yy-mm-dd',
      //   onSelect: (dateText, inst) => {
      //     props.sendOrderDate(dateText)
      //   },
      // })
    })
  }, [])

  useEffect(() => {
    props.sendOrderDateOn(dateFilterBtn)
  }, [dateFilterBtn])

  function handleDateFilter() {
    setDateFilterBtn(!dateFilterBtn)
  }

  const onChange = date => {
    console.log('onChange', date)
    setInputDate(date)
    let timeValue = date && moment(date).format('YYYY-MM-DD')
    // console.log(timeValue)
    $('#date_added').val(timeValue)
    props.sendOrderDate(timeValue)
    setShowCal(false)
    // history.push('/Message')
  }

  const tileClassName = ({ date, view }) => {
    // console.log('date', date)
    // console.log('view', view)
    // let getDate = moment(date).format('YYYY-MM-DD')
    // console.log(getDate === '2019-01-07')
    // if (getDate === moment(new Date()).format('YYYY-MM-DD')) {
    //   return '1'
    // } else if (getDate === '2019-01-19') {
    //   return 'oneimage'
    // }
    // return null
  }

  return (
    <>
      <div className="wrapper wrapper-content animated fadeInRight ecommerce">
        <div className="ibox-content m-b-sm border-bottom">
          <div className="row">
            <div className="col-sm-4">
              <div className="form-group">
                <label className="col-form-label" htmlFor="order_id">
                  Order ID
                </label>
                <input
                  type="text"
                  id="order_id"
                  name="order_id"
                  placeholder="Order ID"
                  className="form-control"
                  onChange={e => props.sendOrderID(e.target.value)}
                />
              </div>
            </div>
            <div className="col-sm-4">
              <div className="form-group">
                <label className="col-form-label" htmlFor="status">
                  Order status
                </label>
                <div>
                  <Select
                    defaultValue="全部狀態"
                    style={{ width: '100%' }}
                    onChange={value => props.sendOrderStatus(value)}
                  >
                    <Option value="全部狀態">全部狀態</Option>
                    <Option value="訂單成立">訂單成立</Option>
                    <Option value="已出貨">已經出貨</Option>
                    <Option value="退貨完成">退貨完成</Option>
                    {/* <Option value="orderExpired">超過期限</Option> */}
                  </Select>
                </div>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="form-group">
                <label className="col-form-label" htmlFor="customer">
                  Customer
                </label>
                <input
                  type="text"
                  id="customer"
                  name="customer"
                  placeholder="Customer"
                  className="form-control"
                  onChange={e => props.sendOrderCustomer(e.target.value)}
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-4">
              <div className="form-group">
                <label className="col-form-label" htmlFor="date_added">
                  Date Filter :
                </label>
                {dateFilterBtn && (
                  <Button
                    type="primary"
                    style={{
                      margin: '0px 8px',
                      padding: '0px 5px',
                      height: '22px',
                    }}
                    onClick={handleDateFilter}
                  >
                    On
                  </Button>
                )}

                {!dateFilterBtn && (
                  <Button
                    danger
                    style={{
                      margin: '0px 8px',
                      padding: '0px 5px',
                      height: '22px',
                    }}
                    onClick={handleDateFilter}
                  >
                    Off
                  </Button>
                )}

                <div className="input-group date">
                  <span className="input-group-addon">
                    <i className="fa fa-calendar"></i>
                  </span>
                  <input
                    id="date_added"
                    type="text"
                    className="form-control"
                    value={moment(inputDate).format('YYYY-MM-DD')}
                  />
                </div>
                {showCal && (
                  <Calendar
                    onChange={onChange}
                    tileClassName={tileClassName}
                    minDetail="month"
                    locale="en"
                    showNeighboringMonth={false}
                  />
                )}
              </div>
            </div>
            <div className="col-sm-4">
              <div className="form-group">
                <label className="col-form-label" htmlFor="shipping_methods">
                  Shipping methods
                </label>
                <Select
                  defaultValue="全部訂單"
                  style={{ width: '100%' }}
                  onChange={value => props.sendOrderShipMethods(value)}
                >
                  <Option value="全部訂單">全部訂單</Option>
                  <Option value="宅配到府">宅配到府</Option>
                  <Option value="超商取貨">超商取貨</Option>
                </Select>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="form-group">
                <label className="col-form-label" htmlFor="amount">
                  Amount
                </label>
                <input
                  type="text"
                  id="amount"
                  name="amount"
                  placeholder="Amount"
                  className="form-control"
                  onChange={e => props.sendOrderAmount(e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ShipFilter
