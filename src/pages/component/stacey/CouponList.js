import React, { useState, useEffect } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
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

//scss
import './couponList.scss'

import CouponListItem from './CouponListItem'

// jQuery
import $ from 'jquery'
import 'jquery-ui/ui/widgets/datepicker'
import 'jquery-ui/themes/base/datepicker.css'

//redux
import { connect } from 'react-redux'
//action
import { bindActionCreators } from 'redux'

const CouponList = () => {


    const data = useSelector(state => state.couponListData)
    const dispatch = useDispatch()

    async function getData (){
        const request = new Request('http://localhost:5500/getCoupon/backCouponData', {
        method: 'GET',
        credentials: 'include',
          headers: new Headers({
            Accept: 'application/json',
            'Content-Type': 'application/json',
          })
      })
      const res = await fetch(request)
      const val = await res.json()
      dispatch({type:'SHOW_DATA',value:val})
    }
    console.log(data)


    useEffect(()=>{
        getData()
    },[])

    return (
        <>
        <div className="wrapper-content">
            <div className="ibox">
                <div className="ibox-title sty-box-title">
                    <p>優惠券總覽</p>
                    <NavLink  className="sty-link" to="/Promote/addCoupon" >
                      新增優惠券
                    </NavLink>
                </div>
                <div className="ibox-content sty-box-content">
                    <div className="row sty-coupon-row">
                    {data.length > 0 ? data.map((val,ind)=>{
                        return  <CouponListItem key={ind} item={val}/>
                    }) : ""}
                    
                    </div>

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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CouponList))
