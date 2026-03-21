import { defineStore } from "pinia";
import { ref, computed } from 'vue'
import { getTodo } from '@/api/todo/getTodo'

export const useTodoStore = defineStore('todo', () =>{
    const todo = ref(null)
    //API
    async function fetchTodo(id) {
        const data = await getTodo(id)
        todo.value = data
    }

    //ACTIONS
    const statusText = computed(() => {
        return todo.completed ? 'Выполнено ✓' : 'Не выполнено ✗'
    })  

    return {todo, fetchTodo, statusText }
})