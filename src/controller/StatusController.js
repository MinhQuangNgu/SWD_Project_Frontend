import axios from "axios"


class StatusController {
    getAllStatus = async () => {
        try {
            const data = await axios.get('/subject/status')
            return {
                data: data.data,
                isSuccess: true
            }
        }
        catch (err) {
            return {
                data: err,
                isSuccess: false
            }
        }
    }
}

export default new StatusController()