import React, { useState } from 'react'
import './style.scss'
import { Editor } from "react-draft-wysiwyg";
import {
    EditorState,
    ContentState,
    convertToRaw,
    Modifier,
    convertFromHTML,
} from "draft-js";
const CreateRecipe = () => {
    const [editorState, setEditorState] = useState(EditorState.createEmpty());
    const handleChange = (data) => {
        setEditorState(data);
    };
    const onImageUpload = (file) => {
        return new Promise((resolve, reject) => {
            uploadCallback(file)
                .then((response) => {
                    // setUploadImage(true);
                    resolve({ data: { link: response.data.link } });
                })
                .catch((error) => {
                    reject(error);
                });
        });
    };
    const uploadCallback = (file) => {
        return new Promise((resolve, reject) => {
            const formData = new FormData();
            formData.append("file", file);
            formData.append("upload_preset", "sttruyenxyz");
            // axios
            //     .post(
            //         "https://api.cloudinary.com/v1_1/sttruyen/image/upload",
            //         formData,
            //         {
            //             headers: { "X-Requested-With": "XMLHttpRequest" },
            //             onUploadProgress: (progressEvent) => {
            //                 const percentCompleted = Math.round(
            //                     (progressEvent.loaded * 100) / progressEvent.total
            //                 );
            //             },
            //         }
            //     )
            //     .then((response) => {
            //         resolve({ data: { link: response.data.secure_url } });
            //     })
            //     .catch((error) => {
            //         reject(error);
            //     });
        });
    };
    return (
        <div className='create_recipe_container'>
            <div class="wrapper">
                <div class="inner">
                    <div class="image-holder">
                        <img style={{ width: "400px", height: "500px", objectFit: "cover" }} src="https://res.cloudinary.com/sttruyen/image/upload/v1694748169/gwrobojgvpbfyejhb40j.jpg" alt="" />
                    </div>
                    <div style={{ width: "400px" }} className='create_form' action="">
                        <h3 style={{ marginBottom: "30px" }}>Tạo công thức</h3>
                        <div class="form-holder active w-100">
                            <textarea style={{ width: "100%", minHeight: "100px" }} type="text" placeholder="Tên món ăn" class="form-control" />
                        </div>
                        <div class="form-holder active">
                            <textarea style={{ width: "100%", minHeight: "200px" }} type="text" placeholder="Giới thiệu món ăn" class="form-control" />
                        </div>
                    </div>
                </div>
                <div className='recipe_create'>
                    <h3 style={{ marginTop: "20px" }}>Công thức</h3>
                    <div className='recipe_create_edit'>
                        <Editor
                            editorState={editorState}
                            onEditorStateChange={handleChange}
                            wrapperClassName="editor-wrapper"
                            editorClassName="message-editor"
                            toolbarClassName="message-toolbar"
                            toolbar={{
                                options: [
                                    "inline",
                                    "blockType",
                                    "fontSize",
                                    "list",
                                    "textAlign",
                                    "image",
                                    "emoji",
                                    "link",
                                    "history",
                                ],

                                image: {
                                    uploadEnabled: true,
                                    uploadCallback: onImageUpload,
                                    previewImage: true,
                                    inputAccept: "image/gif,image/jpeg,image/jpg,image/png,image/svg",
                                    alt: { present: false, mandatory: false },
                                    defaultSize: {
                                        height: "200px",
                                        width: "200px",
                                    },
                                },
                            }}
                        />
                    </div>
                    <div style={{marginTop:"30px",marginBottom:"20px"}} className='d-flex justify-content-center'>
                        <button>Tạo mới</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CreateRecipe