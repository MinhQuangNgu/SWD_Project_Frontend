import React, { useEffect, useRef, useState } from 'react'
import './style.scss';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom'
import axios from 'axios'
import LoginController from '../../service/LoginService'

const pwd_Regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

const Login = ({ setReloadLogin }) => {

  const [action, setAction] = useState("Đăng nhập");

  const usernameRef = useRef();
  const emailRef = useRef();
  const pwdRef = useRef();
  const matchPwdRef = useRef();
  const phoneRef = useRef();
  

  const [user, setUser] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const [pwd, setPwd] = useState('');
  const [validPwd, setValidPwd] = useState('');

  const [matchPwd, setMatchPwd] = useState('');
  const [validMatch, setValidMatchPwd] = useState('');

  useEffect(() => {
    const result = pwd_Regex.test(pwd);
    setValidPwd(result);
    const match = pwd === matchPwd;
    setValidMatchPwd(match);
  }, [pwd, matchPwd])
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    const v1 = user;
    const v2 = email;
    const v3 = pwd_Regex.test(pwd);
    const v4 = pwd_Regex.test(matchPwd);
    const v5 = phone;
    if (action === "Đăng nhập") {
      if (!v1 || !v2) {
        toast("Email hoặc mật khẩu sai định dạng!");
        return;
      }
      try {
        axios.post('http://localhost:3000/Login', {email, pwd})
        .then(res => console.log(res))
        .catch(err => console.log(err))

      } catch (err){
        toast.error(err?.message);
      }
    }
    else {
      if (!v1 || !v2 || !v3 || !v4) {
        toast("Họ tên hoặc email hoặc mật khẩu hoặc phone sai định dạng!");
        return;
      }
      if (!validMatch) {
        toast("Mật khẩu nhắc lại không khớp với mật khẩu!");
        return;
      }
      try {
        const account = {
          username: v1,
          email: v2,
          password: v3,
          phone: v5
        }

        let error =false;
        let err = {};

        const data = await LoginController.handleCreateNewAccount(account);
        toast.success(data.data.message);
        usernameRef.current.value = '';
        emailRef.current.value = '';
        pwdRef.current.value = '';
        matchPwdRef.current.value = '';
        phoneRef.current.value = '';
        setReloadLogin(pre => !pre);
      } catch (err){
        return toast.error(err?.message);
      }
    }
  }

  return (
    <>
      <section>
        <div className="limiter">
          <div className="container-login100">
            <div className="wrap-login100">
              <div className="login100-pic js-tilt">
                <img src="https://res.cloudinary.com/sttruyen/image/upload/v1694770081/another/kgxpacycwxq7aqeww2e8.gif" alt="IMG" />
              </div>
              <div className="login100-form validate-form">
                <span style={{ fontWeight: "600", fontSize: "35px" }} className="login100-form-title">
                  {action}
                </span>
                <form onSubmit={handleSubmit}>
                  {action === "Đăng nhập" ? <div></div> : <div className="wrap-input100 validate-input">
                    <input className="input100 input_custom_auth" ref={usernameRef} type="text" name="username" placeholder="Họ tên" onChange={(e) => setUser(e.target.value)}/>
                    <span className="focus-input100"></span>
                    <span className="symbol-input100">
                      <i className="fa fa-user" aria-hidden="true"></i>
                    </span>
                  </div>}
                  <div className="wrap-input100 validate-input" data-validate="Valid email is required: ex@abc.xyz">
                    <input className="input100 input_custom_auth" ref={emailRef} type="email" name="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)}/>
                    <span className="focus-input100"></span>
                    <span className="symbol-input100">
                      <i className="fa fa-envelope" aria-hidden="true"></i>
                    </span>
                  </div>
                  <div style={{ marginTop: "15px" }} className="wrap-input100 validate-input" data-validate="Mật khẩu không được trống">
                    <input className="input100 input_custom_auth" ref={pwdRef} type="password" name="pass" placeholder="Mật khẩu" onChange={(e) => setPwd(e.target.value)}/>
                    <span className="focus-input100"></span>
                    <span className="symbol-input100">
                      <i className="fa fa-lock" aria-hidden="true"></i>
                    </span>
                  </div>
                  {action === "Đăng nhập" ? <div></div> : <div style={{ marginTop: "15px" }} className="wrap-input100 validate-input" data-validate="Mật khẩu không được trống">
                    <input className="input100 input_custom_auth" ref={matchPwdRef} type="password" name="pass" placeholder="Nhập lại mật khẩu" onChange={(e) => setMatchPwd(e.target.value)}/>
                    <span className="focus-input100"></span>
                    <span className="symbol-input100">
                      <i className="fa fa-lock" aria-hidden="true"></i>
                    </span>
                  </div>}
                  {action === "Đăng nhập" ? <div></div> : <div className="wrap-input100 validate-input">
                    <input className="input100 input_custom_auth" ref={phoneRef} type="tel" pattern="0[0-9]{3}[0-9]{3}[0-9]{3}" maxLength={10} name="phone_number" placeholder="Số điện thoại" onChange={(e) => setPhone(e.target.value)}/>
                    <span className="focus-input100"></span>
                    <span className="symbol-input100">
                      <i className="fa fa-phone" aria-hidden="true"></i>
                    </span>
                  </div>}
                  <div className="container-login100-form-btn">
                    <button className="login100-form-btn custom_btn_auth">
                      {action}
                    </button>
                  </div>
                  <div className="text-center p-t-12">
                    <span className="txt1">
                      Quên
                    </span>
                    <Link style={{ marginLeft: "10px" }} className="txt2 link_auth" to="/Forgot">
                      tài khoản/mật khẩu?
                    </Link>
                  </div>
                  <div className='w-100 d-flex justify-content-center'>
                    <div className='circle_border'>
                      <i className="fa-brands fa-facebook-f"></i>
                    </div>
                    <div className='circle_border'>
                      <i className="fa-brands fa-google"></i>
                    </div>
                  </div>
                  <div className="text-center p-t-136">
                    <Link className="txt2 link_auth" to="" onClick={() => { action === "Đăng nhập" ? setAction("Tạo tài khoản") : setAction("Đăng nhập") }}>
                      {action === "Đăng nhập" ? "Tạo tài khoản" : "Đăng nhập"}
                      <i className="fa fa-long-arrow-right m-l-5" aria-hidden="true"></i>
                    </Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Login