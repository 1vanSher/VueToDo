import axios from "axios"

export const useAxios = () =>{
    const  axiosInstanse = axios.create({
        baseURL: import.meta.env.VITE_API_BASE_URL
    })

    return axiosInstanse
} 