import React, { useEffect } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  withRouter,
} from 'react-router-dom'

const TableBodyRow = props => {
  useEffect(() => {}, [])
  return (
    <tr
      style={{
        width: '100%',
        display: 'table',
        tableLayout: 'fixed',
      }}
    >
      <td style={{ flexGrow: 1 }}>{props.data[0]}</td>
      <td style={{ flexGrow: 1 }}>{props.data[1]}</td>
      <td style={{ flexGrow: 1 }}>{props.data[2]}</td>
      <td style={{ flexGrow: 1 }}>{props.data[3]}</td>
      <td style={{ flexGrow: 1 }}>{props.data[4]}</td>
      <td style={{ flexGrow: 1 }}>{props.data[5]}</td>
    </tr>
  )
}

export default TableBodyRow
