import React from 'react'
import './style.scss'
import {Link} from 'react-router-dom'
const Admin = () => {
  return (
    <>
      <div class="position-relative bg-white d-flex p-0 container">
        {/* <div id="spinner" class="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center">
          <div class="spinner-border text-primary" style={{width:"30px",height:"30px"}} role="status">
            <span class="sr-only">Loading...</span>
          </div>
        </div> */}
        <div class="sidebar pe-4 pb-3">
          <nav class="navbar bg-light navbar-light">
            <Link href="index.html" class="navbar-brand mx-4 mb-3">
              <h3 class="text-primary"><i class="fa fa-hashtag me-2"></i>DASHMIN</h3>
            </Link>
            <div class="d-flex align-items-center ms-4 mb-4">
              <div class="position-relative">
                <img class="rounded-circle" src="https://res.cloudinary.com/sttruyen/image/upload/v1694770029/another/ynkleg4mv9ys1lxs9isl.gif" alt="" style={{ width: "40px", height: "40px" }} />
                <div class="bg-success rounded-circle border border-2 border-white position-absolute end-0 bottom-0 p-1"></div>
              </div>
              <div class="ms-3">
                <h6 class="mb-0">Jhon Doe</h6>
                <span>Admin</span>
              </div>
            </div>
            <div class="navbar-nav w-100">
              <Link href="index.html" class="nav-item nav-link active"><i class="fa fa-tachometer-alt me-2"></i>Dashboard</Link>
              <Link href="widget.html" class="nav-item nav-link"><i class="fa fa-th me-2"></i>Widgets</Link>
              <Link href="form.html" class="nav-item nav-link"><i class="fa fa-keyboard me-2"></i>Forms</Link>
              <Link href="table.html" class="nav-item nav-link"><i class="fa fa-table me-2"></i>Tables</Link>
              <Link href="chart.html" class="nav-item nav-link"><i class="fa fa-chart-bar me-2"></i>Charts</Link>
            </div>
          </nav>
        </div>
        <div class="content">
          <nav class="navbar navbar-expand bg-light navbar-light sticky-top px-4 py-0">
            <Link href="index.html" class="navbar-brand d-flex d-lg-none me-4">
              <h2 class="text-primary mb-0"><i class="fa fa-hashtag"></i></h2>
            </Link>
            <Link href="#" class="sidebar-toggler flex-shrink-0">
              <i class="fa fa-bars"></i>
            </Link>
            <form class="d-none d-md-flex ms-4">
              <input class="form-control border-0" type="search" placeholder="Search" />
            </form>
            <div class="navbar-nav align-items-center ms-auto">
              <div class="nav-item dropdown">
                <Link href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">
                  <img class="rounded-circle me-lg-2" src="https://res.cloudinary.com/sttruyen/image/upload/v1694770081/another/kgxpacycwxq7aqeww2e8.gif" alt="" style={{ width: "40px", height: "40px" }} />
                  <span class="d-none d-lg-inline-flex">John Doe</span>
                </Link>
                <div class="dropdown-menu dropdown-menu-end bg-light border-0 rounded-0 rounded-bottom m-0">
                  <Link href="#" class="dropdown-item">My Profile</Link>
                  <Link href="#" class="dropdown-item">Settings</Link>
                  <Link href="#" class="dropdown-item">Log Out</Link>
                </div>
              </div>
            </div>
          </nav>

          <div class="container-fluid pt-4 px-4">
            <div class="row g-4">
              <div class="col-sm-6 col-xl-4">
                <div class="bg-light rounded d-flex align-items-center justify-content-between p-4">
                  <i class="fa fa-chart-line fa-3x text-primary"></i>
                  <div class="ms-3">
                    <p class="mb-2">Tổng tài khoản</p>
                    <h6 class="mb-0">40</h6>
                  </div>
                </div>
              </div>
              <div class="col-sm-6 col-xl-4">
                <div class="bg-light rounded d-flex align-items-center justify-content-between p-4">
                  <i class="fa fa-chart-bar fa-3x text-primary"></i>
                  <div class="ms-3">
                    <p class="mb-2">Tổng công thức</p>
                    <h6 class="mb-0">400</h6>
                  </div>
                </div>
              </div>
              <div class="col-sm-6 col-xl-4">
                <div class="bg-light rounded d-flex align-items-center justify-content-between p-4">
                  <i class="fa fa-chart-area fa-3x text-primary"></i>
                  <div class="ms-3">
                    <p class="mb-2">Tổng đầu bếp</p>
                    <h6 class="mb-0">80</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="container-fluid pt-4 px-4">
                <div class="bg-light text-center rounded p-4">
                    <div class="d-flex align-items-center justify-content-between mb-4">
                        <h6 class="mb-0">Tài khoản mới</h6>
                        <Link style={{fontSize:"17px"}} href="">Show All</Link>
                    </div>
                    <div class="table-responsive">
                        <table class="table text-start align-middle table-bordered table-hover mb-0">
                            <thead>
                                <tr class="text-dark">
                                    <th scope="col"><input class="form-check-input" type="checkbox" /></th>
                                    <th scope="col">Ngày tạo</th>
                                    <th scope="col">Tên đăng nhập</th>
                                    <th scope="col">Vai trò</th>
                                    <th scope="col">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><input class="form-check-input" type="checkbox" /></td>
                                    <td>01 Jan 2045</td>
                                    <td>INV-0123</td>
                                    <td>Jhon Doe</td>
                                    <td><Link class="btn btn-sm btn-primary" href="">Detail</Link></td>
                                </tr>
                                <tr>
                                    <td><input class="form-check-input" type="checkbox" /></td>
                                    <td>01 Jan 2045</td>
                                    <td>INV-0123</td>
                                    <td>Jhon Doe</td>
                                    <td><Link class="btn btn-sm btn-primary" href="">Detail</Link></td>
                                </tr>
                                <tr>
                                    <td><input class="form-check-input" type="checkbox" /></td>
                                    <td>01 Jan 2045</td>
                                    <td>INV-0123</td>
                                    <td>Jhon Doe</td>
                                    <td><Link class="btn btn-sm btn-primary" href="">Detail</Link></td>
                                </tr>
                                <tr>
                                    <td><input class="form-check-input" type="checkbox" /></td>
                                    <td>01 Jan 2045</td>
                                    <td>INV-0123</td>
                                    <td>Jhon Doe</td>
                                    <td><Link class="btn btn-sm btn-primary" href="">Detail</Link></td>
                                </tr>
                                <tr>
                                    <td><input class="form-check-input" type="checkbox" /></td>
                                    <td>01 Jan 2045</td>
                                    <td>INV-0123</td>
                                    <td>Jhon Doe</td>
                                    <td><Link class="btn btn-sm btn-primary" href="">Detail</Link></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
      </div>
      <Link href="#" class="btn btn-lg btn-primary btn-lg-square back-to-top"><i class="bi bi-arrow-up"></i></Link>
    </>
  )
}
export default Admin