import React, { useEffect } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  withRouter,
} from 'react-router-dom'

const MessageArea = props => {
  console.log('props.replyData', props.replyData)

  useEffect(() => {}, [])
  let photoHtml = props.arrayData.img
    ? `<div className="photos">
  <img
    alt="image"
    className="feed-photo"
    src="${props.arrayData.img}"
  />
</div>`
    : ''

  let replyButtonText = props.arrayData.replyText ? '修改留言' : '回覆留言'

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
            {/* <div className="d-flex">${rankStar}</div>${photoHtml} */}
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
            <div className="float-right"></div>
            <a id="reply_${props.arrayData.commentId}" href="#">
              <button
                className="btn btn-default"
                style={{ marginBottom: '20px', float: 'right' }}
              >
                {replyButtonText}
              </button>
            </a>
          </div>
        </div>
      )}
    </>
  )
}

export default MessageArea
