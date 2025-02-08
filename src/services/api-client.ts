import axios from 'axios';


export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key:"32b159719356480e8aea741594135fb8"
    }
})

