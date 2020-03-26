import React from 'react'

//header
import Header from './component/common/Header'
import Banner from './component/common/Banner'

const pageName = '報表'

const bgStyle = {
  flex: 1,
  height: '300vh',
  padding: '0',
}

const Chart = () => {
  return (
    <>
      <div id="page-wrapper" className="gray-bg" style={bgStyle}>
        <Header />
        <Banner />
        <div>Chart</div>
      </div>
    </>
  )
}

export default Chart
