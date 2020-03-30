export const showCommentProductList = val => {
  return { type: 'SHOW_COMMENT_PRODUCT_LIST', value: val }
}

export const getCommentProductlistData = item => {
  return async dispatch => {
    const request = new Request('http://localhost:5500/backend/getGarmin', {
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
    dispatch(showCommentProductList(data))
  }
}

export const showUserCommentData = val => {
  return { type: 'SHOW_USER_COMMENT', value: val }
}
export const getUserCommentData = item => {
  return async dispatch => {
    const request = new Request(
      'http://localhost:5500/backend/db/user_comment',
      {
        method: 'GET',
        credentials: 'include',
        headers: new Headers({
          Accept: 'application/json',
          'Content-Type': 'application/json',
        }),
      }
    )

    const res = await fetch(request)
    const data = await res.json()
    console.log('message', data)
    dispatch(showUserCommentData(data))
  }
}

export const showReplyCommentData = val => {
  return { type: 'SHOW_REPLY_COMMENT', value: val }
}
export const getReplyCommentData = item => {
  return async dispatch => {
    const request = new Request(
      'http://localhost:5500/backend/db/user_comment_reply',
      {
        method: 'GET',
        credentials: 'include',
        headers: new Headers({
          Accept: 'application/json',
          'Content-Type': 'application/json',
        }),
      }
    )

    const res = await fetch(request)
    const data = await res.json()
    console.log('getReplyCommentData', data)
    const obj = {}
    for (let i = 0; i < data.length; i++) {
      obj[data[i].commentId] = data[i]
    }

    dispatch(showReplyCommentData(obj))
  }
}
