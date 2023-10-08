import React, { useEffect, useState } from 'react'
import './style.scss'
import { Link, useParams } from 'react-router-dom'
import Dashboard from './Dashboard'
import Subjects from './subject/Subjects'


const Admin = () => {
  const { slug } = useParams();
  const [type, setType] = useState('');
  useEffect(() => {
    setType(slug);
  }, [slug]);

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
            <div style={{ minHeight: "50vh" }} className="navbar-nav w-100">
              <Link to="/admin/management/dashboard" className={`nav-item nav-link ${type === 'dashboard' && 'active'}`}><i className="fa fa-tachometer-alt me-2"></i>Dashboard</Link>
              <Link to="/admin/management/subject" className={`nav-item nav-link ${type === 'subject' && 'active'}`}><i className="fa fa-keyboard me-2"></i>Subject</Link>
            </div>
          </nav>
        </div>
        <div className="content">
          <nav className="navbar navbar-expand bg-light navbar-light sticky-top px-4 py-0">
            <div style={{marginTop:"10px"}} className="d-none d-md-flex ms-4 align-content-center">
              <div className="input-group">
                <div className="form-outline">
                  <input style={{height:"100%"}} placeholder='Tìm kiếm' type="search" id="form1" className="form-control" />
                </div>
                <button style={{height:"35px"}} type="button" className="btn btn-primary">
                  <i className="fas fa-search"></i>
                </button>
              </div>
            </div>
            <div className="navbar-nav align-items-center ms-auto">
              <div className="nav-item dropdown">
                <div style={{ cursor: "pointer" }} className="nav-link dropdown-toggle" data-bs-toggle="dropdown">
                  <img className="rounded-circle me-lg-2" src="https://res.cloudinary.com/sttruyen/image/upload/v1694770081/another/kgxpacycwxq7aqeww2e8.gif" alt="" style={{ width: "40px", height: "40px" }} />
                  <span className="d-none d-lg-inline-flex">John Doe</span>
                </div>
                <div className="dropdown-menu dropdown-menu-end bg-light border-0 rounded-0 rounded-bottom m-0">
                  <div style={{ cursor: "pointer" }} className="drop_item">My Profile</div>
                  <div style={{ cursor: "pointer" }} className="drop_item">Settings</div>
                  <div style={{ cursor: "pointer" }} className="drop_item">Log Out</div>
                </div>
              </div>
            </div>
          </nav>
          {type === 'dashboard' && <Dashboard />}
          {type === 'subject' && <Subjects />}
        </div>
      </div>
      <div href="#" className="btn btn-lg btn-primary btn-lg-square back-to-top"><i className="fa fa-arrow-up"></i></div>
    </>
  )
}
export default Admin