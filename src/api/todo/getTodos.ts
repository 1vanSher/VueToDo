import { useAxios } from "../useAxios"
import type { Todo } from '@/types/todo'

export const getTodos = async () =>{
    const axiosInstanse = useAxios()

    try{
        const response = await axiosInstanse.get<Todo[]>('/todos')
        return response.data
    }catch(error){
        console.error('Error')
        return [] 
    }
}