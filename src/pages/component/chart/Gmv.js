import React, { useEffect } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  withRouter,
} from 'react-router-dom'

const Gmv = props => {
  // console.log(props)

  return (
    <div className="col-lg-3" style={{ padding: '0 10px' }}>
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
      </div>
    </div>
  )
}

export default Gmv
