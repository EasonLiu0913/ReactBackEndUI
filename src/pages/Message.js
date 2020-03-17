import React from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'

const bgStyle = {
  flex: 1,
  height: '300vh',
  padding: '0',
}

const Message = () => {
  return (
    <>
      <div id="page-wrapper" className="gray-bg" style={bgStyle}>
        123
        <div>Message</div>
      </div>
    </>
  )
}

export default Message
