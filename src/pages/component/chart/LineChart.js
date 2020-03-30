import React, { useEffect } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  withRouter,
} from 'react-router-dom'

import { Line } from 'react-chartjs-2'

const LineChart = props => {
  // console.log(props)

  const data = {
    labels: [
      '3/16',
      '3/17',
      '3/18',
      '3/19',
      '3/20',
      '3/21',
      '3/22',
      '3/23',
      '3/24',
      '3/25',
      '3/26',
      '3/27',
      '3/28',
      '3/29',
      '3/30',
      '3/31',
    ],
    datasets: [
      {
        label: '訂單實付總金額',
        fill: false,
        lineTension: 0.1,
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(75,192,192,1)',
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'miter',
        pointBorderColor: 'rgba(75,192,192,1)',
        pointBackgroundColor: '#fff',
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: 'rgba(75,192,192,1)',
        pointHoverBorderColor: 'rgba(220,220,220,1)',
        pointHoverBorderWidth: 2,
        pointRadius: 5,
        pointHitRadius: 10,
        data: [65, 59, 80, 81, 56, 55, 40, 53, 60, 42, 35, 43, 55, 62, 72, 88],
      },
    ],
  }

  useEffect(() => {
    console.log(
      "document.querySelector('.ibox-content').offsetHeight",
      document.querySelector('.ibox-content').offsetHeight
    )

    console.log(
      "document.querySelector('.line-chart').offsetHeight",
      document.querySelector('.line-chart').offsetHeight
    )
    const height = document.querySelector('.line-chart').offsetHeight
    props.returnHeight(height)
  }, [])

  return (
    <div className="col-lg-6 line-chart" style={{ padding: '0 10px' }}>
      <div className="ibox-content" style={{ padding: '10px 20px' }}>
        <div>
          <span style={{ fontSize: '20px' }}>
            <strong>{props.data[0]}</strong>
          </span>
        </div>
        <div>
          <span style={{ fontSize: '16px' }}> {props.data[1]}</span>
        </div>
        <div style={{ marginTop: '20px', fontSize: '16px' }}>
          <span>{props.data[2]}</span>
        </div>
        <div>
          <span style={{ fontSize: '46px' }}>
            <strong>{props.data[3]}</strong>
          </span>
          <span>{props.data[4]}</span>
        </div>
        <div style={{ marginTop: '5px', fontSize: '16px' }}>
          <span>環比</span>
          <span
            style={{
              color: props.data[5].substring(0, 1) === '+' ? 'red' : 'green',
            }}
          >
            {props.data[5]}
          </span>
          <span style={{ marginLeft: '15px' }}>同比</span>
          <span
            style={{
              color: props.data[6].substring(0, 1) === '+' ? 'red' : 'green',
            }}
          >
            {props.data[6]}
          </span>
        </div>
        <Line data={data} />
      </div>
    </div>
  )
}

export default LineChart
