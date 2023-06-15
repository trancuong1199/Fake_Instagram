import axios from "axios";

const request = axios.create({
    baseURL: 'https://646b39717d3c1cae4ce36ced.mockapi.io'
})

export const get = async (path) => {
    const response = await request.get(path)

    return response.data
}

export default request;
