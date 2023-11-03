import axios from "axios"

class ProjectService{
    async getProjectList(){
        try{
            const data = await axios.get('/project');
            
            return {
                isSuccess:true,
                data:data.data
            };
        }
        catch(err){
            return {
                isSuccess:false,
                data:err
            }
        }
    }
    handleSetStaus = async (id) => {
        try {
            const data = await axios.put(`/project/setStatus/${id}`);
            return {
                isSuccess:true,
                data:data.data
            }
        }
        catch (err) {
            return {
                isSuccess:false,
                data:err
            }
        }
    }

    // handleSetStatus = async (id) => {
    //     try {
    //         const data = await axios.post(`/subject/c_status/${id}`);
    //         return {
    //             isSuccess:true,
    //             data:data.data
    //         }
    //     }
    //     catch (err) {
    //         return {
    //             isSuccess:false,
    //             data:err
    //         }
    //     }
    // }

    // handleCreateNewSubject = async (subject) => {
    //     return await axios.post('/subject/create',{
    //         ...subject
    //     });
    // }

    // handleUpdateSubject = async (id,tempSubject) => {
    //     return await axios.put(`/subject/${id}`, {
    //         ...tempSubject
    //     });
    // }

    // handleGetSubject = async (id) => {
    //     return axios.get(`/subject/${id}`);
    // }
}

export default new ProjectService()