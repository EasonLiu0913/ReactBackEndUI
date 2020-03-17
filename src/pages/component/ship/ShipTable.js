import React, { useEffect } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  withRouter,
} from 'react-router-dom'
import $ from 'jquery'
import 'jquery-ui/ui/widgets/datepicker'
import 'jquery-ui/themes/base/datepicker.css'

// components
import ShipTableRows from './ShipTableRows'

// CSS
import '../../../css/plugins/footable/footable.core.css'

const ShipTable = props => {
  let isAnyData = false
  console.log(props.data)

  function checkAllFilterBalnk(props) {
    if (
      props.orderID === '' &&
      (props.orderStatus === '' || props.orderStatus === '全部狀態') &&
      props.orderCustomer === ''
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

  useEffect(() => {
    $(document).ready(function() {
      $('#date_added').datepicker({
        todayBtn: 'linked',
        keyboardNavigation: false,
        forceParse: false,
        calendarWeeks: true,
        autoclose: true,
      })

      $('#date_modified').datepicker({
        todayBtn: 'linked',
        keyboardNavigation: false,
        forceParse: false,
        calendarWeeks: true,
        autoclose: true,
      })
    })
  }, [])

  useEffect(() => {
    console.log('new props', props)
  }, [props])

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
                        console.log('props.orderID !== ""')
                        console.log(checkOrderId(props.data[ind].orderId))
                        if (checkOrderId(props.data[ind].orderId)) {
                          isAnyData = true
                          console.log('yo', props.orderID)
                          console.log('yo', props.data[ind].orderId)
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
                          console.log('yo', props.orderStatus)
                          console.log('yo', props.data[ind].orderStatus)
                          return (
                            <ShipTableRows
                              key={ind}
                              index={ind}
                              data={props.data[ind]}
                            />
                          )
                        }
                      } else if (props.orderCustomer !== '') {
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
                      } else {
                        console.log('nothing', props.orderID !== '')
                        return (
                          <tr>
                            <td className="footable-visible footable-first-column text-center">
                              沒有任何資料符合條件
                            </td>
                          </tr>
                        )
                      }
                      if (
                        ind === props.data.length - 1 &&
                        isAnyData === false
                      ) {
                        console.log('nothing')
                        return (
                          <tr>
                            <td className="footable-visible footable-first-column text-center">
                              沒有任何資料符合條件
                            </td>
                          </tr>
                        )
                      }
                    })
                  ) : (
                    <tr>
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
