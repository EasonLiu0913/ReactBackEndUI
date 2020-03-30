import React, { useState } from 'react'
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
  let totalNum = 0
  let nowIndex = 0
  // console.log(props.data)
  // console.log(props.orderDateOn)

  const [nowPage, setNowPage] = useState(1)
  const [nowFilter, setNowFilter] = useState('')
  console.log('nowFilter', nowFilter)
  console.log('props.orderCustomer111', props.orderCustomer)
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
    if (checkId.toString().indexOf(props.orderID.toString()) != -1) {
      return true
    }
  }

  function handleChangePage(e) {
    setNowPage(parseInt(e.target.getAttribute('data-page')))
    console.log('hi', e.target.getAttribute('data-page'))
    if (e.target.getAttribute('data-page') === 'last') {
      setNowPage(parseInt(Math.ceil(totalNum / 10)))
    }
  }

  function resetNowPage() {
    setNowPage(1)
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
                <thead style={{ fontSize: '18px' }}>
                  <tr>
                    <th className="footable-visible footable-first-column footable-sortable text-center">
                      Order ID
                    </th>
                    <th
                      data-hide="phone"
                      className="footable-visible footable-sortable text-center"
                    >
                      Customer
                    </th>
                    <th
                      data-hide="phone"
                      className="footable-visible footable-sortable text-center"
                    >
                      Amount
                    </th>
                    <th
                      data-hide="phone"
                      className="footable-visible footable-sortable text-center"
                    >
                      Date
                    </th>
                    <th
                      data-hide="phone"
                      className="footable-visible footable-sortable text-center"
                    >
                      Time
                    </th>
                    <th
                      data-hide="phone,tablet"
                      className="footable-visible footable-sortable text-center"
                    >
                      Shipping methods
                    </th>
                    <th
                      data-hide="phone"
                      className="footable-visible footable-sortable text-center"
                    >
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody style={{ fontSize: '17px' }}>
                  {props.data[0] ? (
                    props.data.map((val, ind) => {
                      if (checkAllFilterBalnk(props)) {
                        isAnyData = true
                        totalNum += 1
                        nowIndex += 1
                        if (nowFilter === undefined || nowFilter !== 'none') {
                          setNowFilter('none')
                          setNowPage(1)
                        }
                        if (
                          nowIndex - 1 >= (nowPage - 1) * 10 &&
                          nowIndex - 1 < nowPage * 10
                        ) {
                          {
                            /* console.log('ind', ind) */
                          }
                          return (
                            <ShipTableRows
                              key={ind}
                              index={ind}
                              data={props.data[ind]}
                            />
                          )
                        }
                      } else if (props.orderID !== '') {
                        if (checkOrderId(props.data[ind].orderId)) {
                          isAnyData = true
                          totalNum += 1
                          nowIndex += 1
                          if (
                            nowFilter === undefined ||
                            nowFilter !== 'orderid'
                          ) {
                            setNowFilter('orderid')
                            setNowPage(1)
                          }
                          if (
                            nowIndex - 1 >= (nowPage - 1) * 10 &&
                            nowIndex - 1 < nowPage * 10
                          ) {
                            return (
                              <ShipTableRows
                                key={nowIndex}
                                index={nowIndex}
                                data={props.data[ind]}
                              />
                            )
                          }
                        }
                      } else if (
                        props.orderStatus !== '' &&
                        props.orderStatus !== '全部狀態'
                      ) {
                        if (props.data[ind].outStatus == props.orderStatus) {
                          isAnyData = true
                          totalNum += 1
                          nowIndex += 1
                          if (
                            nowFilter === undefined ||
                            nowFilter !== 'orderstatus'
                          ) {
                            setNowFilter('orderstatus')
                            setNowPage(1)
                          }
                          if (
                            nowIndex - 1 >= (nowPage - 1) * 10 &&
                            nowIndex - 1 < nowPage * 10
                          ) {
                            return (
                              <ShipTableRows
                                key={nowIndex}
                                index={nowIndex}
                                data={props.data[ind]}
                              />
                            )
                          }
                        }
                      } else if (props.orderCustomer !== '') {
                        if (
                          nowFilter === undefined ||
                          nowFilter !== 'customer'
                        ) {
                          setNowFilter('customer')
                          setNowPage(1)
                        }
                        {
                          /* console.log(
                          'props.data[ind].csId',
                          props.data[ind].csId
                        ) */
                        }

                        {
                          /* console.log('props.orderCustomer', props.orderCustomer) */
                        }
                        if (
                          props.data[ind].csId.indexOf(props.orderCustomer) !=
                          -1
                        ) {
                          isAnyData = true
                          totalNum += 1
                          nowIndex += 1

                          if (
                            nowIndex - 1 >= (nowPage - 1) * 10 &&
                            nowIndex - 1 < nowPage * 10
                          ) {
                            return (
                              <ShipTableRows
                                key={nowIndex}
                                index={nowIndex}
                                data={props.data[ind]}
                              />
                            )
                          }
                        }
                      } else if (
                        props.orderDate !== '' &&
                        props.orderDateOn === true
                      ) {
                        if (props.data[ind].date === props.orderDate) {
                          isAnyData = true
                          totalNum += 1
                          nowIndex += 1
                          if (
                            nowFilter === undefined ||
                            nowFilter !== 'orderDate'
                          ) {
                            setNowFilter('orderDate')
                            setNowPage(1)
                          }
                          if (
                            nowIndex - 1 >= (nowPage - 1) * 10 &&
                            nowIndex - 1 < nowPage * 10
                          ) {
                            return (
                              <ShipTableRows
                                key={nowIndex}
                                index={nowIndex}
                                data={props.data[ind]}
                              />
                            )
                          }
                        }
                      } else if (
                        props.orderShipMethods !== '' &&
                        props.orderShipMethods !== '全部訂單'
                      ) {
                        if (
                          props.data[ind].shippingWay === props.orderShipMethods
                        ) {
                          isAnyData = true
                          totalNum += 1
                          nowIndex += 1
                          if (
                            nowFilter === undefined ||
                            nowFilter !== 'shipWay'
                          ) {
                            setNowFilter('shipWay')
                            setNowPage(1)
                          }
                          if (
                            nowIndex - 1 >= (nowPage - 1) * 10 &&
                            nowIndex - 1 < nowPage * 10
                          ) {
                            return (
                              <ShipTableRows
                                key={nowIndex}
                                index={nowIndex}
                                data={props.data[ind]}
                              />
                            )
                          }
                        }
                      } else if (props.orderAmount !== '') {
                        if (
                          nowFilter === undefined ||
                          nowFilter !== 'orderAmount'
                        ) {
                          setNowFilter('orderAmount')
                          setNowPage(1)
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
                                  totalNum += 1
                                  nowIndex += 1
                                  if (
                                    nowIndex - 1 >= (nowPage - 1) * 10 &&
                                    nowIndex - 1 < nowPage * 10
                                  ) {
                                    return (
                                      <ShipTableRows
                                        key={nowIndex}
                                        index={nowIndex}
                                        data={props.data[ind]}
                                      />
                                    )
                                  }
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
                                  totalNum += 1
                                  nowIndex += 1
                                  if (
                                    nowIndex - 1 >= (nowPage - 1) * 10 &&
                                    nowIndex - 1 < nowPage * 10
                                  ) {
                                    return (
                                      <ShipTableRows
                                        key={nowIndex}
                                        index={nowIndex}
                                        data={props.data[ind]}
                                      />
                                    )
                                  }
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
                                  totalNum += 1
                                  nowIndex += 1
                                  if (
                                    nowIndex - 1 >= (nowPage - 1) * 10 &&
                                    nowIndex - 1 < nowPage * 10
                                  ) {
                                    return (
                                      <ShipTableRows
                                        key={nowIndex}
                                        index={nowIndex}
                                        data={props.data[ind]}
                                      />
                                    )
                                  }
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
                                  totalNum += 1
                                  nowIndex += 1
                                  if (
                                    nowIndex - 1 >= (nowPage - 1) * 10 &&
                                    nowIndex - 1 < nowPage * 10
                                  ) {
                                    return (
                                      <ShipTableRows
                                        key={nowIndex}
                                        index={nowIndex}
                                        data={props.data[ind]}
                                      />
                                    )
                                  }
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
                                totalNum += 1
                                nowIndex += 1
                                if (
                                  nowIndex - 1 >= (nowPage - 1) * 10 &&
                                  nowIndex - 1 < nowPage * 10
                                ) {
                                  return (
                                    <ShipTableRows
                                      key={nowIndex}
                                      index={nowIndex}
                                      data={props.data[ind]}
                                    />
                                  )
                                }
                              }
                            }
                          }
                        } else if (!isNaN(props.orderAmount.substring(0, 1))) {
                          {
                            /* console.log('開頭為數字，預設為大於') */
                          }

                          if (
                            parseInt(props.data[ind].total) >
                            parseInt(
                              props.orderAmount.substring(
                                0,
                                props.orderAmount.length
                              )
                            )
                          ) {
                            isAnyData = true
                            totalNum += 1
                            nowIndex += 1
                            if (
                              nowIndex - 1 >= (nowPage - 1) * 10 &&
                              nowIndex - 1 < nowPage * 10
                            ) {
                              return (
                                <ShipTableRows
                                  key={nowIndex}
                                  index={nowIndex}
                                  data={props.data[ind]}
                                />
                              )
                            }
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
                          <a data-page={1} onClick={e => handleChangePage(e)}>
                            «
                          </a>
                        </li>
                        <li className="footable-page-arrow disabled">
                          <a
                            data-page={nowPage > 1 ? nowPage - 1 : 1}
                            onClick={e => handleChangePage(e)}
                          >
                            ‹
                          </a>
                        </li>
                        {nowPage > 1 && (
                          <li className="footable-page">
                            <a
                              data-page={nowPage - 1}
                              onClick={e => handleChangePage(e)}
                            >
                              {nowPage - 1}
                            </a>
                          </li>
                        )}

                        <li className="footable-page active">
                          <a
                            data-page={nowPage}
                            onClick={e => handleChangePage(e)}
                          >
                            {nowPage}
                          </a>
                        </li>

                        {nowPage < Math.ceil(totalNum / 10) && (
                          <li className="footable-page">
                            <a
                              data-page={nowPage + 1}
                              onClick={e => handleChangePage(e)}
                            >
                              {nowPage + 1}
                            </a>
                          </li>
                        )}

                        <li className="footable-page-arrow">
                          <a
                            data-page={
                              nowPage < parseInt(Math.ceil(totalNum / 10))
                                ? nowPage + 1
                                : parseInt(Math.ceil(totalNum / 10))
                            }
                            onClick={e => handleChangePage(e)}
                          >
                            ›
                          </a>
                        </li>
                        <li className="footable-page-arrow">
                          <a
                            data-page={parseInt(
                              Math.ceil(totalNum / 10)
                            ).toString()}
                            onClick={e => handleChangePage(e)}
                          >
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
