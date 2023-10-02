import React from 'react'
import { Link } from 'react-router-dom'

const Subjects = () => {
    return (
        <div>
            <section class="ftco-section">
                <div class="row">
                    <div class="col-md-12">
                        <div class="table-wrap">
                            <table class="table table-responsive-xl">
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Code</th>
                                        <th>Subject Name</th>
                                        <th>Assignee</th>
                                        <th>Status</th>
                                        <th>&nbsp;</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr class="alert" role="alert">
                                        <td class="border-bottom-0-custom">
                                            50
                                        </td>
                                        <td class="border-bottom-0-custom">
                                            <div class="pl-3">
                                                <span>
                                                    HTML-CSS
                                                </span>
                                            </div>
                                        </td>
                                        <td class="border-bottom-0-custom">
                                            <div class="d-flex align-items-center">
                                                <div class="pl-3 email">
                                                    <span>
                                                        HTML,CSS
                                                    </span>
                                                    <span>Added: 01/03/2020</span>
                                                </div>
                                            </div>
                                        </td>
                                        <td class="border-bottom-0-custom">
                                            <div class="img" style={{ backgroundImage: "url('https://res.cloudinary.com/sttruyen/image/upload/v1694421667/ksjctjx7rrwocptprfdx.jpg')", marginLeft: "10px" }}></div>
                                            <div class="pl-3 email">
                                                <span>
                                                    <Link to='/minhquang/profile'>
                                                        Minh Quang
                                                    </Link>
                                                </span>
                                            </div>
                                        </td>
                                        <td class="status border-bottom-0-custom"><span class="active">Active</span></td>
                                        <td class="border-bottom-0-custom">
                                            <button style={{ marginLeft: "5px", height: "30px", fontSize: "12px" }} type="button" class="btn btn-primary">
                                                Update
                                            </button>
                                            <button style={{ marginLeft: "5px", height: "30px", fontSize: "12px" }} type="button" class="btn btn-danger">
                                                Delete
                                            </button>
                                        </td>
                                    </tr>
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

export default Subjects