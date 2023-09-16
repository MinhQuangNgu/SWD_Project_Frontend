import React from 'react'
import { Link } from 'react-router-dom'

const OwnRecipeCard = () => {
    return (
        <div className="product-item">
            <div className="position-relative bg-light overflow-hidden">
                <Link to='/recipe/id'>
                    <img style={{ height: "200px", objectFit: "cover" }} className="img-fluid w-100" src="https://res.cloudinary.com/sttruyen/image/upload/v1694421667/ea4r3uwdjmkobr1mpmkg.jpg" alt="" />
                </Link>
                <div className="bg-secondary rounded text-white position-absolute start-0 top-0 m-2 py-1 px-3">Nổi bật</div>
            </div>
            <div className="text-center p-2">
                <Link style={{ textDecoration: "none" }} className="d-block h5 mb-1" to="/recipe/id">Fresh Tomato</Link>
                <span style={{ fontSize: "15px", fontStyle: "italic" }} className="text-secondary me-2 d-block">by MinhQuang</span>
                <span className="text-secondary me-1">2000 <i style={{ color: "red" }} className="fa-solid fa-heart"></i></span>
            </div>
            <div className="d-flex border-top">
                <small className="w-50 text-center border-end py-2">
                    <Link style={{ textDecoration: "none" }} className="text-body" to="/recipe/id"><i className="fa fa-eye text-primary me-2"></i>Sửa</Link>
                </small>
                <small className="w-50 text-center py-2">
                    <div style={{ textDecoration: "none", cursor: "pointer" }} className="text-body"><i className="fa fa-shopping-bag text-primary me-2"></i>Xóa</div>
                </small>
            </div>
        </div>
    )
}

export default OwnRecipeCard