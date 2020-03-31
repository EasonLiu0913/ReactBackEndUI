import React, { useState, useEffect } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  withRouter,
} from 'react-router-dom'

import './MessageArea.scss'

const MessageArea = props => {
  // console.log('props.replyData', props.replyData)
  const [isShowReplyInput, setIsShowReplyInput] = useState(false)
  const [replyButtonText, setReplyButtonText] = useState('回覆留言')
  const [visible, setVisible] = useState('none')
  const [replyInputText, setReplyInputText] = useState('')
  const [, forceUpdate] = useState()
  // let replyButtonText = props.arrayData.replyText ? '修改留言' : '回覆留言'

  useEffect(() => {
    if (isShowReplyInput) {
      setReplyButtonText('取消')
    } else {
      if (props.replyData) {
        setReplyButtonText('修改留言')
      } else if (!props.replyData) {
        setReplyButtonText('回覆留言')
      }
    }
  }, [isShowReplyInput, props.replyData])
  //   let photoHtml = props.arrayData.img
  //     ? `<div className="photos">
  //   <img
  //     alt="image"
  //     className="feed-photo"
  //     src="${props.arrayData.img}"
  //   />
  // </div>`
  //     : ''

  function changeIsShowReplyInput(e) {
    // console.log('isShowReplyInput2', isShowReplyInput)
    e.preventDefault()
    if (e.target.textContent === '更新') {
      sendReplyTextToServer('updatereply', replyInputText)
    } else if (e.target.textContent === '送出') {
      sendReplyTextToServer('sendreply', replyInputText)
    } else if (e.target.textContent === '刪除') {
      sendReplyTextToServer('delreply', '')
    }

    setIsShowReplyInput(!isShowReplyInput)
  }

  function handelReplyChange(e) {
    setReplyInputText(e.target.value)
    if (
      typeof props.replyData != 'undefined' &&
      props.replyData.replyText !== e.target.value &&
      e.target.value !== ''
    ) {
      setReplyButtonText('更新')
    } else if (
      typeof props.replyData === 'undefined' &&
      e.target.value !== ''
    ) {
      setReplyButtonText('送出')
    } else if (
      (typeof props.replyData != 'undefined' &&
        props.replyData.replyText === e.target.value) ||
      (typeof props.replyData === 'undefined' && e.target.value === '')
    ) {
      setReplyButtonText('取消')
    } else if (typeof props.replyData != 'undefined' && e.target.value === '') {
      setReplyButtonText('刪除')
    }
  }

  function handelHideImg(img) {
    setVisible('none')
  }

  function handelShowImg(img) {
    setVisible('block')
  }

  async function sendReplyTextToServer(url, text) {
    const request = new Request('http://localhost:5500/backend/' + url, {
      method: 'POST',
      credentials: 'include',
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }),
      body: JSON.stringify({
        replyText: text,
        commentId: props.arrayData.commentId,
      }),
    })
    const res = await fetch(request)
    const data = await res.json()
    props.updateData()
  }

  return (
    <>
      {props.arrayData && props.arrayData.length !== 0 && (
        <div
          className="feed-element"
          style={{
            border: '1px solid #e7eaec',
            padding: '20px 20px 40px 20px',
            overflow: 'visible',
          }}
        >
          <a className="float-left">
            {/* <img
            alt="image"
            className="rounded-circle"
            src="./img/a${props.arrayData.userId}.jpg"
          /> */}
          </a>
          <div
            className="media-body "
            style={{ fontSize: '16px', overflow: 'visible', overflow: 'auto' }}
          >
            <small className="float-right">{props.arrayData.created_at}</small>
            <strong>{props.arrayData.userName}</strong> 評價了您的商品： <br />
            {/* <div className="d-flex">${rankStar}</div> */}
            {props.arrayData.img && (
              <div className="photos">
                <div
                  className="hide-feed-photo"
                  style={{
                    position: 'absolute',
                    display: visible,
                  }}
                  onClick={e => handelHideImg()}
                >
                  <img
                    src={
                      'http://localhost:5500/public/backend/message/' +
                      props.arrayData.img
                    }
                  />
                </div>
                <img
                  alt="image"
                  className="feed-photo"
                  src={
                    'http://localhost:5500/public/backend/message/' +
                    props.arrayData.img
                  }
                  onClick={e => handelShowImg()}
                />
              </div>
            )}
            <div>
              <h2>{props.arrayData.commentText}</h2>
            </div>
            {props.replyData !== undefined && (
              <>
                <br />
                <small style={{ marginTop: '10px', fontSize: '14px' }}>
                  我的回覆：
                </small>
                <div className="well" style={{ fontSize: '18px' }}>
                  {props.replyData.replyText}
                </div>
              </>
            )}
            <div className="float-right">
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                {isShowReplyInput && (
                  <textarea
                    style={{ width: '300px', marginTop: '15px' }}
                    onChange={e => handelReplyChange(e)}
                    defaultValue={
                      props.replyData ? props.replyData.replyText : ''
                    }
                  ></textarea>
                )}
                <a id="reply_${props.arrayData.commentId}">
                  <button
                    className="btn btn-default"
                    style={{ margin: '20px', float: 'right' }}
                    onClick={e => {
                      changeIsShowReplyInput(e)
                    }}
                  >
                    {replyButtonText}
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default MessageArea
