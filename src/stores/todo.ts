import { defineStore } from "pinia";
import { ref, computed } from 'vue'
import { getTodo } from '@/api/todo/getTodo'
import type { Todo } from '@/types/todo'

export const useTodoStore = defineStore('todo', () =>{
    const todo = ref<Todo | null>(null)
    //API
    async function fetchTodo(id:number) {
        const data = await getTodo(id)
        todo.value = data 
    }

    //ACTIONS
    const statusText = computed(() => {
        return todo.value.completed ? 'Выполнено ✓' : 'Не выполнено ✗'
    })  

    return {todo, fetchTodo, statusText }
})