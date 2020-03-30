import React, { useState, useEffect } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  withRouter,
} from 'react-router-dom'

import classnames from 'classnames'

//sweetalert2
import { withSwalInstance } from 'sweetalert2-react';
import swal from 'sweetalert2';


//component
import CouponListItem from './CouponListItem'

// jQuery
import $ from 'jquery'
import 'jquery-ui/ui/widgets/datepicker'
import 'jquery-ui/themes/base/datepicker.css'

//redux
import { connect } from 'react-redux'
//action
import { bindActionCreators } from 'redux'


//icon
import { IconContext } from 'react-icons'
import {
  FiChevronsRight
} from 'react-icons/fi'


const AdListItem = (props) => {

  const adClickItemData = useSelector(state => state.adClickItemData)
  const dispatch = useDispatch()

  const [open , setOpen] = useState(false)

  const redStyle = classnames({styRed: props.item.planStatus === '上架',styGrey:props.item.planStatus === '下架'})
  const adPlanGroupStyle = classnames('planGroup',{active: open})

  const clickItem = ()=>{
    dispatch({type:'CLICK_DATA',value:{
      planId:props.item.planId,
      planStatus:props.item.planStatus,
      planName:props.item.planName,
      adName:props.item.adName,
      adTitle:props.item.adTitle,
      adContent:props.item.adContent,
      adImg:props.item.adImg,
    }})
  }

  


  let groupBuyItems = ''
  switch(props.item.groupBuyItems){
    case 0:
      groupBuyItems = ''
     break
    case 1:
      groupBuyItems = <li>買過我的產品</li>
     break
  }

  let groupHistoryItems = ''
  switch(props.item.groupHistoryItems){
    case 0:
      groupBuyItems = ''
     break
    case 1:
      groupBuyItems = <li>瀏覽過我的產品</li>
     break
  }

  let groupCollectItems = ''
  switch(props.item.groupCollectItems){
    case 0:
      groupCollectItems = ''
     break
    case 1:
      groupCollectItems = <li>收藏裡有我的產品</li>
     break
  }

  let groupHistoryCategory = ''
  switch(props.item.groupHistoryCategory){
    case 0:
      groupHistoryCategory = ''
     break
    case '穿戴式裝置':
      groupHistoryCategory = <li>瀏覽過穿戴式裝置分類</li>
     break
    case '耳機/喇叭':
      groupHistoryCategory = <li>瀏覽過耳機/喇叭分類</li>
     break
    case '運動攝影機':
      groupHistoryCategory = <li>瀏覽過運動攝影機分類</li>
     break
    case '周邊':
      groupHistoryCategory = <li>瀏覽過周邊產品分類</li>
     break
  }

  let groupCollectCategory = ''
  switch(props.item.groupCollectCategory){
    case 0:
      groupCollectCategory = ''
     break
    case '穿戴式裝置':
      groupCollectCategory = <li>收藏裡有穿戴式裝置分類</li>
     break
    case '耳機/喇叭':
      groupCollectCategory = <li>收藏裡有耳機/喇叭分類</li>
     break
    case '運動攝影機':
      groupCollectCategory = <li>收藏裡有運動攝影機分類</li>
     break
    case '周邊':
      groupCollectCategory = <li>收藏裡有周邊產品分類</li>
     break
  }

  let groupCartCategory = ''
  switch(props.item.groupCartCategory){
    case 0:
      groupCartCategory = ''
     break
    case '穿戴式裝置':
      groupCartCategory = <li>購物車裡有穿戴式裝置分類</li>
     break
    case '耳機/喇叭':
      groupCartCategory = <li>購物車裡有耳機/喇叭分類</li>
     break
    case '運動攝影機':
      groupCartCategory = <li>購物車裡有運動攝影機分類</li>
     break
    case '周邊':
      groupCartCategory = <li>購物車裡有周邊產品分類</li>
     break
  }

  let planGroup = (
    <td className={adPlanGroupStyle}>
    <span onClick={()=>setOpen(!open)} > 再行銷族群 <FiChevronsRight /> </span>
    <ul>
      {groupBuyItems}
      {groupHistoryItems}
      {groupCollectItems}
      {groupHistoryCategory}
      {groupCollectCategory}
      {groupCartCategory}
    </ul>
  </td>
)



  return (
        <>
            <tr>
              <td><button class="btn btn-sm btn-info setState" 
              onClick={()=>{clickItem()
                            props.alertFunc()}}>設定</button></td>
              {props.item.planGroup ? planGroup : <td>所有人</td>}
              <td>{props.item.planName}</td>
              <td>{props.item.planPlace}</td>
              <td>{props.item.planClick}</td>
              <td className={redStyle}>{props.item.planStatus}</td>
              <td>{props.item.planStartTime}</td>
              <td>{props.item.planDueTime}</td>
              {/* <td><button class="fa fa-angle-double-down btn btn-circle adInfo" onClick={()=>setOpen(!open)} ></button></td> */}
              <td><button class="fa fa-angle-double-down btn btn-circle adInfo"  onClick={()=>{clickItem()
                props.loadingFunc()
                props.showFunc()
              }} ></button></td>
            </tr>
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AdListItem))
