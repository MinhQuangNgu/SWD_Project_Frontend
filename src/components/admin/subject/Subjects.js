import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import CreateNewSubject from './CreateNewSubject';
import CreateNewIssue from './CreateNewIssue';

const Subjects = () => {
    const [type, setType] = useState('list');

    return (
        <div style={{ marginTop: "40px" }}>
            <div className='d-flex btn_subject_manager'>
                <button onClick={() => {
                    setType('list');
                }} className={`${type === 'list' ? 'active' : ''}`}>VIew List</button>
                <button onClick={() => {
                    setType('create');
                }} className={`${type === 'create' ? 'active' : ''}`}>Create New Subject</button>
            </div>
            {type === 'list' && <section style={{ marginTop: "0px" }} className="ftco-section">
                <div className="row">
                    <div className="col-md-12">
                        <div className="table-wrap">
                            <table className="table table-responsive-xl">
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Code</th>
                                        <th>Subject Name</th>
                                        <th>Assignee</th>
                                        <th>Status</th>
                                        <th style={{ width: "25%" }}>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="alert" role="alert">
                                        <td className="border-bottom-0-custom">
                                            50
                                        </td>
                                        <td className="border-bottom-0-custom">
                                            <div className="pl-3">
                                                <span>
                                                    HTML-CSS
                                                </span>
                                            </div>
                                        </td>
                                        <td className="border-bottom-0-custom">
                                            <div className="d-flex align-items-center">
                                                <div className="pl-3 email">
                                                    <span>
                                                        HTML,CSS
                                                    </span>
                                                    <span>Added: 01/03/2020</span>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="border-bottom-0-custom">
                                            <div className="img" style={{ backgroundImage: "url('https://res.cloudinary.com/sttruyen/image/upload/v1694421667/ksjctjx7rrwocptprfdx.jpg')", marginLeft: "10px" }}></div>
                                            <div className="pl-3 email">
                                                <span>
                                                    <Link to='/minhquang/profile'>
                                                        Minh Quang
                                                    </Link>
                                                </span>
                                            </div>
                                        </td>
                                        <td className="status border-bottom-0-custom"><span className="active">Active</span></td>
                                        <td className="border-bottom-0-custom">
                                            <button style={{ marginLeft: "5px", height: "30px", fontSize: "12px" }} type="button" className="btn btn-primary">
                                                Update
                                            </button>
                                            <button style={{ marginLeft: "5px", height: "30px", fontSize: "12px" }} type="button" className="btn btn-danger">
                                                Delete
                                            </button>
                                            <button style={{ marginLeft: "5px", height: "30px", fontSize: "12px" }} type="button" className="btn btn-secondary">
                                                Active
                                            </button>
                                        </td>
                                    </tr>
                                    <tr className="alert" role="alert">
                                        <td className="border-bottom-0-custom">
                                            50
                                        </td>
                                        <td className="border-bottom-0-custom">
                                            <div className="pl-3">
                                                <span>
                                                    HTML-CSS
                                                </span>
                                            </div>
                                        </td>
                                        <td className="border-bottom-0-custom">
                                            <div className="d-flex align-items-center">
                                                <div className="pl-3 email">
                                                    <span>
                                                        HTML,CSS
                                                    </span>
                                                    <span>Added: 01/03/2020</span>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="border-bottom-0-custom">
                                            <div className="img" style={{ backgroundImage: "url('https://res.cloudinary.com/sttruyen/image/upload/v1694421667/ksjctjx7rrwocptprfdx.jpg')", marginLeft: "10px" }}></div>
                                            <div className="pl-3 email">
                                                <span>
                                                    <Link to='/minhquang/profile'>
                                                        Minh Quang
                                                    </Link>
                                                </span>
                                            </div>
                                        </td>
                                        <td className="status border-bottom-0-custom"><span className="active">Active</span></td>
                                        <td className="border-bottom-0-custom">
                                            <button style={{ marginLeft: "5px", height: "30px", fontSize: "12px" }} type="button" className="btn btn-primary">
                                                Update
                                            </button>
                                            <button style={{ marginLeft: "5px", height: "30px", fontSize: "12px" }} type="button" className="btn btn-danger">
                                                Delete
                                            </button>
                                            <button style={{ marginLeft: "5px", height: "30px", fontSize: "12px" }} type="button" className="btn btn-secondary">
                                                Active
                                            </button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </section>}
            {type === 'create' && <CreateNewSubject />} 
        </div>
    )
}

export default Subjects