import React, { useState } from 'react'

//header
import Header from './component/common/Header'
import Banner from './component/common/Banner'
import Gmv from './component/chart/Gmv'
import LineChart from './component/chart/LineChart'
import Table from './component/chart/Table'

const pageName = '報表'

const bgStyle = {
  flex: 1,
  padding: '0',
}

const smallBox = [
  ['GMV', '2020-04-01 | 一天', '今日', '36.7', '萬', '-32.12%', '+8.56%'],
  ['訂單量', '2020-04-01 | 一天', '今日', '817', '次', '-32.69%', '-45.64%'],
  ['下單人數', '2020-04-01 | 一天', '今日', '806', '人', '-32.22%', '-45.5%'],
  ['客單價', '2020-04-01 | 一天', '今日', '4,560', '元', '-1.15%', '+55.28%'],
  [
    '取消訂單數',
    '2020-03-25～2020-03-31 | 一周',
    '4/1(三)',
    '2,564',
    '次',
    '+68.91%',
    '-17.29%',
  ],
  [
    '取消訂單人數',
    '2020-03-25～2020-03-31 | 一周',
    '4/1(三)',
    '2,479',
    '人',
    '+69.79%',
    '-17.26%',
  ],
  [
    '退貨次數',
    '2020-03-25～2020-03-31 | 一周',
    '4/1(三)',
    '2,675',
    '人',
    '+67.82%',
    '-17.89%',
  ],
  [
    '退貨人數',
    '2020-03-25～2020-03-31 | 一周',
    '4/1(三)',
    '2,576',
    '人',
    '+68.7%',
    '-17.96%',
  ],
  [
    'GMV近15天變化趨勢',
    '2020-03-16～2020-03-31 | 過去15天',
    '4/1(三)',
    '54.15',
    '萬',
    '+55.99%',
    '＋63.97%',
  ],
  ['各商品 GMV 貢獻情況', '2020-03-25～2020-03-31 | 過去7天'],
]

const Chart = () => {
  const [lineChartHeight, setLineChartHeight] = useState(0)
  return (
    <>
      <div id="page-wrapper" className="gray-bg" style={bgStyle}>
        <Header />
        <Banner pageName={pageName} />
        <div
          className="wrapper wrapper-content animated fadeInRight"
          style={{ fontSize: '14px', padding: '20px 20px 40px' }}
        >
          <div className="row">
            <Gmv data={smallBox[0]} />
            <Gmv data={smallBox[1]} />
            <Gmv data={smallBox[2]} />
            <Gmv data={smallBox[3]} />
          </div>
          <div className="row" style={{ marginTop: '20px' }}>
            <Gmv data={smallBox[4]} />
            <Gmv data={smallBox[5]} />
            <Gmv data={smallBox[6]} />
            <Gmv data={smallBox[7]} />
          </div>

          <div className="row" style={{ marginTop: '20px' }}>
            <LineChart
              data={smallBox[8]}
              returnHeight={height => setLineChartHeight(height)}
            />
            <Table data={smallBox[9]} height={lineChartHeight} />
          </div>
        </div>

        {/* </div> */}
        {/* </div> */}
      </div>
    </>
  )
}

export default Chart
