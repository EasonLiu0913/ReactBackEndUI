import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'

//header
import Header from './component/common/Header'
import Banner from './component/common/Banner'

import ImageAudioVideo from './component/product/ImageAudioVideo'

import { Form, Input, InputNumber, Button } from 'antd'
import $ from 'jquery'

//sweetalert2
import { withSwalInstance } from 'sweetalert2-react'
import swal from 'sweetalert2'

const pageName = '商品上架'

const bgStyle = {
  flex: 1,
  height: '300vh',
  padding: '0',
}

const layout = {
  labelCol: { span: 5 },
  wrapperCol: { span: 14 },
}

const validateMessages = {
  required: '${label} is required!',
  types: {
    email: '${label} is not validate email!',
    number: '${label} is not a validate number!',
  },
  number: {
    range: '${label} must be between ${min} and ${max}',
  },
}

const onFinish = values => {
  console.log(values)
}

function autoInput() {
  $(document).ready(function() {
    $('#nest-messages_user_name').val('GARMIN')
    $('#nest-messages_user_itemName').val('Legacy Saga傳奇星戰系列')
    $('#nest-messages_user_itemPrice').val('$13,990')
    $('#nest-messages_user_itemCategoryId').val('穿戴式裝置')
    $('#nest-messages_user_itemDescription').val(
      '●主題式應用程式/限定版優選材質●靈感來自您喜愛的超級英雄●GARMIN PAY/音樂儲存●健康偵測/螢幕指導訓練'
    )
    $('#nest-messages_user_tech').val(
      `4.4 x 4.4 x 1.13 公分3S: 3.9 x 3.9 x 1.09 公分\n隱藏式OLED觸控螢幕\n29.6公克 3S: 24.5公克`
    )
  })
  console.log('autoInput')
}

const Product = () => {
  const [show, setShow] = useState(false)
  const SweetAlert = withSwalInstance(swal)

  async function sendToServer() {
    const request = new Request('http://localhost:5500/backend/inputData', {
      method: 'GET',
      credentials: 'include',
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }),
    })

    const res = await fetch(request)
    const data = await res.json()
    console.log('message', data)
    setShow(true)
  }
  return (
    <>
      <SweetAlert
        show={show}
        title="新增成功"
        text="商品新增成功"
        onConfirm={() => {
          setShow(false)
        }}
      />

      <div id="page-wrapper" className="gray-bg" style={bgStyle}>
        <Header />
        <Banner pageName={pageName} />

        <Form
          {...layout}
          name="nest-messages"
          onFinish={onFinish}
          validateMessages={validateMessages}
        >
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              marginTop: '40px',
            }}
          >
            <div style={{ flex: '1 0 0' }}>
              <Form.Item name={['user', 'name']} label="廠商名稱">
                <Input />
              </Form.Item>
              <Form.Item name={['user', 'itemName']} label="商品名稱">
                <Input />
              </Form.Item>

              <Form.Item name={['user', 'itemPrice']} label="商品價錢">
                <Input />
              </Form.Item>

              <Form.Item name={['user', 'itemCategoryId']} label="商品類別">
                <Input />
              </Form.Item>

              <Form.Item name={['user', 'itemDescription']} label="商品簡述">
                <Input />
              </Form.Item>

              <Form.Item name={['user', 'tech']} label="技術細節">
                <Input.TextArea />
              </Form.Item>
              <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 7 }}>
                <Button
                  type="danger"
                  onClick={autoInput}
                  style={{
                    fontSize: '20px',
                    lineHeight: '20px',
                  }}
                >
                  一鍵輸入
                </Button>
                <Button
                  type="primary"
                  onClick={sendToServer}
                  style={{
                    marginLeft: '50px',
                    fontSize: '20px',
                    lineHeight: '20px',
                  }}
                >
                  Submit
                </Button>
              </Form.Item>
            </div>
            <div style={{ flex: '1 0 0' }}>
              <ImageAudioVideo />
            </div>
          </div>
        </Form>
      </div>
    </>
  )
}

export default Product
