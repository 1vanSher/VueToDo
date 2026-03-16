import { useAxios } from "../useAxios"

export const getTodo = async (id) =>{
    const axiosInstanse = useAxios()

    try{
        const response = await axiosInstanse.get(`/todos/${id}`)
        return response.data
    }catch(error){
        console.error('Error')
        return [] 
    }
}