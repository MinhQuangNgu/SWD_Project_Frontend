import axios from "axios"

class SettingService{
    handleCreateNewAccount = async (account) => {
        return await axios.post('/login/create',{
            ...account
        });
    }

    handleGetAccount = async (email, password) => {
        return axios.get(`/login/${email}${password}`);
    }
}

export default new SettingService()