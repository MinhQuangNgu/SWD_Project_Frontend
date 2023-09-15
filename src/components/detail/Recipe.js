import React from 'react'
import './style.scss'
const Recipe = () => {
    return (
        <div className='recipe_bg'>
            <div className='container'>
                <div className='row'>
                    <div className='col-12'>
                        <div className='recipe-img'>
                            <img src="https://res.cloudinary.com/sttruyen/image/upload/v1694421665/pjcicfq1kncbstai4wbc.jpg" />
                            <div className='recipe-introduction'>
                                <p>Ngày nay, dù chúng ta được tiếp xúc với nhiều nền Ẩm thực từ các nước trên thế giới thế nhưng món ăn truyền thống Việt Nam vẫn đóng vai trò quan trọng trong nhịp sống hằng ngày và nhận được cảm tình của bạn bè quốc tế. Ngoài ra, Việt Nam còn nhiều món ăn đặc sắc được làm từ nguyên liệu tự nhiên. Cùng Chefjob.vn điểm tên một số nét đặc trưng của Ẩm thực Việt từ truyền thống đến hiện đại nhé.
                                </p>
                            </div>
                            <div className='recipe-name'>
                                <p>Thịt bò sào măng</p>
                            </div>
                            <div className='recipe-owner'>
                                <div className='recipe-owner-image'>
                                    <img src="https://res.cloudinary.com/sttruyen/image/upload/v1694421664/twfa0a0rxzx2lwtkeryt.jpg" />
                                </div>
                                <div className='recipe-owner-name'>
                                    <p>Minh Quang</p>
                                </div>
                                <div className='recipe-owner-btn'>
                                    <button className='btn btn-primary'>Theo dõi</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='recipe_content'>
                    <div className='col-10'>
                        2Cách làm thịt kho tộ thấm vị
                        Bước 1 Sơ chế nguyên liệu
                        Rửa sạch thịt heo với nước sạch, sau đó cắt thành từng miếng vừa ăn. Với món này bạn có thể sử dụng thịt ba chỉ hay thịt nạc đều ngon.

                        Hành tím và tỏi lột vỏ, rồi cắt lát mỏng, nếu thích bạn cũng có thể băm nhuyễn cũng được nha.

                        Hành lá và ớt rửa sạch, hành lá thì cắt nhỏ, ớt bạn có thể để nguyên trái hoặc cắt nhỏ tùy theo sở thích ăn cay của mình.
                    </div>
                </div>
                <div className='recipe-comments-rate'>

                </div>
                <div className='recipe-comments'>
                    <section>
                        <div class="container my-5 py-5 text-dark">
                            <div class="row d-flex justify-content-center">
                                <div class="col-md-11 col-lg-10 col-xl-10">
                                    <div class="d-flex flex-start mb-4">
                                        <img class="rounded-circle shadow-1-strong me-3"
                                            src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(32).webp" alt="avatar" width="65"
                                            height="65" />
                                        <div class="card w-100">
                                            <div class="card-body p-4">
                                                <div class="">
                                                    <h5>Johny Cash</h5>
                                                    <p class="small">3 hours ago</p>
                                                    <p>
                                                        Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
                                                        ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus
                                                        viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla.
                                                        Donec lacinia congue felis in faucibus ras purus odio, vestibulum in
                                                        vulputate at, tempus viverra turpis.
                                                    </p>

                                                    <div class="d-flex justify-content-between align-items-center">
                                                        <div class="d-flex align-items-center">
                                                            <a href="#!" class="link-muted me-2"><i class="fas fa-thumbs-up me-1"></i>132</a>
                                                            <a href="#!" class="link-muted"><i class="fas fa-thumbs-down me-1"></i>15</a>
                                                        </div>
                                                        <a href="#!" class="link-muted"><i class="fas fa-reply me-1"></i> Reply</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="d-flex flex-start">
                                        <img class="rounded-circle shadow-1-strong me-3"
                                            src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(31).webp" alt="avatar" width="65"
                                            height="65" />
                                        <div class="card w-100">
                                            <div class="card-body p-4">
                                                <div class="">
                                                    <h5>Mindy Campbell</h5>
                                                    <p class="small">5 hours ago</p>
                                                    <p>
                                                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus
                                                        cumque doloribus dolorum dolor repellat nemo animi at iure autem fuga
                                                        cupiditate architecto ut quam provident neque, inventore nisi eos quas?
                                                    </p>

                                                    <div class="d-flex justify-content-between align-items-center">
                                                        <div class="d-flex align-items-center">
                                                            <a href="#!" class="link-muted me-2"><i class="fas fa-thumbs-up me-1"></i>158</a>
                                                            <a href="#!" class="link-muted"><i class="fas fa-thumbs-down me-1"></i>13</a>
                                                        </div>
                                                        <a href="#!" class="link-muted"><i class="fas fa-reply me-1"></i> Reply</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    )
}

export default Recipe