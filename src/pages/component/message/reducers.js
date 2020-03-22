export const productListData = (state = [], action) => {
  switch (action.type) {
    case 'SHOW_COMMENT_PRODUCT_LIST':
      console.log('SHOW_COMMENT_PRODUCT_LIST')
      return action.value
    default:
      return state
  }
}

export const userCommentData = (state = [], action) => {
  switch (action.type) {
    case 'SHOW_USER_COMMENT':
      console.log('SHOW_USER_COMMENT')
      return action.value
    default:
      return state
  }
}

export const replyCommentData = (state = [], action) => {
  switch (action.type) {
    case 'SHOW_REPLY_COMMENT':
      console.log('SHOW_REPLY_COMMENT')
      return action.value
    default:
      return state
  }
}
