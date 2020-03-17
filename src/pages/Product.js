import React from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'

//header
import Header from './component/Header'
import Banner from './component/Banner'

const pageName = '商品上架'

const bgStyle = {
  flex: 1,
  height: '300vh',
  padding: '0',
}

const Product = () => {
  return (
    <>
      <div id="page-wrapper" className="gray-bg" style={bgStyle}>
        <Header />
        <Banner pageName={pageName} />
        123
        <div>Hello World!</div>
      </div>
    </>
  )
}

export default Product
