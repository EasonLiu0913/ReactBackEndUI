import React, { useEffect } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  withRouter,
} from 'react-router-dom'

import { Doughnut } from 'react-chartjs-2'

const OrderAmountPie = props => {
  // console.log(props)

  const data = {
    labels: [
      '2000以下',
      '2001～4000',
      '4001~8000',
      '8001~10000',
      '10001~12000',
    ],
    datasets: [
      {
        data: [10, 20, 30, 40, 50],
        backgroundColor: [
          '#F7464A',
          '#46BFBD',
          '#FDB45C',
          '#949FB1',
          '#4D5360',
        ],
      },
    ],
  }

  const options = {
    legend: {
      display: true,
      position: 'bottom',
    },
  }

  useEffect(() => {}, [])

  return (
    <div className="col-lg-6 line-chart" style={{ padding: '0 10px' }}>
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
        <Doughnut data={data} options={options} />
      </div>
    </div>
  )
}

export default OrderAmountPie
