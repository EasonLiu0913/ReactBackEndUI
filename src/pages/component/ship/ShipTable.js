import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  withRouter,
} from 'react-router-dom'

// components
import ShipTableRows from './ShipTableRows'

// CSS
import '../../../css/plugins/footable/footable.core.css'

const ShipTable = props => {
  let isAnyData = false
  console.log(props.data)
  console.log(props.orderDateOn)
  function checkAllFilterBalnk(props) {
    if (
      props.orderID === '' &&
      (props.orderStatus === '' || props.orderStatus === '全部狀態') &&
      props.orderCustomer === '' &&
      (props.orderDateOn === '' || props.orderDateOn === false) &&
      (props.orderShipMethods === '' ||
        props.orderShipMethods === '全部訂單') &&
      props.orderAmount === ''
    ) {
      console.log('checkAllFilterBalnk true')
      return true
    } else {
      return false
    }
  }

  function checkOrderId(checkId) {
    if (props.orderID === '') return false
    if (checkId.toString() === props.orderID.toString()) {
      return true
    }
  }
  return (
    <>
      <div className="row">
        <div className="col-lg-12">
          <div className="ibox">
            <div className="ibox-content">
              <table
                className="footable table table-stripped toggle-arrow-tiny default footable-loaded"
                data-page-size="15"
              >
                <thead>
                  <tr>
                    <th className="footable-visible footable-first-column footable-sortable text-center">
                      Order ID
                      <span className="footable-sort-indicator"></span>
                    </th>
                    <th
                      data-hide="phone"
                      className="footable-visible footable-sortable text-center"
                    >
                      Customer<span className="footable-sort-indicator"></span>
                    </th>
                    <th
                      data-hide="phone"
                      className="footable-visible footable-sortable text-center"
                    >
                      Amount<span className="footable-sort-indicator"></span>
                    </th>
                    <th
                      data-hide="phone"
                      className="footable-visible footable-sortable text-center"
                    >
                      Date
                      <span className="footable-sort-indicator"></span>
                    </th>
                    <th
                      data-hide="phone"
                      className="footable-visible footable-sortable text-center"
                    >
                      Time
                      <span className="footable-sort-indicator"></span>
                    </th>
                    <th
                      data-hide="phone,tablet"
                      className="footable-visible footable-sortable text-center"
                    >
                      Shipping methods
                      <span className="footable-sort-indicator"></span>
                    </th>
                    <th
                      data-hide="phone"
                      className="footable-visible footable-sortable text-center"
                    >
                      Status<span className="footable-sort-indicator"></span>
                    </th>
                    <th className="footable-visible footable-last-column footable-sortable text-center">
                      Action<span className="footable-sort-indicator"></span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {props.data[0] ? (
                    props.data.map((val, ind) => {
                      if (checkAllFilterBalnk(props)) {
                        return (
                          <ShipTableRows
                            key={ind}
                            index={ind}
                            data={props.data[ind]}
                          />
                        )
                      } else if (props.orderID !== '') {
                        if (checkOrderId(props.data[ind].orderId)) {
                          isAnyData = true
                          return (
                            <ShipTableRows
                              key={ind}
                              index={ind}
                              data={props.data[ind]}
                            />
                          )
                        }
                      } else if (
                        props.orderStatus !== '' &&
                        props.orderStatus !== '全部狀態'
                      ) {
                        if (props.data[ind].outStatus == props.orderStatus) {
                          isAnyData = true
                          return (
                            <ShipTableRows
                              key={ind}
                              index={ind}
                              data={props.data[ind]}
                            />
                          )
                        }
                      } else if (props.orderCustomer !== '') {
                        console.log(
                          'props.data[ind].csId.toLowerCase()',
                          props.data[ind].csId.toLowerCase()
                        )
                        console.log(
                          'props.orderCustomer.toLowerCase()',
                          props.orderCustomer.toLowerCase()
                        )
                        if (
                          props.data[ind].csId.toLowerCase() ==
                          props.orderCustomer.toLowerCase()
                        ) {
                          isAnyData = true
                          return (
                            <ShipTableRows
                              key={ind}
                              index={ind}
                              data={props.data[ind]}
                            />
                          )
                        }
                      } else if (props.orderDate !== '') {
                        if (props.data[ind].date === props.orderDate) {
                          isAnyData = true
                          return (
                            <ShipTableRows
                              key={ind}
                              index={ind}
                              data={props.data[ind]}
                            />
                          )
                        }
                      } else if (props.orderShipMethods !== '') {
                        if (
                          props.data[ind].shippingWay === props.orderShipMethods
                        ) {
                          isAnyData = true
                          return (
                            <ShipTableRows
                              key={ind}
                              index={ind}
                              data={props.data[ind]}
                            />
                          )
                        }
                      } else if (props.orderAmount !== '') {
                        {
                          /* console.log('props.orderAmount', props.orderAmount)
                        console.log(!isNaN(props.orderAmount.substring(0, 1))) */
                        }
                        if (
                          props.orderAmount.substring(0, 1) === '>' ||
                          props.orderAmount.substring(0, 1) === '<' ||
                          props.orderAmount.substring(0, 1) === '='
                        ) {
                          if (props.orderAmount.length >= 2) {
                            console.log(
                              '第二字=檢驗',
                              props.orderAmount.substring(2, 1) === '='
                            )
                            if (props.orderAmount.substring(0, 1) === '>') {
                              if (props.orderAmount.substring(2, 1) === '=') {
                                {
                                  /* 大於等於 */
                                }
                                if (
                                  parseInt(props.data[ind].total) >=
                                  parseInt(
                                    props.orderAmount.substring(
                                      2,
                                      props.orderAmount.length
                                    )
                                  )
                                ) {
                                  isAnyData = true
                                  return (
                                    <ShipTableRows
                                      key={ind}
                                      index={ind}
                                      data={props.data[ind]}
                                    />
                                  )
                                }
                              } else {
                                {
                                  /* only 大於 */
                                }
                                if (
                                  parseInt(props.data[ind].total) >
                                  parseInt(
                                    props.orderAmount.substring(
                                      1,
                                      props.orderAmount.length
                                    )
                                  )
                                ) {
                                  isAnyData = true
                                  return (
                                    <ShipTableRows
                                      key={ind}
                                      index={ind}
                                      data={props.data[ind]}
                                    />
                                  )
                                }
                              }
                            } else if (
                              props.orderAmount.substring(0, 1) === '<'
                            ) {
                              console.log('開頭小於')
                              if (props.orderAmount.substring(2, 1) === '=') {
                                {
                                  /* 小於等於 */
                                }
                                if (
                                  parseInt(props.data[ind].total) <=
                                  parseInt(
                                    props.orderAmount.substring(
                                      2,
                                      props.orderAmount.length
                                    )
                                  )
                                ) {
                                  isAnyData = true
                                  return (
                                    <ShipTableRows
                                      key={ind}
                                      index={ind}
                                      data={props.data[ind]}
                                    />
                                  )
                                }
                              } else {
                                {
                                  /* only 小於 */
                                }
                                if (
                                  parseInt(props.data[ind].total) <
                                  parseInt(
                                    props.orderAmount.substring(
                                      1,
                                      props.orderAmount.length
                                    )
                                  )
                                ) {
                                  isAnyData = true
                                  return (
                                    <ShipTableRows
                                      key={ind}
                                      index={ind}
                                      data={props.data[ind]}
                                    />
                                  )
                                }
                              }
                            } else if (
                              props.orderAmount.substring(0, 1) === '='
                            ) {
                              console.log('開頭等於')
                              if (
                                parseInt(props.data[ind].total) ===
                                parseInt(
                                  props.orderAmount.substring(
                                    1,
                                    props.orderAmount.length
                                  )
                                )
                              ) {
                                isAnyData = true
                                return (
                                  <ShipTableRows
                                    key={ind}
                                    index={ind}
                                    data={props.data[ind]}
                                  />
                                )
                              }
                            }
                          }
                        } else if (!isNaN(props.orderAmount.substring(0, 1))) {
                          {
                            /* console.log('開頭為數字，預設為大於等於') */
                          }

                          if (
                            parseInt(props.data[ind].total) >=
                            parseInt(
                              props.orderAmount.substring(
                                0,
                                props.orderAmount.length
                              )
                            )
                          ) {
                            isAnyData = true
                            return (
                              <ShipTableRows
                                key={ind}
                                index={ind}
                                data={props.data[ind]}
                              />
                            )
                          }
                        }
                      }

                      if (
                        ind === props.data.length - 1 &&
                        isAnyData === false
                      ) {
                        console.log('nothing')
                        return (
                          <tr key={0}>
                            <td className="footable-visible footable-first-column text-center">
                              沒有任何資料符合條件
                            </td>
                          </tr>
                        )
                      }
                    })
                  ) : (
                    <tr key={0}>
                      <td>沒有任何資料</td>
                    </tr>
                  )}
                </tbody>
                <tfoot>
                  <tr>
                    <td colSpan="12" className="footable-visible">
                      <ul className="pagination float-right">
                        <li className="footable-page-arrow disabled">
                          <a data-page="first" href="#first">
                            «
                          </a>
                        </li>
                        <li className="footable-page-arrow disabled">
                          <a data-page="prev" href="#prev">
                            ‹
                          </a>
                        </li>
                        <li className="footable-page active">
                          <a data-page="0" href="#">
                            1
                          </a>
                        </li>
                        <li className="footable-page">
                          <a data-page="1" href="#">
                            2
                          </a>
                        </li>
                        <li className="footable-page">
                          <a data-page="2" href="#">
                            3
                          </a>
                        </li>
                        <li className="footable-page-arrow">
                          <a data-page="next" href="#next">
                            ›
                          </a>
                        </li>
                        <li className="footable-page-arrow">
                          <a data-page="last" href="#last">
                            »
                          </a>
                        </li>
                      </ul>
                    </td>
                  </tr>
                </tfoot>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ShipTable
