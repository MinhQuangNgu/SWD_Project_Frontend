import React from 'react'
import { Link } from 'react-router-dom'
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import './style.scss'
const Home = () => {
  return (
    <>
      <div class="container-fluid p-0 mb-5 wow fadeIn" data-wow-delay="0.1s">
        <div id="header-carousel" class="carousel slide" data-bs-ride="carousel">
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img class="w-100" src="https://res.cloudinary.com/sttruyen/image/upload/v1694747978/pmp5hojav9c8osggx3hn.jpg" alt="Image" />
              <div class="carousel-caption">
                <div class="container">
                  <div class="row justify-content-start">
                    <div style={{ color: "black" }} class="col-lg-7">
                      <h1 class="display-2 mb-5 animated slideInDown">Cùng nhau tạo nên những món ăn ngon</h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="carousel-item">
              <img class="w-100" src="https://res.cloudinary.com/sttruyen/image/upload/v1694748169/gwrobojgvpbfyejhb40j.jpg" alt="Image" />
              <div class="carousel-caption">
                <div class="container">
                  <div style={{ color: "black" }} class="row justify-content-start">
                    <div class="col-lg-7">
                      <h1 class="display-2 mb-5 animated slideInDown">Khám phá mọi miền ẩm thực của thế giới</h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#header-carousel"
            data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#header-carousel"
            data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>

      <div class="container-xxl py-5">
        <div class="container">
          <div class="row g-0 gx-5 align-items-end">
            <div class="section-header text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: "500px" }}>
              <h1 style={{ fontWeight: "700" }} class="display-5 mb-3">Nổi bật</h1>
              <p>Những món ăn nổi bật được nhiều người yêu thích nhất.</p>
            </div>
          </div>
          <div class="tab-content">
            <div class="tab-pane fade show p-0 active">
              <div class="row g-4">
                <div class="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                  <div class="product-item">
                    <div class="position-relative bg-light overflow-hidden">
                      <img style={{ maxHeight: "350px" }} class="img-fluid w-100" src="https://res.cloudinary.com/sttruyen/image/upload/v1694421667/ea4r3uwdjmkobr1mpmkg.jpg" alt="" />
                      <div class="bg-secondary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">Nổi bật</div>
                    </div>
                    <div class="text-center p-2">
                      <Link style={{ textDecoration: "none" }} class="d-block h5 mb-1" to="/">Fresh Tomato</Link>
                      <span style={{ fontSize: "15px", fontStyle: "italic" }} class="text-secondary me-2 d-block">by MinhQuang</span>
                      <span class="text-secondary me-1">2000 <i style={{ color: "red" }} class="fa-solid fa-heart"></i></span>
                    </div>
                    <div class="d-flex border-top">
                      <small class="w-50 text-center border-end py-2">
                        <Link style={{ textDecoration: "none" }} class="text-body" href=""><i class="fa fa-eye text-primary me-2"></i>View detail</Link>
                      </small>
                      <small class="w-50 text-center py-2">
                        <Link style={{ textDecoration: "none" }} class="text-body" href=""><i class="fa fa-shopping-bag text-primary me-2"></i>Add to cart</Link>
                      </small>
                    </div>
                  </div>
                </div>
                <div class="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                  <div class="product-item">
                    <div class="position-relative bg-light overflow-hidden">
                      <img style={{ maxHeight: "350px" }} class="img-fluid w-100" src="https://res.cloudinary.com/sttruyen/image/upload/v1694421667/ea4r3uwdjmkobr1mpmkg.jpg" alt="" />
                      <div class="bg-secondary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">Nổi bật</div>
                    </div>
                    <div class="text-center p-2">
                      <Link style={{ textDecoration: "none" }} class="d-block h5 mb-1" to="/">Fresh Tomato</Link>
                      <span style={{ fontSize: "15px", fontStyle: "italic" }} class="text-secondary me-2 d-block">by MinhQuang</span>
                      <span class="text-secondary me-1">2000 <i style={{ color: "red" }} class="fa-solid fa-heart"></i></span>
                    </div>
                    <div class="d-flex border-top">
                      <small class="w-50 text-center border-end py-2">
                        <Link style={{ textDecoration: "none" }} class="text-body" href=""><i class="fa fa-eye text-primary me-2"></i>View detail</Link>
                      </small>
                      <small class="w-50 text-center py-2">
                        <Link style={{ textDecoration: "none" }} class="text-body" href=""><i class="fa fa-shopping-bag text-primary me-2"></i>Add to cart</Link>
                      </small>
                    </div>
                  </div>
                </div>
                <div class="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                  <div class="product-item">
                    <div class="position-relative bg-light overflow-hidden">
                      <img style={{ maxHeight: "350px" }} class="img-fluid w-100" src="https://res.cloudinary.com/sttruyen/image/upload/v1694421667/ea4r3uwdjmkobr1mpmkg.jpg" alt="" />
                      <div class="bg-secondary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">Nổi bật</div>
                    </div>
                    <div class="text-center p-2">
                      <Link style={{ textDecoration: "none" }} class="d-block h5 mb-1" to="/">Fresh Tomato</Link>
                      <span style={{ fontSize: "15px", fontStyle: "italic" }} class="text-secondary me-2 d-block">by MinhQuang</span>
                      <span class="text-secondary me-1">2000 <i style={{ color: "red" }} class="fa-solid fa-heart"></i></span>
                    </div>
                    <div class="d-flex border-top">
                      <small class="w-50 text-center border-end py-2">
                        <Link style={{ textDecoration: "none" }} class="text-body" href=""><i class="fa fa-eye text-primary me-2"></i>View detail</Link>
                      </small>
                      <small class="w-50 text-center py-2">
                        <Link style={{ textDecoration: "none" }} class="text-body" href=""><i class="fa fa-shopping-bag text-primary me-2"></i>Add to cart</Link>
                      </small>
                    </div>
                  </div>
                </div>
                <div class="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                  <div class="product-item">
                    <div class="position-relative bg-light overflow-hidden">
                      <img style={{ maxHeight: "350px" }} class="img-fluid w-100" src="https://res.cloudinary.com/sttruyen/image/upload/v1694421667/ea4r3uwdjmkobr1mpmkg.jpg" alt="" />
                      <div class="bg-secondary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">Nổi bật</div>
                    </div>
                    <div class="text-center p-2">
                      <Link style={{ textDecoration: "none" }} class="d-block h5 mb-1" to="/">Fresh Tomato</Link>
                      <span style={{ fontSize: "15px", fontStyle: "italic" }} class="text-secondary me-2 d-block">by MinhQuang</span>
                      <span class="text-secondary me-1">2000 <i style={{ color: "red" }} class="fa-solid fa-heart"></i></span>
                    </div>
                    <div class="d-flex border-top">
                      <small class="w-50 text-center border-end py-2">
                        <Link style={{ textDecoration: "none" }} class="text-body" href=""><i class="fa fa-eye text-primary me-2"></i>View detail</Link>
                      </small>
                      <small class="w-50 text-center py-2">
                        <Link style={{ textDecoration: "none" }} class="text-body" href=""><i class="fa fa-shopping-bag text-primary me-2"></i>Add to cart</Link>
                      </small>
                    </div>
                  </div>
                </div>
                <div class="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                  <div class="product-item">
                    <div class="position-relative bg-light overflow-hidden">
                      <img style={{ maxHeight: "350px" }} class="img-fluid w-100" src="https://res.cloudinary.com/sttruyen/image/upload/v1694421667/ea4r3uwdjmkobr1mpmkg.jpg" alt="" />
                      <div class="bg-secondary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">Nổi bật</div>
                    </div>
                    <div class="text-center p-2">
                      <Link style={{ textDecoration: "none" }} class="d-block h5 mb-1" to="/">Fresh Tomato</Link>
                      <span style={{ fontSize: "15px", fontStyle: "italic" }} class="text-secondary me-2 d-block">by MinhQuang</span>
                      <span class="text-secondary me-1">2000 <i style={{ color: "red" }} class="fa-solid fa-heart"></i></span>
                    </div>
                    <div class="d-flex border-top">
                      <small class="w-50 text-center border-end py-2">
                        <Link style={{ textDecoration: "none" }} class="text-body" href=""><i class="fa fa-eye text-primary me-2"></i>View detail</Link>
                      </small>
                      <small class="w-50 text-center py-2">
                        <Link style={{ textDecoration: "none" }} class="text-body" href=""><i class="fa fa-shopping-bag text-primary me-2"></i>Add to cart</Link>
                      </small>
                    </div>
                  </div>
                </div>
                <div class="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                  <div class="product-item">
                    <div class="position-relative bg-light overflow-hidden">
                      <img style={{ maxHeight: "350px" }} class="img-fluid w-100" src="https://res.cloudinary.com/sttruyen/image/upload/v1694421667/ea4r3uwdjmkobr1mpmkg.jpg" alt="" />
                      <div class="bg-secondary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">Nổi bật</div>
                    </div>
                    <div class="text-center p-2">
                      <Link style={{ textDecoration: "none" }} class="d-block h5 mb-1" to="/">Fresh Tomato</Link>
                      <span style={{ fontSize: "15px", fontStyle: "italic" }} class="text-secondary me-2 d-block">by MinhQuang</span>
                      <span class="text-secondary me-1">2000 <i style={{ color: "red" }} class="fa-solid fa-heart"></i></span>
                    </div>
                    <div class="d-flex border-top">
                      <small class="w-50 text-center border-end py-2">
                        <Link style={{ textDecoration: "none" }} class="text-body" href=""><i class="fa fa-eye text-primary me-2"></i>View detail</Link>
                      </small>
                      <small class="w-50 text-center py-2">
                        <Link style={{ textDecoration: "none" }} class="text-body" href=""><i class="fa fa-shopping-bag text-primary me-2"></i>Add to cart</Link>
                      </small>
                    </div>
                  </div>
                </div>
                <div class="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                  <div class="product-item">
                    <div class="position-relative bg-light overflow-hidden">
                      <img style={{ maxHeight: "350px" }} class="img-fluid w-100" src="https://res.cloudinary.com/sttruyen/image/upload/v1694421667/ea4r3uwdjmkobr1mpmkg.jpg" alt="" />
                      <div class="bg-secondary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">Nổi bật</div>
                    </div>
                    <div class="text-center p-2">
                      <Link style={{ textDecoration: "none" }} class="d-block h5 mb-1" to="/">Fresh Tomato</Link>
                      <span style={{ fontSize: "15px", fontStyle: "italic" }} class="text-secondary me-2 d-block">by MinhQuang</span>
                      <span class="text-secondary me-1">2000 <i style={{ color: "red" }} class="fa-solid fa-heart"></i></span>
                    </div>
                    <div class="d-flex border-top">
                      <small class="w-50 text-center border-end py-2">
                        <Link style={{ textDecoration: "none" }} class="text-body" href=""><i class="fa fa-eye text-primary me-2"></i>View detail</Link>
                      </small>
                      <small class="w-50 text-center py-2">
                        <Link style={{ textDecoration: "none" }} class="text-body" href=""><i class="fa fa-shopping-bag text-primary me-2"></i>Add to cart</Link>
                      </small>
                    </div>
                  </div>
                </div>
                <div class="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                  <div class="product-item">
                    <div class="position-relative bg-light overflow-hidden">
                      <img style={{ maxHeight: "350px" }} class="img-fluid w-100" src="https://res.cloudinary.com/sttruyen/image/upload/v1694421667/ea4r3uwdjmkobr1mpmkg.jpg" alt="" />
                      <div class="bg-secondary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">Nổi bật</div>
                    </div>
                    <div class="text-center p-2">
                      <Link style={{ textDecoration: "none" }} class="d-block h5 mb-1" to="/">Fresh Tomato</Link>
                      <span style={{ fontSize: "15px", fontStyle: "italic" }} class="text-secondary me-2 d-block">by MinhQuang</span>
                      <span class="text-secondary me-1">2000 <i style={{ color: "red" }} class="fa-solid fa-heart"></i></span>
                    </div>
                    <div class="d-flex border-top">
                      <small class="w-50 text-center border-end py-2">
                        <Link style={{ textDecoration: "none" }} class="text-body" href=""><i class="fa fa-eye text-primary me-2"></i>View detail</Link>
                      </small>
                      <small class="w-50 text-center py-2">
                        <Link style={{ textDecoration: "none" }} class="text-body" href=""><i class="fa fa-shopping-bag text-primary me-2"></i>Add to cart</Link>
                      </small>
                    </div>
                  </div>
                </div>
                <div class="col-12 text-center">
                  <Link class="btn btn-primary rounded-pill py-3 px-5" href="">Hiển thị thêm</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="container-xxl py-5">
        <div class="container">
          <div class="row g-0 gx-5 align-items-end">
            <div class="section-header text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: "500px" }}>
              <h1 style={{ fontWeight: "700" }} class="display-5 mb-3">Món mới</h1>
              <p>Những món ăn mới được đưa lên bởi các đầu bếp được yêu thích nhất.</p>
            </div>
          </div>
          <div class="tab-content">
            <div class="tab-pane fade show p-0 active">
              <div class="row g-4">
                <div class="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                  <div class="product-item">
                    <div class="position-relative bg-light overflow-hidden">
                      <img style={{ maxHeight: "350px" }} class="img-fluid w-100" src="https://res.cloudinary.com/sttruyen/image/upload/v1694421667/ea4r3uwdjmkobr1mpmkg.jpg" alt="" />
                      <div class="bg-secondary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">Nổi bật</div>
                    </div>
                    <div class="text-center p-2">
                      <Link style={{ textDecoration: "none" }} class="d-block h5 mb-1" to="/">Fresh Tomato</Link>
                      <span style={{ fontSize: "15px", fontStyle: "italic" }} class="text-secondary me-2 d-block">by MinhQuang</span>
                      <span class="text-secondary me-1">2000 <i style={{ color: "red" }} class="fa-solid fa-heart"></i></span>
                    </div>
                    <div class="d-flex border-top">
                      <small class="w-50 text-center border-end py-2">
                        <Link style={{ textDecoration: "none" }} class="text-body" href=""><i class="fa fa-eye text-primary me-2"></i>View detail</Link>
                      </small>
                      <small class="w-50 text-center py-2">
                        <Link style={{ textDecoration: "none" }} class="text-body" href=""><i class="fa fa-shopping-bag text-primary me-2"></i>Add to cart</Link>
                      </small>
                    </div>
                  </div>
                </div>
                <div class="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                  <div class="product-item">
                    <div class="position-relative bg-light overflow-hidden">
                      <img style={{ maxHeight: "350px" }} class="img-fluid w-100" src="https://res.cloudinary.com/sttruyen/image/upload/v1694421667/ea4r3uwdjmkobr1mpmkg.jpg" alt="" />
                      <div class="bg-secondary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">Nổi bật</div>
                    </div>
                    <div class="text-center p-2">
                      <Link style={{ textDecoration: "none" }} class="d-block h5 mb-1" to="/">Fresh Tomato</Link>
                      <span style={{ fontSize: "15px", fontStyle: "italic" }} class="text-secondary me-2 d-block">by MinhQuang</span>
                      <span class="text-secondary me-1">2000 <i style={{ color: "red" }} class="fa-solid fa-heart"></i></span>
                    </div>
                    <div class="d-flex border-top">
                      <small class="w-50 text-center border-end py-2">
                        <Link style={{ textDecoration: "none" }} class="text-body" href=""><i class="fa fa-eye text-primary me-2"></i>View detail</Link>
                      </small>
                      <small class="w-50 text-center py-2">
                        <Link style={{ textDecoration: "none" }} class="text-body" href=""><i class="fa fa-shopping-bag text-primary me-2"></i>Add to cart</Link>
                      </small>
                    </div>
                  </div>
                </div>
                <div class="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                  <div class="product-item">
                    <div class="position-relative bg-light overflow-hidden">
                      <img style={{ maxHeight: "350px" }} class="img-fluid w-100" src="https://res.cloudinary.com/sttruyen/image/upload/v1694421667/ea4r3uwdjmkobr1mpmkg.jpg" alt="" />
                      <div class="bg-secondary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">Nổi bật</div>
                    </div>
                    <div class="text-center p-2">
                      <Link style={{ textDecoration: "none" }} class="d-block h5 mb-1" to="/">Fresh Tomato</Link>
                      <span style={{ fontSize: "15px", fontStyle: "italic" }} class="text-secondary me-2 d-block">by MinhQuang</span>
                      <span class="text-secondary me-1">2000 <i style={{ color: "red" }} class="fa-solid fa-heart"></i></span>
                    </div>
                    <div class="d-flex border-top">
                      <small class="w-50 text-center border-end py-2">
                        <Link style={{ textDecoration: "none" }} class="text-body" href=""><i class="fa fa-eye text-primary me-2"></i>View detail</Link>
                      </small>
                      <small class="w-50 text-center py-2">
                        <Link style={{ textDecoration: "none" }} class="text-body" href=""><i class="fa fa-shopping-bag text-primary me-2"></i>Add to cart</Link>
                      </small>
                    </div>
                  </div>
                </div>
                <div class="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                  <div class="product-item">
                    <div class="position-relative bg-light overflow-hidden">
                      <img style={{ maxHeight: "350px" }} class="img-fluid w-100" src="https://res.cloudinary.com/sttruyen/image/upload/v1694421667/ea4r3uwdjmkobr1mpmkg.jpg" alt="" />
                      <div class="bg-secondary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">Nổi bật</div>
                    </div>
                    <div class="text-center p-2">
                      <Link style={{ textDecoration: "none" }} class="d-block h5 mb-1" to="/">Fresh Tomato</Link>
                      <span style={{ fontSize: "15px", fontStyle: "italic" }} class="text-secondary me-2 d-block">by MinhQuang</span>
                      <span class="text-secondary me-1">2000 <i style={{ color: "red" }} class="fa-solid fa-heart"></i></span>
                    </div>
                    <div class="d-flex border-top">
                      <small class="w-50 text-center border-end py-2">
                        <Link style={{ textDecoration: "none" }} class="text-body" href=""><i class="fa fa-eye text-primary me-2"></i>View detail</Link>
                      </small>
                      <small class="w-50 text-center py-2">
                        <Link style={{ textDecoration: "none" }} class="text-body" href=""><i class="fa fa-shopping-bag text-primary me-2"></i>Add to cart</Link>
                      </small>
                    </div>
                  </div>
                </div>
                <div class="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                  <div class="product-item">
                    <div class="position-relative bg-light overflow-hidden">
                      <img style={{ maxHeight: "350px" }} class="img-fluid w-100" src="https://res.cloudinary.com/sttruyen/image/upload/v1694421667/ea4r3uwdjmkobr1mpmkg.jpg" alt="" />
                      <div class="bg-secondary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">Nổi bật</div>
                    </div>
                    <div class="text-center p-2">
                      <Link style={{ textDecoration: "none" }} class="d-block h5 mb-1" to="/">Fresh Tomato</Link>
                      <span style={{ fontSize: "15px", fontStyle: "italic" }} class="text-secondary me-2 d-block">by MinhQuang</span>
                      <span class="text-secondary me-1">2000 <i style={{ color: "red" }} class="fa-solid fa-heart"></i></span>
                    </div>
                    <div class="d-flex border-top">
                      <small class="w-50 text-center border-end py-2">
                        <Link style={{ textDecoration: "none" }} class="text-body" href=""><i class="fa fa-eye text-primary me-2"></i>View detail</Link>
                      </small>
                      <small class="w-50 text-center py-2">
                        <Link style={{ textDecoration: "none" }} class="text-body" href=""><i class="fa fa-shopping-bag text-primary me-2"></i>Add to cart</Link>
                      </small>
                    </div>
                  </div>
                </div>
                <div class="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                  <div class="product-item">
                    <div class="position-relative bg-light overflow-hidden">
                      <img style={{ maxHeight: "350px" }} class="img-fluid w-100" src="https://res.cloudinary.com/sttruyen/image/upload/v1694421667/ea4r3uwdjmkobr1mpmkg.jpg" alt="" />
                      <div class="bg-secondary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">Nổi bật</div>
                    </div>
                    <div class="text-center p-2">
                      <Link style={{ textDecoration: "none" }} class="d-block h5 mb-1" to="/">Fresh Tomato</Link>
                      <span style={{ fontSize: "15px", fontStyle: "italic" }} class="text-secondary me-2 d-block">by MinhQuang</span>
                      <span class="text-secondary me-1">2000 <i style={{ color: "red" }} class="fa-solid fa-heart"></i></span>
                    </div>
                    <div class="d-flex border-top">
                      <small class="w-50 text-center border-end py-2">
                        <Link style={{ textDecoration: "none" }} class="text-body" href=""><i class="fa fa-eye text-primary me-2"></i>View detail</Link>
                      </small>
                      <small class="w-50 text-center py-2">
                        <Link style={{ textDecoration: "none" }} class="text-body" href=""><i class="fa fa-shopping-bag text-primary me-2"></i>Add to cart</Link>
                      </small>
                    </div>
                  </div>
                </div>
                <div class="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                  <div class="product-item">
                    <div class="position-relative bg-light overflow-hidden">
                      <img style={{ maxHeight: "350px" }} class="img-fluid w-100" src="https://res.cloudinary.com/sttruyen/image/upload/v1694421667/ea4r3uwdjmkobr1mpmkg.jpg" alt="" />
                      <div class="bg-secondary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">Nổi bật</div>
                    </div>
                    <div class="text-center p-2">
                      <Link style={{ textDecoration: "none" }} class="d-block h5 mb-1" to="/">Fresh Tomato</Link>
                      <span style={{ fontSize: "15px", fontStyle: "italic" }} class="text-secondary me-2 d-block">by MinhQuang</span>
                      <span class="text-secondary me-1">2000 <i style={{ color: "red" }} class="fa-solid fa-heart"></i></span>
                    </div>
                    <div class="d-flex border-top">
                      <small class="w-50 text-center border-end py-2">
                        <Link style={{ textDecoration: "none" }} class="text-body" href=""><i class="fa fa-eye text-primary me-2"></i>View detail</Link>
                      </small>
                      <small class="w-50 text-center py-2">
                        <Link style={{ textDecoration: "none" }} class="text-body" href=""><i class="fa fa-shopping-bag text-primary me-2"></i>Add to cart</Link>
                      </small>
                    </div>
                  </div>
                </div>
                <div class="col-xl-3 col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                  <div class="product-item">
                    <div class="position-relative bg-light overflow-hidden">
                      <img style={{ maxHeight: "350px" }} class="img-fluid w-100" src="https://res.cloudinary.com/sttruyen/image/upload/v1694421667/ea4r3uwdjmkobr1mpmkg.jpg" alt="" />
                      <div class="bg-secondary rounded text-white position-absolute start-0 top-0 m-4 py-1 px-3">Nổi bật</div>
                    </div>
                    <div class="text-center p-2">
                      <Link style={{ textDecoration: "none" }} class="d-block h5 mb-1" to="/">Fresh Tomato</Link>
                      <span style={{ fontSize: "15px", fontStyle: "italic" }} class="text-secondary me-2 d-block">by MinhQuang</span>
                      <span class="text-secondary me-1">2000 <i style={{ color: "red" }} class="fa-solid fa-heart"></i></span>
                    </div>
                    <div class="d-flex border-top">
                      <small class="w-50 text-center border-end py-2">
                        <Link style={{ textDecoration: "none" }} class="text-body" href=""><i class="fa fa-eye text-primary me-2"></i>View detail</Link>
                      </small>
                      <small class="w-50 text-center py-2">
                        <Link style={{ textDecoration: "none" }} class="text-body" href=""><i class="fa fa-shopping-bag text-primary me-2"></i>Add to cart</Link>
                      </small>
                    </div>
                  </div>
                </div>
                <div class="col-12 text-center">
                  <Link class="btn btn-primary rounded-pill py-3 px-5" href="">Hiển thị thêm</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="container-fluid bg-light bg-icon py-6 mb-5">
        <div class="container">
          <div class="section-header text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: "500px" }}>
            <h1 style={{ fontWeight: "700" }} class="display-5 mb-3">Đầu bếp ưa thích</h1>
            <p>Những đầu bếp có số lượng theo dõi lớn nhất với cũng cống hiến vô cùng lớn của họ.</p>
          </div>
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={10}
            slidesPerView={3}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            loop
            autoplay={{
              delay: 1000,
              disableOnInteraction: false,
            }}
          >
            <SwiperSlide>
              <section style={{ backgroundColor: "#9de2ff", height: "250px", borderRadius: "30px" }}>
                <div class="container custom_py-5 h-100">
                  <div class="row d-flex align-items-center">
                    <div class="col col-md-9 col-lg-7 col-xl-5">
                      <div class="card" style={{ borderRadius: "15px" }}>
                        <div style={{ height: "150px" }} class="card-body p-4">
                          <div class="d-flex text-black">
                            <div class="flex-shrink-0">
                              <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-profiles/avatar-1.webp"
                                alt="Generic placeholder image" class="img-fluid"
                                style={{ width: "100px", height: "80px", objectFit: "cover" }} />
                            </div>
                            <div class="flex-grow-1 ms-3">
                              <h5 class="mb-1">Danny McLoan</h5>
                              <p class="mb-2 pb-1" style={{ color: "#2b2a2a" }}>Senior Journalist</p>
                              <div class="d-flex justify-content-start rounded-3 p-2 mb-2"
                                style={{ backgroundColor: "#efefef" }}>
                                <div>
                                  <p class="small text-muted mb-1">Articles</p>
                                  <p class="mb-0">41</p>
                                </div>
                                <div class="px-3">
                                  <p class="small text-muted mb-1">Followers</p>
                                  <p class="mb-0">976</p>
                                </div>
                              </div>
                              <div class="d-flex pt-1">
                                <button type="button" class="btn btn-primary flex-grow-1">Theo dõi</button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </SwiperSlide>
            <SwiperSlide>
              <section style={{ backgroundColor: "#9de2ff", height: "250px", borderRadius: "30px" }}>
                <div class="container custom_py-5 h-100">
                  <div class="row d-flex align-items-center">
                    <div class="col col-md-9 col-lg-7 col-xl-5">
                      <div class="card" style={{ borderRadius: "15px" }}>
                        <div style={{ height: "150px" }} class="card-body p-4">
                          <div class="d-flex text-black">
                            <div class="flex-shrink-0">
                              <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-profiles/avatar-1.webp"
                                alt="Generic placeholder image" class="img-fluid"
                                style={{ width: "100px", height: "80px", objectFit: "cover" }} />
                            </div>
                            <div class="flex-grow-1 ms-3">
                              <h5 class="mb-1">Danny McLoan</h5>
                              <p class="mb-2 pb-1" style={{ color: "#2b2a2a" }}>Senior Journalist</p>
                              <div class="d-flex justify-content-start rounded-3 p-2 mb-2"
                                style={{ backgroundColor: "#efefef" }}>
                                <div>
                                  <p class="small text-muted mb-1">Articles</p>
                                  <p class="mb-0">41</p>
                                </div>
                                <div class="px-3">
                                  <p class="small text-muted mb-1">Followers</p>
                                  <p class="mb-0">976</p>
                                </div>
                              </div>
                              <div class="d-flex pt-1">
                                <button type="button" class="btn btn-primary flex-grow-1">Theo dõi</button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </SwiperSlide>
            <SwiperSlide>
              <section style={{ backgroundColor: "#9de2ff", height: "250px", borderRadius: "30px" }}>
                <div class="container custom_py-5 h-100">
                  <div class="row d-flex align-items-center">
                    <div class="col col-md-9 col-lg-7 col-xl-5">
                      <div class="card" style={{ borderRadius: "15px" }}>
                        <div style={{ height: "150px" }} class="card-body p-4">
                          <div class="d-flex text-black">
                            <div class="flex-shrink-0">
                              <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-profiles/avatar-1.webp"
                                alt="Generic placeholder image" class="img-fluid"
                                style={{ width: "100px", height: "80px", objectFit: "cover" }} />
                            </div>
                            <div class="flex-grow-1 ms-3">
                              <h5 class="mb-1">Danny McLoan</h5>
                              <p class="mb-2 pb-1" style={{ color: "#2b2a2a" }}>Senior Journalist</p>
                              <div class="d-flex justify-content-start rounded-3 p-2 mb-2"
                                style={{ backgroundColor: "#efefef" }}>
                                <div>
                                  <p class="small text-muted mb-1">Articles</p>
                                  <p class="mb-0">41</p>
                                </div>
                                <div class="px-3">
                                  <p class="small text-muted mb-1">Followers</p>
                                  <p class="mb-0">976</p>
                                </div>
                              </div>
                              <div class="d-flex pt-1">
                                <button type="button" class="btn btn-primary flex-grow-1">Theo dõi</button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </SwiperSlide>
            <SwiperSlide>
              <section style={{ backgroundColor: "#9de2ff", height: "250px", borderRadius: "30px" }}>
                <div class="container custom_py-5 h-100">
                  <div class="row d-flex align-items-center">
                    <div class="col col-md-9 col-lg-7 col-xl-5">
                      <div class="card" style={{ borderRadius: "15px" }}>
                        <div style={{ height: "150px" }} class="card-body p-4">
                          <div class="d-flex text-black">
                            <div class="flex-shrink-0">
                              <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-profiles/avatar-1.webp"
                                alt="Generic placeholder image" class="img-fluid"
                                style={{ width: "100px", height: "80px", objectFit: "cover" }} />
                            </div>
                            <div class="flex-grow-1 ms-3">
                              <h5 class="mb-1">Danny McLoan</h5>
                              <p class="mb-2 pb-1" style={{ color: "#2b2a2a" }}>Senior Journalist</p>
                              <div class="d-flex justify-content-start rounded-3 p-2 mb-2"
                                style={{ backgroundColor: "#efefef" }}>
                                <div>
                                  <p class="small text-muted mb-1">Articles</p>
                                  <p class="mb-0">41</p>
                                </div>
                                <div class="px-3">
                                  <p class="small text-muted mb-1">Followers</p>
                                  <p class="mb-0">976</p>
                                </div>
                              </div>
                              <div class="d-flex pt-1">
                                <button type="button" class="btn btn-primary flex-grow-1">Theo dõi</button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  )
}

export default Home