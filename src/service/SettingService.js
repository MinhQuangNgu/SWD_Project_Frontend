import axios from "axios"

class SettingService{
    async getSettingList(){
        try{
            const data = await axios.get('/setting');
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
    handleDeleteSetting = async (id) => {
        try {
            const data = await axios.delete(`/setting/${id}`);
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
            const data = await axios.post(`/setting/c_status/${id}`);
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

    handleCreateNewSetting = async (setting) => {
        return await axios.post('/setting/create',{
            ...setting
        });
    }

    handleUpdateSetting = async (id,tempSetting) => {
        return await axios.put(`/setting/${id}`, {
            ...tempSetting
        });
    }

    handleGetSetting = async (id) => {
        return axios.get(`/setting/${id}`);
    }
}

export default new SettingService()