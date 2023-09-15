import React from 'react'
import { Link } from 'react-router-dom'
import { Navigation, Pagination, Autoplay} from 'swiper/modules';
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
            modules={[Navigation, Pagination,Autoplay]}
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
              <div class="testimonial-item position-relative bg-white p-5 mt-4">
                <i style={{color:"#f65005"}} class="fa fa-quote-left fa-3x position-absolute top-0 start-0 mt-n4 ms-5"></i>
                <p class="mb-4">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit.</p>
                <div class="d-flex align-items-center">
                  <img style={{ width: "50px", height: "50px",objectFit:"cover" }} class="flex-shrink-0 rounded-circle" src="https://res.cloudinary.com/sttruyen/image/upload/v1694746217/another/rhadcgcifq2qjhhnsvob.jpg" alt="" />
                  <div class="ms-3">
                    <h5 class="mb-1">Client Name</h5>
                    <span>Profession</span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div class="testimonial-item position-relative bg-white p-5 mt-4">
                <i style={{color:"#f65005"}} class="fa fa-quote-left fa-3x position-absolute top-0 start-0 mt-n4 ms-5"></i>
                <p class="mb-4">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit.</p>
                <div class="d-flex align-items-center">
                  <img style={{ width: "50px", height: "50px",objectFit:"cover" }} class="flex-shrink-0 rounded-circle" src="https://res.cloudinary.com/sttruyen/image/upload/v1694746217/another/rhadcgcifq2qjhhnsvob.jpg" alt="" />
                  <div class="ms-3">
                    <h5 class="mb-1">Client Name</h5>
                    <span>Profession</span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div class="testimonial-item position-relative bg-white p-5 mt-4">
                <i style={{color:"#f65005"}} class="fa fa-quote-left fa-3x position-absolute top-0 start-0 mt-n4 ms-5"></i>
                <p class="mb-4">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit.</p>
                <div class="d-flex align-items-center">
                  <img style={{ width: "50px", height: "50px",objectFit:"cover" }} class="flex-shrink-0 rounded-circle" src="https://res.cloudinary.com/sttruyen/image/upload/v1694746217/another/rhadcgcifq2qjhhnsvob.jpg" alt="" />
                  <div class="ms-3">
                    <h5 class="mb-1">Client Name</h5>
                    <span>Profession</span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div class="testimonial-item position-relative bg-white p-5 mt-4">
                <i style={{color:"#f65005"}} class="fa fa-quote-left fa-3x position-absolute top-0 start-0 mt-n4 ms-5"></i>
                <p class="mb-4">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit.</p>
                <div class="d-flex align-items-center">
                  <img style={{ width: "50px", height: "50px",objectFit:"cover" }} class="flex-shrink-0 rounded-circle" src="https://res.cloudinary.com/sttruyen/image/upload/v1694746217/another/rhadcgcifq2qjhhnsvob.jpg" alt="" />
                  <div class="ms-3">
                    <h5 class="mb-1">Client Name</h5>
                    <span>Profession</span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  )
}

export default Home