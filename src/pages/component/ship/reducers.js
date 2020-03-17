export const orderlistData = (state = [], action) => {
  switch (action.type) {
    case 'SHOW_ORDERLIST_DATA':
      return action.value
    default:
      return state
  }
}
