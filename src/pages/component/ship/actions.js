export const showOrderlist = val => {
  return { type: 'SHOW_ORDERLIST_DATA', value: val }
}

export const getOrderlistData = item => {
  return async dispatch => {
    const request = new Request('http://localhost:5500/db/orderlist', {
      method: 'GET',
      credentials: 'include',
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }),
    })
    const res = await fetch(request)
    const data = await res.json()
    dispatch(showOrderlist(data))
  }
}
