import axios from "axios";


export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '45d0ed9ac4b54c3bbcf5a50f731525a7'
    }
})