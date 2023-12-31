import axios from "axios"

class SubjectService{
    async getSubjectList(queryString,searchValue){
        try{
            let query = `/subject?sort=${queryString}`
            if(searchValue){
                query += `&search=${searchValue}`
            }
            const data = await axios.get(query);
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
    handleDeleteSubjectR = async (id) => {
        try {
            const data = await axios.delete(`/subject/${id}`);
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

    handleSetStatus = async (id) => {
        try {
            const data = await axios.post(`/subject/c_status/${id}`);
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

    handleCreateNewSubject = async (subject) => {
        return await axios.post('/subject/create',{
            ...subject
        });
    }

    handleUpdateSubject = async (id,tempSubject) => {
        return await axios.put(`/subject/${id}`, {
            ...tempSubject
        });
    }

    handleGetSubject = async (id) => {
        return axios.get(`/subject/${id}`);
    }
}

export default new SubjectService()