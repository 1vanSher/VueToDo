import { useAxios } from "../useAxios"

export const getTodos = async () =>{
    const axiosInstanse = useAxios()

    try{
        const response = await axiosInstanse.get('/todos')
        return response.data
    }catch(error){
        console.error('Error')
        return [] 
    }
}