import React, { useState, useEffect, useSelector } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  withRouter,
} from 'react-router-dom'

//redux
import { connect } from 'react-redux'
//action
import { bindActionCreators } from 'redux'
import {
  getCommentProductlistData,
  getUserCommentData,
  getReplyCommentData,
} from './component/message/actions'

import $ from 'jquery'

//header
import Header from './component/common/Header'
import Banner from './component/common/Banner'
import ProductList from './component/message/ProductList'
import MessageArea from './component/message/MessageArea'

// icon
import { FiChevronsUp } from 'react-icons/fi'

const pageName = '訊息'

const bgStyle = {
  flex: 1,
  padding: '0',
}

const Message = props => {
  let isNoComment = true
  const [productID, setProductID] = useState('2')

  useEffect(() => {
    // console.log('Message', props)
    props.getCommentProductlistData()
    props.getUserCommentData()
    props.getReplyCommentData()

    $(document).ready(function() {
      $('.button').css({
        position: 'fixed',
        bottom: 30 + 'px',
        right: 20 + 'px',
        transition: '0s',
        width: '40px',
        height: '40px',
        padding: '0px',
        borderRadius: '40px',
      })
    })
  }, [])

  useEffect(() => {
    window.scrollTo(0, 0)
    // console.log('Message', props)
  }, [productID])

  function gotoTop() {
    window.scrollTo(0, 0)
  }
  return (
    <>
      <div id="page-wrapper" className="gray-bg" style={bgStyle}>
        <Header />
        <Banner pageName={pageName} />
        <div className="wrapper wrapper-content" style={{ fontSize: '14px' }}>
          <div className="row animated fadeInRight">
            <div className="col-md-4" style={{ paddingRight: '5px' }}>
              <div className="ibox ">
                <div className="ibox-title">
                  {/* <!-- 左側的商品列表，預計未來改從資料庫讀取 --> */}
                  <h2>商品列表</h2>
                </div>
                <div>
                  <div className="ibox-content no-padding border-left-right"></div>
                  <div className="ibox-content profile-content">
                    {props.productListData &&
                      props.productListData.length !== 0 &&
                      props.productListData.map((val, ind) => {
                        return (
                          <ProductList
                            key={ind}
                            pID={props.productListData[ind].itemId}
                            pName={props.productListData[ind].itemName}
                            updateProductID={id => setProductID(id)}
                          />
                        )
                      })}
                    {props.productListData &&
                      props.productListData.length === 0 && (
                        <p>
                          <strong>您似乎沒有上架商品</strong>
                        </p>
                      )}
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md-8">
              <div className="ibox">
                <div className="ibox-title">
                  <h2 id="product-comment-title">商品評論</h2>
                </div>
                <div className="ibox-content">
                  <div>
                    <div className="feed-activity-list">
                      {/* <!-- 評論模版預計放這裡 --></div> */}
                      {console.log(
                        'props.userCommentData',
                        props.userCommentData
                      )}
                      {props.userCommentData &&
                        props.userCommentData.length !== 0 &&
                        props.userCommentData.map((val, ind) => {
                          if (
                            props.userCommentData[ind].productId === productID
                          ) {
                            isNoComment = false
                            return (
                              <MessageArea
                                key={ind}
                                index={ind}
                                arrayData={props.userCommentData[ind]}
                                replyData={
                                  props.replyCommentData[
                                    props.userCommentData[ind].commentId
                                  ]
                                }
                                updateData={() => {
                                  props.getReplyCommentData()
                                }}
                              />
                            )
                          }
                          if (
                            ind === props.userCommentData.length - 1 &&
                            isNoComment
                          ) {
                            return <h2>這商品現在似乎還沒任何評論</h2>
                          }
                        })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button className="button" onClick={gotoTop}>
        <FiChevronsUp />
      </button>
    </>
  )
}

// 選擇對應的reducer
const mapStateToProps = store => {
  return {
    productListData: store.productListData,
    userCommentData: store.userCommentData,
    replyCommentData: store.replyCommentData,
  }
}

//action
const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      getCommentProductlistData,
      getUserCommentData,
      getReplyCommentData,
    },
    dispatch
  )
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Message))
