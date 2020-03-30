import React, { useState, useEffect, useSelector } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  withRouter,
} from 'react-router-dom'

//sweetalert2
import { withSwalInstance } from 'sweetalert2-react';
import swal from 'sweetalert2';

// jQuery
import $ from 'jquery'
import 'jquery-ui/ui/widgets/datepicker'
import 'jquery-ui/themes/base/datepicker.css'

//redux
import { connect } from 'react-redux'
//action
import { bindActionCreators } from 'redux'

const CouponListItem = (props) => {

  
  //設定進度條的外觀
  let getNum = (props.item.cp_getedCount / props.item.cp_count *100) 
 
  getNum = getNum % 1 === 0 ? getNum :  getNum.toFixed(1)//取小數點2位

  let getedCountStyle = {background: `linear-gradient(to right, #0dd2c5 ${getNum}%, #a0a0a0 ${getNum}%)`}
  let endCouponStyle = { background:'#a0a0a0'}

  //設定剩餘張數
  let canGetNum = null
  if(props.item.cp_getedCount >= props.item.cp_count * 0.8) {
     canGetNum = props.item.cp_count - props.item.cp_getedCount
  }
  

  //設定優惠字樣
 
  //目標
  let object = ""
  switch(props.item.cpr_object){
    case 0:
     object = "全部商品"
     break
    case 1:
      object = "穿戴式裝置分類"
     break
    case 2:
      object = "耳機/喇叭分類"
      break
      case 3:
     object = "運動攝影機分類"
     break
     case 4:
      object = "周邊商品分類"
     break
     case 5:
      object = "指定商品"
     break
  }
  //條件
  let rule = ""
  switch(props.item.cpr_rule){
    case 0:
      rule = "結帳金額"
     break
    case 1:
      rule = `滿${props.item.cpr_ruleNum}件`
     break
    case 2:
      rule = `滿${props.item.cpr_ruleNum}元`
      break
  }
  //金額
  let discount = ""
  switch(props.item.cpr_discount){
    case 0:
      if(props.item.cpr_discountNum % 10 === 0) props.item.cpr_discountNum /= 10
      discount = `打${props.item.cpr_discountNum}折`
     break
    case 1:
      discount = `折扣${props.item.cpr_discountNum}元`
     break
  }

    return (
        <>
          <div className="col-6 row sty-item">
            <div className="sty-coupon col-8 ">
              <div className="item">
       
                <div className="wrapForImg">
                  <img src={`/img/vendors/${props.item.cp_img}`} alt="" />
                  
                  <div className="sty-dashed"></div>
                </div>
                <div className="text">
                  <ul>
                    <h3>{props.item.cpr_discount?props.item.cpr_discountNum+'元':props.item.cpr_discountNum+'折'} </h3>
                    <li className="vendorName">[ {props.item.cp_vendor} ]</li>
                    <li>{object}-{rule}{discount}</li>
                    <li>有效至 {props.item.cp_due}</li>
                  </ul>
                  <div >
                    <div className="state" style={props.item.cp_getedCount >= props.item.cp_count?endCouponStyle:getedCountStyle}>
                    <span>{props.item.cp_getedCount >= props.item.cp_count?'全數領取完畢':getNum +' % 已領取'}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-4 sty-detail">
              <div>
                <p>發放總數 : <span>{props.item.cp_count}</span></p>
              </div>
              <div>
                <p>領取人數 : <span>{props.item.cp_getedCount}</span></p>
              </div>
              <div>
                <p>使用人數 : <span>{props.item.cp_useCount}</span></p>
              </div>
              
            </div>
          </div>
        </>
    )


}




// 選擇對應的reducer
const mapStateToProps = store => {
    return {
      
    }
  }
  
  //action
  const mapDispatchToProps = dispatch => {
    return bindActionCreators(
      {
        
      },
      dispatch
    )
  }

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CouponListItem))