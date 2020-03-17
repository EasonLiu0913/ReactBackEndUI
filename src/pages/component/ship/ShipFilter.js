import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'

import { Select } from 'antd'
import 'antd/dist/antd.css'

// CSS
import './ShipFilter.scss'

const { Option } = Select

const ShipFilter = props => {
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
                  Date
                </label>
                <div className="input-group date">
                  <span className="input-group-addon">
                    <i className="fa fa-calendar"></i>
                  </span>
                  <input
                    id="date_added"
                    type="text"
                    className="form-control"
                    defaultValue="04/01/2020"
                  />
                </div>
              </div>
            </div>
            <div className="col-sm-4">
              <div className="form-group">
                <label className="col-form-label" htmlFor="shipping_methods">
                  Shipping methods
                </label>

                <input
                  id="shipping_methods"
                  type="text"
                  className="form-control"
                  placeholder="Shipping methods"
                />
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
