import React, { useState, useEffect } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  withRouter,
} from 'react-router-dom'
import { useDispatch } from 'react-redux'

const MessageArea = props => {
  const dispatch = useDispatch()

  console.log('props.replyData', props.replyData)
  const [showInputReply, setShowReplyInput] = useState(false)
  const [inputReplyText, setInputReplyText] = useState('')
  const [replyButtonText, setReplyButtonText] = useState('回覆留言')

  useEffect(() => {
    console.log('hi props.replyData', props.replyData)
    console.log('hi inputReplyText', inputReplyText)
    if (props.replyData && props.replyData.replyText != '') {
      setReplyButtonText('修改留言')
    }
  }, [props.replyData])
  useEffect(() => {
    if (showInputReply) {
      setReplyButtonText('取消')
    } else {
      if (props.replyData && props.replyData.replyText != '') {
        setReplyButtonText('修改留言')
      } else {
        setReplyButtonText('回覆留言')
      }
    }
  }, [showInputReply])

  useEffect(() => {
    if (
      props.replyData &&
      props.replyData.replyText != inputReplyText &&
      inputReplyText != ''
    ) {
      setReplyButtonText('送出')
    } else if (
      props.replyData &&
      props.replyData.replyText != inputReplyText &&
      inputReplyText == ''
    ) {
      setReplyButtonText('刪除')
    } else {
      setReplyButtonText('取消')
    }
  }, [inputReplyText])
  //   let photoHtml = props.arrayData.img
  //     ? `<div className="photos">
  //   <img
  //     alt="image"
  //     className="feed-photo"
  //     src="${props.arrayData.img}"
  //   />
  // </div>`
  //     : ''

  // 是否顯示回覆留言輸入欄，或送出留言
  function isShowInputReply(e) {
    e.preventDefault()
    if (
      showInputReply &&
      props.replyData &&
      props.replyData.replyText != inputReplyText &&
      inputReplyText != ''
    ) {
      console.log('送出')
      setShowReplyInput(!showInputReply)
    } else {
      console.log('inputReplyText', inputReplyText)
      setShowReplyInput(!showInputReply)
    }
  }

  // 處理回覆留言被輸入的時候
  function handelReplyInputChange(e) {
    if (
      showInputReply &&
      props.replyData &&
      props.replyData.replyText != inputReplyText &&
      inputReplyText != ''
    ) {
      console.log('送出')
    }
    console.log(e.target.value)
    setInputReplyText(e.target.value)
  }

  return (
    <>
      {props.arrayData && props.arrayData.length !== 0 && (
        <div
          className="feed-element"
          style={{ border: '1px solid #e7eaec', padding: '20px' }}
        >
          <a href="#" className="float-left">
            {/* <img
            alt="image"
            className="rounded-circle"
            src="./img/a${props.arrayData.userId}.jpg"
          /> */}
          </a>
          <div className="media-body ">
            <small className="float-right">{props.arrayData.updated_at}</small>
            <strong>{props.arrayData.userName}</strong> 評價了您的商品： <br />
            {/* <div className="d-flex">${rankStar}</div> */}
            {props.arrayData.img && (
              <div className="photos">
                <img
                  alt="image"
                  className="feed-photo"
                  src={props.arrayData.img}
                />
              </div>
            )}
            <div>
              <h3>{props.arrayData.commentText}</h3>
            </div>
            {props.replyData !== undefined && (
              <>
                <br />
                <small style={{ marginTop: '10px' }}>我的回覆：</small>
                <div className="well">{props.replyData.replyText}</div>
              </>
            )}
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-end',
              }}
            >
              {showInputReply && (
                <div>
                  <textarea
                    style={{
                      width: '50%',
                      float: 'right',
                      marginBottom: '6px',
                    }}
                    onChange={e => {
                      e.preventDefault()
                      handelReplyInputChange(e)
                    }}
                    defaultValue={
                      props.replyData !== undefined
                        ? props.replyData.replyText
                        : ''
                    }
                  ></textarea>
                </div>
              )}
              {/* <a id="reply_${props.arrayData.commentId}" href="#"> */}
              <div>
                <button
                  className="btn btn-default"
                  style={{
                    color: '#007bff',
                    width: '20%',
                    marginBottom: '20px',
                    float: 'right',
                  }}
                  onClick={e => {
                    return isShowInputReply(e)
                  }}
                >
                  {replyButtonText}
                </button>
              </div>
              {/* </a> */}
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default MessageArea
