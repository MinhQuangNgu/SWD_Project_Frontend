import React from 'react'
import { Link } from 'react-router-dom'

const RecipeCard = () => {
    return (
        <div class="product-item">
            <div class="position-relative bg-light overflow-hidden">
                <Link to='/recipe/id'>
                    <img style={{ height: "350px", objectFit: "cover" }} class="img-fluid w-100" src="https://res.cloudinary.com/sttruyen/image/upload/v1694421667/ea4r3uwdjmkobr1mpmkg.jpg" alt="" />
                </Link>
                <div class="bg-secondary rounded text-white position-absolute start-0 top-0 m-2 py-1 px-3">Nổi bật</div>
            </div>
            <div class="text-center p-2">
                <Link style={{ textDecoration: "none" }} class="d-block h5 mb-1" to="/recipe/id">Fresh Tomato</Link>
                <span style={{ fontSize: "15px", fontStyle: "italic" }} class="text-secondary me-2 d-block">by MinhQuang</span>
                <span class="text-secondary me-1">2000 <i style={{ color: "red" }} class="fa-solid fa-heart"></i></span>
            </div>
            <div class="d-flex border-top">
                <small class="w-50 text-center border-end py-2">
                    <Link style={{ textDecoration: "none" }} class="text-body" to="/recipe/id"><i class="fa fa-eye text-primary me-2"></i>View detail</Link>
                </small>
                <small class="w-50 text-center py-2">
                    <div style={{ textDecoration: "none", cursor: "pointer" }} class="text-body"><i class="fa fa-shopping-bag text-primary me-2"></i>Add to cart</div>
                </small>
            </div>
        </div>
    )
}

export default RecipeCard