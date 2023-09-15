import React from 'react'
import './style.scss'
import { Link } from 'react-router-dom'
const Register = () => {
    return (
        <>
            <div className="limiter">
                <div className="container-login100">
                    <div className="wrap-login100">
                        <div className="login100-pic js-tilt">
                            <img src="https://res.cloudinary.com/sttruyen/image/upload/v1694770081/another/kgxpacycwxq7aqeww2e8.gif" alt="IMG" />
                        </div>
                        <div className="login100-form validate-form">
                            <span style={{ fontWeight: "600", fontSize: "35px" }} className="login100-form-title">
                                Đăng ký
                            </span>
                            <div className="wrap-input100 validate-input" data-validate="Valid email is required: ex@abc.xyz">
                                <input className="input100 input_custom_auth" type="text" name="name" placeholder="Tên hiển thị" />
                                <span className="focus-input100"></span>
                                <span className="symbol-input100">
                                    <i className="fa fa-user" aria-hidden="true"></i>
                                </span>
                            </div>
                            <div style={{ marginTop: "15px" }} className="wrap-input100 validate-input" data-validate="Valid email is required: ex@abc.xyz">
                                <input className="input100 input_custom_auth" type="text" name="email" placeholder="Email" />
                                <span className="focus-input100"></span>
                                <span className="symbol-input100">
                                    <i className="fa fa-envelope" aria-hidden="true"></i>
                                </span>
                            </div>
                            <div style={{ marginTop: "15px" }} className="wrap-input100 validate-input alert-validate" data-validate="Mật khẩu không được trống">
                                <input className="input100 input_custom_auth" type="password" name="pass" placeholder="Mật khẩu" />
                                <span className="focus-input100"></span>
                                <span className="symbol-input100">
                                    <i className="fa fa-lock" aria-hidden="true"></i>
                                </span>
                            </div>
                            <div style={{ marginTop: "15px" }} className="wrap-input100 validate-input alert-validate" data-validate="Mật khẩu không được trống">
                                <input className="input100 input_custom_auth" type="password" name="pass" placeholder="Nhập lại mật khẩu" />
                                <span className="focus-input100"></span>
                                <span className="symbol-input100">
                                    <i className="fa fa-lock" aria-hidden="true"></i>
                                </span>
                            </div>
                            <div className="container-login100-form-btn">
                                <button className="login100-form-btn custom_btn_auth">
                                    Đăng ký
                                </button>
                            </div>
                            <div className="text-center p-t-12">
                                <span className="txt1">
                                    Forgot
                                </span>
                                <Link style={{ marginLeft: "10px" }} className="txt2 link_auth" to="/forgot">
                                    Username / Password?
                                </Link>
                            </div>
                            <div className="text-center p-t-136">
                                <Link className="txt2 link_auth" to="/login">
                                    Đã có tài khoản
                                    <i className="fa fa-long-arrow-right m-l-5" aria-hidden="true"></i>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div></>
    )
}

export default Register