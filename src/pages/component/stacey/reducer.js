

export const couponListData = (state = [], action) => {
    switch (action.type) {
      case 'SHOW_DATA':
        return action.value
      default:
        return state
    }
  }

export const adListData = (state = [], action) => {
    switch (action.type) {
      case 'SHOW_DATA':
        return action.value
      case 'EDIT_DATA':
        return action.value
      default:
        return state
    }
}

export const adClickItemData = (state = {}, action) => {
  switch (action.type) {
    case 'CLICK_DATA':
      return action.value
    default:
      return state
  }
}
