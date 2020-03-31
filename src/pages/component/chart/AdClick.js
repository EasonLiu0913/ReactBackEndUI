import React, { useEffect } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  withRouter,
} from 'react-router-dom'

import { Line } from 'react-chartjs-2'

const AdClick = props => {
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
        label: '不重複使用者點擊次數',
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
        data: [3, 4, 6, 9, 11, 14, 12, 10, 14, 16, 17, 16, 20, 22, 20, 21],
      },
    ],
  }

  useEffect(() => {
    const height = document.querySelector('.line-chart').offsetHeight
    // props.returnHeight(height)
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

        <Line data={data} />
      </div>
    </div>
  )
}

export default AdClick
