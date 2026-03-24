import { useAxios } from "../useAxios"
import type { Todo } from '@/types/todo'

export const getTodo = async (id: number) =>{
    const axiosInstanse = useAxios()

    try{
        const response = await axiosInstanse.get<Todo>(`/todos/${id}`)
        return response.data
    }catch(error){
        console.error('Error')
        return null
    }
}