import React from 'react'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { Link } from 'react-router-dom';
ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);
const Dashboard = () => {
    const date = 31;
    const labels = Array(date)
        .fill(1)
        .map((_, index) => index + 1);
    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: "top",
            },
            title: {
                display: true,
                text: "Thống kê",
            },
        },
    };
    const data = {
        labels,
        datasets: [
            {
                label: "Tài khoản mới",
                data: [
                    200, 100, 300, 400, 200, 100, 500, 20, 40,
                ],
                backgroundColor: "rgba(53, 162, 235, 0.5)",
            },
            {
                label: "Công thức mới",
                data: [
                    200, 20, 300, 400, 40, 100, 100, 20, 40,
                ],
                backgroundColor: "rgba(53, 162, 235, 1)",
            },
        ],
    };
    return (
        <>

            <div className="container-fluid pt-4 px-4">
                <div className="row g-4">
                    <div className="col-sm-6 col-xl-4">
                        <div className="bg-light rounded d-flex align-items-center justify-content-between p-4">
                            <i className="fa fa-chart-line fa-3x text-primary"></i>
                            <div className="ms-3">
                                <p className="mb-2">Tổng tài khoản</p>
                                <h6 className="mb-0">40</h6>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-xl-4">
                        <div className="bg-light rounded d-flex align-items-center justify-content-between p-4">
                            <i className="fa fa-chart-bar fa-3x text-primary"></i>
                            <div className="ms-3">
                                <p className="mb-2">Tổng công thức</p>
                                <h6 className="mb-0">400</h6>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-xl-4">
                        <div className="bg-light rounded d-flex align-items-center justify-content-between p-4">
                            <i className="fa fa-chart-area fa-3x text-primary"></i>
                            <div className="ms-3">
                                <p className="mb-2">Tổng đầu bếp</p>
                                <h6 className="mb-0">80</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{ marginTop: "20px" }}>
                <Bar options={options} data={data} />
            </div>
            <div className="container-fluid pt-4 px-4">
                <div className="bg-light text-center rounded p-4">
                    <div className="d-flex align-items-center justify-content-between mb-4">
                        <h6 className="mb-0">Tài khoản mới</h6>
                    </div>
                    <div className="table-responsive">
                        <table className="table text-start align-middle table-bordered table-hover mb-0">
                            <thead>
                                <tr className="text-dark">
                                    <th scope="col"><input className="form-check-input" type="checkbox" /></th>
                                    <th scope="col">Ngày tạo</th>
                                    <th scope="col">Tên đăng nhập</th>
                                    <th scope="col">Vai trò</th>
                                    <th scope="col">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><input className="form-check-input" type="checkbox" /></td>
                                    <td>01 Jan 2045</td>
                                    <td>INV-0123</td>
                                    <td>Jhon Doe</td>
                                    <td><button className="btn btn-sm btn-primary" href="">Khóa</button></td>
                                </tr>
                                <tr>
                                    <td><input className="form-check-input" type="checkbox" /></td>
                                    <td>01 Jan 2045</td>
                                    <td>INV-0123</td>
                                    <td>Jhon Doe</td>
                                    <td><button className="btn btn-sm btn-primary" href="">Khóa</button></td>
                                </tr>
                                <tr>
                                    <td><input className="form-check-input" type="checkbox" /></td>
                                    <td>01 Jan 2045</td>
                                    <td>INV-0123</td>
                                    <td>Jhon Doe</td>
                                    <td><button className="btn btn-sm btn-primary" href="">Khóa</button></td>
                                </tr>
                                <tr>
                                    <td><input className="form-check-input" type="checkbox" /></td>
                                    <td>01 Jan 2045</td>
                                    <td>INV-0123</td>
                                    <td>Jhon Doe</td>
                                    <td><button className="btn btn-sm btn-primary" href="">Khóa</button></td>
                                </tr>
                                <tr>
                                    <td><input className="form-check-input" type="checkbox" /></td>
                                    <td>01 Jan 2045</td>
                                    <td>INV-0123</td>
                                    <td>Jhon Doe</td>
                                    <td><button className="btn btn-sm btn-primary" href="">Khóa</button></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <div className="container-fluid pt-4 px-4">
                <div className="bg-light text-center rounded p-4">
                    <div className="d-flex align-items-center justify-content-between mb-4">
                        <h6 className="mb-0">Công thức mới</h6>
                    </div>
                    <div className="table-responsive">
                        <table className="table text-start align-middle table-bordered table-hover mb-0">
                            <thead>
                                <tr className="text-dark">
                                    <th scope="col"><input className="form-check-input" type="checkbox" /></th>
                                    <th scope="col">Ngày tạo</th>
                                    <th scope="col">Tên công thức</th>
                                    <th scope="col">Người tạo</th>
                                    <th scope="col">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><input className="form-check-input" type="checkbox" /></td>
                                    <td>01 Jan 2045</td>
                                    <td>INV-0123</td>
                                    <td>Jhon Doe</td>
                                    <td><button className="btn btn-sm btn-primary" href="">Khóa</button></td>
                                </tr>
                                <tr>
                                    <td><input className="form-check-input" type="checkbox" /></td>
                                    <td>01 Jan 2045</td>
                                    <td>INV-0123</td>
                                    <td>Jhon Doe</td>
                                    <td><button className="btn btn-sm btn-primary" href="">Khóa</button></td>
                                </tr>
                                <tr>
                                    <td><input className="form-check-input" type="checkbox" /></td>
                                    <td>01 Jan 2045</td>
                                    <td>INV-0123</td>
                                    <td>Jhon Doe</td>
                                    <td><button className="btn btn-sm btn-primary" href="">Khóa</button></td>
                                </tr>
                                <tr>
                                    <td><input className="form-check-input" type="checkbox" /></td>
                                    <td>01 Jan 2045</td>
                                    <td>INV-0123</td>
                                    <td>Jhon Doe</td>
                                    <td><button className="btn btn-sm btn-primary" href="">Khóa</button></td>
                                </tr>
                                <tr>
                                    <td><input className="form-check-input" type="checkbox" /></td>
                                    <td>01 Jan 2045</td>
                                    <td>INV-0123</td>
                                    <td>Jhon Doe</td>
                                    <td><button className="btn btn-sm btn-primary" href="">Khóa</button></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div></>
    )
}

export default Dashboard