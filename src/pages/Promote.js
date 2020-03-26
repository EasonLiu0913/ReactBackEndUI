import React from 'react'
import Header from './component/common/Header'
import Banner from './component/common/Banner'

const pageName = '行銷'

const bgStyle = {
  flex: 1,
  height: '300vh',
  padding: '0',
}

const Promote = () => {
  return (
    <>
      <div id="page-wrapper" className="gray-bg" style={bgStyle}>
        <Header />
        <Banner pageName={pageName} />
        <div>Promote</div>
      </div>
    </>
  )
}

export default Promote
