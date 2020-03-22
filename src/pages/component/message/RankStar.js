import React, { useEffect } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  withRouter,
} from 'react-router-dom'

const ProductList = props => {
  // console.log(props)

//設定評價星數
let rankStar = ''


  useEffect(() => {}, [])
  return (
    <>
      {if (props.rank != 0) {
  //最多跑5次迴圈
  for (let k = 0; k < 5; k++) {
    //如果評價數字 >= i+1，則畫一個黑色的星星
    console.log(props.rank)
    console.log(k + 1)
    if (props.rank >= k + 1) {
      rankStar += <div class="shopee-rating-stars__lit" style={width: "15px",fill:"#FF2D2D"}><svg class="shopee-svg-icon shopee-rating-stars__primary-star icon-rating-solid" enable-background="new 0 0 15 15" viewBox="0 0 15 15" x="0" y="0"><polygon points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"></polygon></svg></div>
    }
    //如果評價數字 < i+1，則畫一個灰色的星星
    else {
      rankStar += <div class="shopee-rating-stars__lit" style={width: "15px",fill:"#FFB5B5"}><svg class="shopee-svg-icon shopee-rating-stars__primary-star icon-rating-solid" enable-background="new 0 0 15 15" viewBox="0 0 15 15" x="0" y="0"><polygon points="7.5 .8 9.7 5.4 14.5 5.9 10.7 9.1 11.8 14.2 7.5 11.6 3.2 14.2 4.3 9.1 .5 5.9 5.3 5.4" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"></polygon></svg></div>
    }
  }
}}
    </>
  )
}

export default ProductList
