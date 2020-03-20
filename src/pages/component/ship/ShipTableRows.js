import React, { useEffect } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  withRouter,
} from 'react-router-dom'

const ShipTableRows = props => {
  // console.log(props)

  const statusClassname = status => {
    switch (status) {
      case '訂單成立':
        return 'label label-primary'

      case '已出貨':
        return 'label label-success'

      case '退貨完成':
        return 'label label-danger'

      case '超過期限':
        return 'label label-warning'

      default:
        return ''
    }
  }

  useEffect(() => {}, [])
  return (
    <>
      <tr className={props.index % 2 === 0 ? 'footable-even' : 'footable-odd'}>
        <td className="footable-visible footable-first-column text-center">
          <span className="footable-toggle "></span>
          {props.data.orderId}
        </td>
        <td className="footable-visible text-center">{props.data.csId}</td>
        <td className="footable-visible text-center">${props.data.total}</td>
        <td className="footable-visible text-center">{props.data.date}</td>
        <td className="footable-visible text-center">{props.data.time}</td>
        <td className="footable-visible text-center">
          {props.data.shippingWay}
        </td>
        <td className="footable-visible text-center">
          <span className={statusClassname(props.data.outStatus)}>
            {props.data.outStatus}
          </span>
        </td>
        <td className="text-center footable-visible footable-last-column">
          <div className="btn-group">
            <button className="btn-white btn btn-xs">View</button>
            <button className="btn-white btn btn-xs">Edit</button>
            <button className="btn-white btn btn-xs">Delete</button>
          </div>
        </td>
      </tr>
    </>
  )
}

export default ShipTableRows
