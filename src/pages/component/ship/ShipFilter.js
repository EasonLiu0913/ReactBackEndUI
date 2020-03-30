import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'

// ANTD
import { Select, Button } from 'antd'
import 'antd/dist/antd.css'

// jQuery
import $ from 'jquery'
import 'jquery-ui/ui/widgets/datepicker'
import 'jquery-ui/themes/base/datepicker.css'

// CSS
import './ShipFilter.scss'

const { Option } = Select

const ShipFilter = props => {
  const [dateFilterBtn, setDateFilterBtn] = useState(false)
  useEffect(() => {
    $(document).ready(function() {
      $('#date_added').datepicker({
        keyboardNavigation: false,
        forceParse: false,
        calendarWeeks: true,
        autoclose: true,
        dateFormat: 'yy-mm-dd',
        onSelect: (dateText, inst) => {
          props.sendOrderDate(dateText)
        },
      })
    })
  }, [])

  useEffect(() => {
    props.sendOrderDateOn(dateFilterBtn)
  }, [dateFilterBtn])

  function handleDateFilter() {
    setDateFilterBtn(!dateFilterBtn)
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
                    defaultValue="2020/04/01"
                  />
                </div>
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
