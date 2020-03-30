import React, { useEffect } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  withRouter,
} from 'react-router-dom'

import TableBodyrow from './TableBodyRow'

import $ from 'jquery'

const Table = props => {
  const products = [
    ['GARMIN Approach S60', '22100', '24', '20', '1105', '10'],
    ['GARMIN D2 Charlie', '53200', '45', '42', '1266', '25'],
    ['GARMIN INSTINCT', '35700', '37', '34', '1105', '16'],
    ['GARMIN fenix 5S Plus', '6800', '2', '2', '1050', '1'],
    ['GARMIN fenix 5 Plus', '9600', '3', '3', '3200', '0'],
    ['GARMIN vivomove 3', '13500', '4', '4', '3375', '2'],
    ['GARMIN Vivoactive 3 Music', '7500', '2', '2', '3750', '1'],
    ['GARMIN Descent MK1', '9600', '3', '3', '3200', '1'],
    ['GARMIN D2 Delta PX', '6800', '3', '3', '2266', '0'],
    ['GARMIN fenix 5S', '9000', '7', '5', '1800', '2'],
    ['GARMIN fenix 5X Plus', '12500', '8', '6', '2083', '3'],
    ['GARMIN Forerunner 645 Music', '22500', '6', '5', '4500', '1'],
    ['GARMIN INSTINCT TACTICAL EDITION', '33600', '22', '20', '1680', '8'],
    ['GARMIN SWIM 2', '9700', '4', '4', '2425', '2'],
    ['GARMIN VENU AMOLED GPS', '6300', '3', '3', '2100', '1'],
    ['GARMIN vivoactive 4', '8000', '2', '2', '4000', '0'],
    ['GARMIN vivoactive3', '12500', '4', '4', '3125', '1'],
    ['GARMIN Vivofit 4', '35400', '12', '10', '3540', '3'],
    ['GARMIN Vivofit jr2', '9800', '4', '4', '2450', '1'],
    ['GARMIN VIVOLIFE', '12600', '3', '3', '4200', '1'],
    ['GARMIN vivosmart 4', '8500', '2', '2', '4250', '0'],
    ['Garmin Vivomove HR', '18500', '5', '3', '6166', '1'],
  ]
  useEffect(() => {
    $(document).ready(function() {
      $('tbody').scroll(function() {
        if (
          $('tbody').scrollTop() + $('tbody').height() >=
          $('tbody').prop('scrollHeight') - 20
        ) {
          $('.linear-cover').hide()
        } else {
          $('.linear-cover').show()
        }
      })
    })
  }, [])
  return (
    <div className="col-lg-6" style={{ padding: '0 10px' }}>
      <div
        className="ibox-content"
        style={{ padding: '10px 20px', height: props.height }}
      >
        <div>
          <span style={{ fontSize: '20px' }}>
            <strong>{props.data[0]}</strong>
          </span>
        </div>
        <div>
          <span style={{ fontSize: '16px' }}> {props.data[1]}</span>
        </div>
        <div
          style={{ marginTop: '20px', fontSize: '16px', textAlign: 'center' }}
        >
          <table
            className="table"
            style={{
              display: 'flex',
              flexFlow: 'column',
              height: '100%',
              width: '100%',
            }}
          >
            <thead
              style={{
                flex: '0 0 auto',
                width: '100%',
                display: 'table',
                tableLayout: 'fixed',
              }}
            >
              <tr
                style={{
                  width: '100%',
                  display: 'table',
                  tableLayout: 'fixed',
                }}
              >
                <th style={{ flexGrow: 1 }}>商品</th>
                <th style={{ flexGrow: 1 }}>GMV</th>
                <th style={{ flexGrow: 1 }}>訂單量</th>
                <th style={{ flexGrow: 1 }}>訂單人數</th>
                <th style={{ flexGrow: 1 }}>客單價</th>
                <th style={{ flexGrow: 1 }}>優惠券</th>
              </tr>
            </thead>
            <tbody
              style={{
                flex: '1 1 auto',
                overflowY: 'scroll',
                display: 'block',
                height: props.height - 140,
              }}
            >
              {products.map((val, ind) => (
                <TableBodyrow key={ind} data={val} />
              ))}
            </tbody>
          </table>
          <div
            className="linear-cover"
            style={{
              position: 'relative',
              bottom: '100px',
              height: '100px',
              background:
                'linear-gradient(to top, rgba(255,255,255,1) 0%,rgba(255,255,58,0) 100%)',
            }}
          ></div>
        </div>
      </div>
    </div>
  )
}

export default Table
