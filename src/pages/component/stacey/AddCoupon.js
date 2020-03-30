import React, { useState, useEffect, useSelector } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  withRouter,
} from 'react-router-dom'
import { NavLink } from 'react-router-dom'


//sweetalert2
import { withSwalInstance } from 'sweetalert2-react';
import swal from 'sweetalert2';

import './addCoupon.scss'

// jQuery
import $ from 'jquery'
import 'jquery-ui/ui/widgets/datepicker'
import 'jquery-ui/themes/base/datepicker.css'

//redux
import { connect } from 'react-redux'
//action
import { bindActionCreators } from 'redux'

const AddCoupon = () => {

    const [show,setShow] = useState(false)

    const SweetAlert = withSwalInstance(swal);



    useEffect(()=>{

        
        $("input[name='rule']").change(function() {
            if ($(this).val() === "1") {
              $(".rule_pic").css('visibility', 'visible');
              $(".rule_cash").css('visibility', 'hidden');
            } else if ($(this).val() === "2") {
              $(".rule_pic").css('visibility', 'hidden');
              $(".rule_cash").css('visibility', 'visible');
            } else {
              $(".rule_pic").css('visibility', 'hidden');
              $(".rule_cash").css('visibility', 'hidden');
            }
          });
    
          $("input[name='discount']").change(function() {
            if ($(this).val() === "0") {
              $(".discount_p_num").css('visibility', 'visible');
              $(".discount_cash_num").css('visibility', 'hidden');
            } else {
              $(".discount_p_num").css('visibility', 'hidden');
              $(".discount_cash_num").css('visibility', 'visible');
            }
          });
    
          $(".upload").click(function() {
            $("#cp_img").click();
          });

          $(".sty-addButton").click(function() {
            const fd = new FormData(document.couponForm);
    
            //ajax 傳送 (路徑,{方法及內容})
            fetch("http://localhost:5500/getCoupon/addCoupon", {
              method: "POST",
              body: fd
            })
              //回傳是一個promise物件
              // 只有兩條路走 1. .json() 轉成json的Obj  2. .text() 轉成文字
              .then(r => r.json())
              .then(obj => {
                  console.log(obj)
                  setShow(true)
                }
              );
          });

    },[])


    return (
        <>
        <SweetAlert
            show={show}
            title="新增成功"
            text="優惠券新增成功"
            onConfirm={() => setShow(false)}
        />

        <div className="wrapper-content">
            <div className="ibox">
            <div className="ibox-title sty-box-title">
                    <p>優惠券總覽</p>
                    <NavLink  className="sty-link" to="/Promote/couponList" >
                      返回列表頁
                    </NavLink>
                </div>
                <div className="ibox-content sty-box-content">
                    <form
                        className="sty-addForm"
                        name="couponForm"
                        enctype="multipart/form-data"
                    >
                        {/* <!-- 1.優惠對象 --> */}
                        <div className="title">
                        <h3>請選擇優惠商品種類</h3>
                        </div>
                        <div className="sty-inputGroup">
                        <input
                            type="text"
                            name="v_id"
                            value="13"
                            style={{display:'none'}}
                            />
                        <input
                            type="text"
                            name="v_name"
                            value="apple"
                            style={{display:'none'}}
                            />
                        <div>
                            <input type="radio" id="object_0" name="object" value="0" />
                            <label htmlFor="object_0"><div className="sty-radio"></div>全部商品</label>
                        </div>
                        <div>
                            <input type="radio" id="object_1" name="object" value="1" />
                            <label htmlFor="object_1"><div className="sty-radio"></div>穿戴式裝置分類</label>
                        </div>
                        <div>
                            <input type="radio" id="object_2" name="object" value="2" />
                            <label htmlFor="object_2"><div className="sty-radio"></div>耳機/喇叭分類</label>
                        </div>
                        <div>
                            <input type="radio" id="object_3" name="object" value="3" />
                            <label htmlFor="object_3"><div className="sty-radio"></div>運動攝影機分類</label>
                        </div>
                        <div>
                            <input type="radio" id="object_4" name="object" value="4" />
                            <label htmlFor="object_4"><div className="sty-radio"></div>周邊產品分類</label>
                        </div>
                        </div>
                        {/* <!-- 2.生效條件 --> */}
                        <div className="title">
                        <h3>請選擇生效條件類型</h3>
                        </div>
                        <div className="sty-inputGroup rule">
                        <div className="mb-1">
                            <input type="radio" id="rule_0" name="rule" value="0" />
                            <label htmlFor="rule_0"><div className="sty-radio"></div>沒有條件</label>
                        </div>
                        <div className="row sty-flex">
                            <div className="col-4">
                            <input type="radio" id="rule_1" name="rule" value="1" />
                            <label htmlFor="rule_1"><div className="sty-radio"></div>單筆訂單指定件數</label>
                            </div>

                            <div
                            className="sty-secondInput col rule_pic" style={{visibility: 'hidden'}}>
                            <label htmlFor="rule_pic_num">請輸入件數 : </label>
                            <input
                                type="text"
                                id="rule_pic_num"
                                name="rule_pic_num"
                                min="1"
                            />
                            </div>
                        </div>
                        <div className="row sty-flex">
                            <div className="col-4">
                            <input type="radio" id="rule_2" name="rule" value="2" />
                            <label htmlFor="rule_2"><div className="sty-radio"></div>單筆訂單指定金額</label>
                            </div>

                            <div
                            className="sty-secondInput col rule_cash"  style={{visibility: 'hidden'}}>
                            <label htmlFor="rule_cash_num">請輸入金額 : </label>
                            <input
                                type="text"
                                id="rule_cash_num"
                                name="rule_cash_num"
                                min="1"
                            />
                            </div>
                        </div>
                        </div>
                        {/* <!-- 3.優惠類型 --> */}
                        <div className="title">
                        <h3>請選擇優惠類型</h3>
                        </div>
                        <div className="sty-inputGroup">
                        <div className="row sty-flex py-2">
                            <div className="col-4">
                            <input
                                type="radio"
                                id="discount_0"
                                name="discount"
                                value="0"
                            />
                            <label htmlFor="discount_0"><div className="sty-radio"></div>折扣 % 數</label>
                            </div>
                            <div
                            className="sty-secondInput col discount_p_num"  style={{visibility: 'hidden'}}>
                            <label htmlFor="discount_p_num">請輸入金額 : </label>
                            <input
                                type="text"
                                id="discount_p_num"
                                name="discount_p_num"
                                min="1"
                            />
                            <p className="sty-small">
                                (填寫1-100之間任何數字。例：80 代表 八折； 75 代表 75折。)
                            </p>
                            </div>
                        </div>
                        <div className="row sty-flex">
                            <div className="col-4">
                            <input
                                type="radio"
                                id="discount_1"
                                name="discount"
                                value="1"
                            />
                            <label htmlFor="discount_1"><div className="sty-radio"></div>折扣固定金額</label>
                            </div>
                            <div
                            className="sty-secondInput col discount_cash_num"  style={{visibility: 'hidden'}}>
                            <label htmlFor="discount_cash_num">請輸入金額 : </label>
                            <input
                                type="text"
                                id="discount_cash_num"
                                name="discount_cash_num"
                                min="1"
                            />
                            <p className="sty-small">
                                (填寫的數字必須大於 0。例：70 代表 減 $70； 200 代表 減
                                $200。)
                            </p>
                            </div>
                        </div>
                        </div>
                        {/* <!-- 4.優惠券日期 --> */}
                        <div className="title">
                        <h3>請選擇優惠券開始及結束日期</h3>
                        </div>
                        <div className="sty-inputGroup">
                        <div className="mb-3">
                            <label htmlFor="start">開始日期 : </label>
                            <input type="date" id="start" name="start" />
                        </div>
                        <div>
                            <label htmlFor="due">結束日期 : </label>
                            <input type="date" id="due" name="due" />
                        </div>
                        </div>
                        {/* <!-- 5.發放的數量 --> */}
                        <div className="title">
                        <h3>請輸入優惠券發放數量的上限</h3>
                        </div>
                        <div className="sty-inputGroup">
                        <div>
                            <label htmlFor="count">請輸入數量 : </label>
                            <input type="text" id="count" name="count" min="50" />
                        </div>
                        <p className="sty-small">(請填寫至少20以上的數量。)</p>
                        </div>
                        {/* <!-- 6.上傳檔案 --> */}
                        <div className="title">
                        <h3>請選擇上傳的圖片</h3>
                        </div>
                        <div className="sty-inputGroup">
                        <div>
                            <button type="button" className="upload">上傳圖片</button>
                            <input
                            type="file"
                            id="cp_img"
                            name="cp_img"
                            style={{visibility: 'hidden'}}
                            />
                        </div>
                        </div>
                    </form>
                    <div class="d-flex  justify-content-end mt-4">
                        <button class="sty-addButton">新增優惠券</button>
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AddCoupon))
