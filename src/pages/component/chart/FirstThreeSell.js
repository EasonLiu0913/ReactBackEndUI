import React, { useEffect } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  withRouter,
} from 'react-router-dom'

import { Line } from 'react-chartjs-2'

const FirstThreeSell = props => {
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
        label: 'GARMIN Approach S60',
        fill: false,
        lineTension: 0.1,
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(7,82,192,.6)',
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
        data: [65, 59, 55, 63, 56, 55, 40, 53, 60, 42, 35, 43, 55, 62, 72, 88],
      },
      {
        label: 'GARMIN D2 Charlie',
        fill: false,
        lineTension: 0.1,
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(177,88,192,.6)',
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
        data: [48, 42, 56, 52, 44, 38, 52, 62, 80, 77, 62, 54, 67, 66, 62, 37],
      },
      {
        label: 'GARMIN INSTINCT',
        fill: false,
        lineTension: 0.1,
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(80,200,80,.6)',
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
        data: [55, 54, 53, 58, 54, 50, 48, 45, 40, 39, 43, 52, 58, 62, 58, 51],
      },
    ],
  }

  const options = {
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

  useEffect(() => {
    const height = document.querySelector('.line-chart').offsetHeight
    //height = 690, but ibox-content height = 487
    props.returnSellHeight(487)
  }, [])

  return (
    <div className="col-lg-6 " style={{ padding: '0 10px' }}>
      <div className="ibox-content line-chart" style={{ padding: '10px 20px' }}>
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

        <Line data={data} options={options} />
      </div>
    </div>
  )
}

export default FirstThreeSell
