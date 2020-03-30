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

//scss
import './adList.scss'


import AdListItem from './AdListItem'

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
  FiXCircle
} from 'react-icons/fi'


const AdList = () => {

  const [showAlert,setShowAlert] = useState(false)
  const [stateAlert,setStateAlert] = useState(false)
  const [loading,setLoading] = useState(false)
  

  const stateAlertStyle = classnames('sty-alertBox',{active:stateAlert})
  const showAlertStyle = classnames('sty-alertBox',{active: showAlert})


  const adClickItemData = useSelector(state => state.adClickItemData)
  const data = useSelector(state => state.adListData)
  console.log(adClickItemData)
  const dispatch = useDispatch()

    async function getData (){
        const request = new Request('http://localhost:5500/getCoupon/backAdData', {
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
    // console.log(stateAlert)

    async function setAd (){
      const stateValue = document.querySelector('input[name="status"]:checked').value;

      const request = new Request('http://localhost:5500/getCoupon/backAdSetState', {
        method: 'POST',
        credentials: 'include',
          headers: new Headers({
            Accept: 'application/json',
            'Content-Type': 'application/json',
          }),
          body:JSON.stringify({planId:adClickItemData.planId,
                planStatus:stateValue})
      })
      const res = await fetch(request)
      const val = await res.json()

      console.log(val)

      for(let i= 0 ; i<data.length ;i++){
        if(data[i].planId === adClickItemData.planId){
          data[i].planStatus = stateValue
          break
        }
      }
      dispatch({type:'SHOW_DATA',value:data})
      setStateAlert(!stateAlert)
    }


    useEffect(()=>{
      getData()
    },[])

    
    useEffect(()=>{
      if(loading){
        setTimeout(()=>{
          setLoading(false)
        },500)
      }
    },[loading])

    

  const alertBox = (
                    <div className={stateAlertStyle}>
                      <div class="stateBox">
                        <h3>狀態變更為: </h3>
                        <div class="sty-inputGroup">
                          
                            <input type="radio" name="status" value="審核" id="0"/>
                            <label htmlFor="0"><div className="sty-radio"></div>審核</label>
                            <input type="radio" name="status" value="上架" id="1"/>
                        
                            <label htmlFor="1"><div className="sty-radio"></div>上架</label>
                            <input type="radio" name="status" value="下架" id="2"/>
                            <label htmlFor="2"><div className="sty-radio"></div>下架</label>
                        </div>
                        <input type="hidden" class="editId" name="editId" value=""/>            
                        <div class="d-flex justify-content-between">
                            <button class="btn btn-w-m" onClick={()=>{
                            setStateAlert(!stateAlert)
                            }}>取消</button>
                            <button class="btn btn-w-m  btn-success" onClick={()=>{setAd()}}>確認</button>
                        </div>
                      </div>
                    </div>
                    )

    const showBox = (
                      <div className={showAlertStyle}>
                        <div className="showBox">
                          <div className="show-close" onClick={()=>setShowAlert(!showAlert)}><FiXCircle /></div>
                          <div className="show-num">#1</div>
                          <div className="show-title">熱賣商品</div>
                            <div className="show-img">
                              <img src={`/img/ad-img/${adClickItemData.adImg}`} alt="" />
                            </div>
                            <div className="show-txt">
                              <h3>{adClickItemData.adName}</h3>
                              <h6>{adClickItemData.adTitle}</h6>
                              <p>{adClickItemData.adContent}</p>
                              <button>查看商品</button>
                            </div>
                        </div>
                      </div>
    )
    const loadingBox = (
      <div className={showAlertStyle}>
        <div class="lds-ring"><div></div><div></div><div></div><div></div></div>
      </div>
    )
   
    
    return (
        <>
        {stateAlert && alertBox}
        {showAlert &&  loading ? loadingBox : showBox}
        
        
          <div className="wrapper-content">
              <div className="ibox">
                  <div className="ibox-title sty-box-title">
                      <p>廣告總覽</p>
                  </div>
                  <div className="ibox-content sty-box-content">
                      <table className="table sty-ad-table">
                        <thead>
                          <tr>
                            <th>設定狀態</th>
                            <th>投放對象</th>
                            <th>廣告名稱</th>
                            <th>投放位置</th>
                            <th>點擊數</th>
                            <th>狀態</th>
                            <th>開始時間</th>
                            <th>結束時間</th>
                            <th>預覽</th>
                          </tr>
                        </thead>
                        <tbody>
                          {data.length > 0 ? data.map((val,ind)=>{
                            return <AdListItem key={ind} item={val} alertFunc={()=>{setStateAlert(!stateAlert)}} showFunc={()=>{setShowAlert(!showAlert)}} loadingFunc={()=>{setLoading(!loading)}}/>
                          }) : ''}
                        </tbody>
                      </table>

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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AdList))
