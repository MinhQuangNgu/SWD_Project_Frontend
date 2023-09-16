import React, { useEffect, useState } from 'react'
import './style.scss'
import {Link, useParams} from 'react-router-dom'
import Dashboard from './Dashboard'


const Admin = () => {
  const {slug} = useParams();
  const [type,setType] = useState('');
  useEffect(() => {
    setType(slug);
  },[slug]);
  
  return (
    <>
      <div className="position-relative bg-white d-flex p-0 container">
        <div className="sidebar pe-4 pb-3">
          <nav className="navbar bg-light navbar-light">
            <Link href="index.html" className="navbar-brand mx-4 mb-3">
              <h3 className="text-primary"><i className="fa fa-hashtag me-2"></i>DASHMIN</h3>
            </Link>
            <div className="d-flex align-items-center ms-4 mb-4">
              <div className="position-relative">
                <img className="rounded-circle" src="https://res.cloudinary.com/sttruyen/image/upload/v1694770029/another/ynkleg4mv9ys1lxs9isl.gif" alt="" style={{ width: "40px", height: "40px" }} />
                <div className="bg-success rounded-circle border border-2 border-white position-absolute end-0 bottom-0 p-1"></div>
              </div>
              <div className="ms-3">
                <h6 className="mb-0">Jhon Doe</h6>
                <span>Admin</span>
              </div>
            </div>
            <div style={{minHeight:"50vh"}} className="navbar-nav w-100">
              <Link to="/admin/manager/dashboard" className={`nav-item nav-link ${type === 'dashboard' && 'active'}`}><i className="fa fa-tachometer-alt me-2"></i>Dashboard</Link>
              <Link to="/admin/manager/accounts" className={`nav-item nav-link ${type === 'accounts' && 'active'}`}><i className="fa fa-users"></i>Tài khoản</Link>
              <Link to="/admin/manager/recipes" className={`nav-item nav-link ${type === 'recipes' && 'active'}`}><i className="fa fa-keyboard me-2"></i>Công thức</Link>
            </div>
          </nav>
        </div>
        <div className="content">
            <Dashboard />
        </div>
      </div>
      <div href="#" className="btn btn-lg btn-primary btn-lg-square back-to-top"><i className="fa fa-arrow-up"></i></div>
    </>
  )
}
export default Admin