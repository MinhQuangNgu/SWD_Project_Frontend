import React from 'react'
import { Link } from 'react-router-dom'
import AccountCard from '../card/AccountCard'
const Accounts = () => {
    return (
        <div>
            <section className="ftco-section">
                <div className="row">
                    <div className="col-md-12">
                        <div className="table-wrap">
                            <table className="table table-responsive-xl">
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Thông tin</th>
                                        <th>Vai trò</th>
                                        <th>Công thức</th>
                                        <th>Theo dõi</th>
                                        <th>Status</th>
                                        <th>&nbsp;</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="alert" role="alert">
                                        <td className="border-bottom-0-custom">
                                            50
                                        </td>
                                        <td className="d-flex align-items-center border-bottom-0-custom">
                                            <div className="img" style={{ backgroundImage: "url('https://res.cloudinary.com/sttruyen/image/upload/v1694421667/sfcf5rwxxbjronvxlaef.jpg')", marginRight: "10px" }}></div>
                                            <div className="pl-3 email">
                                                <span>
                                                    <Link to='/minquang/profile'>
                                                        garybird@email.com
                                                    </Link>
                                                </span>
                                                <span>Added: 01/03/2020</span>
                                            </div>
                                        </td>
                                        <td className="border-bottom-0-custom">Đầu bếp</td>
                                        <td className="border-bottom-0-custom">50</td>
                                        <td className="border-bottom-0-custom">50</td>
                                        <td className="status border-bottom-0-custom"><span className="active">Active</span></td>
                                        <td className="border-bottom-0-custom">
                                            <button style={{ height: "30px", fontSize: "12px" }} type="button" className="btn btn-primary">
                                                Sửa
                                            </button>
                                            <button style={{ marginLeft: "5px", height: "30px", fontSize: "12px" }} type="button" className="btn btn-danger">
                                                Khóa
                                            </button>
                                        </td>
                                    </tr>
                                    <tr className="alert" role="alert">
                                        <td className="border-bottom-0-custom">
                                            50
                                        </td>
                                        <td className="d-flex align-items-center border-bottom-0-custom">
                                            <div className="img" style={{ backgroundImage: "url('https://res.cloudinary.com/sttruyen/image/upload/v1694421667/sfcf5rwxxbjronvxlaef.jpg')", marginRight: "10px" }}></div>
                                            <div className="pl-3 email">
                                                <span>
                                                    <Link to='/minquang/profile'>
                                                        garybird@email.com
                                                    </Link>
                                                </span>
                                                <span>Added: 01/03/2020</span>
                                            </div>
                                        </td>
                                        <td className="border-bottom-0-custom">Đầu bếp</td>
                                        <td className="border-bottom-0-custom">50</td>
                                        <td className="border-bottom-0-custom">50</td>
                                        <td className="status border-bottom-0-custom"><span className="active">Active</span></td>
                                        <td className="border-bottom-0-custom">
                                            <button style={{ height: "30px", fontSize: "12px" }} type="button" className="btn btn-primary">
                                                Sửa
                                            </button>
                                            <button style={{ marginLeft: "5px", height: "30px", fontSize: "12px" }} type="button" className="btn btn-danger">
                                                Khóa
                                            </button>
                                        </td>
                                    </tr>
                                    <AccountCard />
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </section>
            <div style={{ marginTop: "30px" }} className='col-12 d-flex justify-content-center'>
                <nav aria-label="Page navigation example">
                    <ul className="pagination">
                        <li style={{ cursor: "pointer" }} className="page-item">
                            <div className="page-link" aria-label="Previous">
                                <span aria-hidden="true">&laquo;</span>
                                <span className="sr-only">Previous</span>
                            </div>
                        </li>
                        <li style={{ cursor: "pointer" }} className="page-item"><div className="page-link active" href="#">1</div></li>
                        <li style={{ cursor: "pointer" }} className="page-item"><div className="page-link" href="#">2</div></li>
                        <li style={{ cursor: "pointer" }} className="page-item"><div className="page-link" href="#">3</div></li>
                        <li style={{ cursor: "pointer" }} className="page-item">
                            <div className="page-link" aria-label="Next">
                                <span aria-hidden="true">&raquo;</span>
                                <span className="sr-only">Next</span>
                            </div>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default Accounts