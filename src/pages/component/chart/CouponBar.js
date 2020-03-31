import React, { useEffect } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  withRouter,
} from 'react-router-dom'

import { Bar } from 'react-chartjs-2'

const CouponBar = props => {
  // console.log(props)

  const data = {
    labels: [
      'GARMIN D2 Charlie',
      'GARMIN INSTINCT',
      'GARMIN Forerunner 645',
      'GARMIN Approach S60',
      'GARMIN vivomove 3',
      'GARMIN Vivofit 4',
      'GARMIN fenix 5X Plus',
    ],
    datasets: [
      {
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
          'rgba(33, 55, 64, 0.2)',
        ],
        borderColor: [
          'rgba(255,99,132,1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(33, 55, 64, 0.2)',
        ],
        borderWidth: 1,
        data: [25, 8, 12, 10, 5, 4, 3],
      },
    ],
  }

  const options = {
    legend: {
      display: false,
    },
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  }

  useEffect(() => {}, [])

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

        <Bar data={data} options={options} />
      </div>
    </div>
  )
}

export default CouponBar
