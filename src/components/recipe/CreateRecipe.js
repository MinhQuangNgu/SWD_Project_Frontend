import React from 'react'
import './style.scss'
const CreateRecipe = () => {
  return (
    <div>
        <div class="wrapper">
			<div class="inner">
				<div class="image-holder">
					<img style={{width:"400px",height:"500px",objectFit:"cover"}} src="https://res.cloudinary.com/sttruyen/image/upload/v1694748169/gwrobojgvpbfyejhb40j.jpg" alt="" />
				</div>
				<div style={{width:"400px"}} className='create_form' action="">
					<h3 style={{marginBottom:"30px"}}>Tạo công thức</h3>
					<div class="form-holder active w-100">
						<textarea style={{width:"100%",minHeight:"100px"}} type="text" placeholder="Tên món ăn" class="form-control" />
					</div>
                    <div class="form-holder active">
						<textarea style={{width:"100%",minHeight:"200px"}} type="text" placeholder="Giới thiệu món ăn" class="form-control" />
					</div>
				</div>
			</div>
            <div className='recipe_create'>
            <h3 style={{marginTop:"20px"}}>Công thức</h3>
            </div>
		</div>
    </div>
  )
}

export default CreateRecipe