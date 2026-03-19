import { defineStore } from "pinia";
import { ref } from 'vue'
import { getTodo } from '@/api/todo/getTodo'
import { getTodos } from '@/api/todo/getTodos'

export const useTodoStore = defineStore('todo', () =>{
    const todos = ref([])
    const todo = ref(null)

    async function fetchTodos() {
        const rawTodos = await getTodos()
            todos.value = rawTodos.map((todo) => ({
            ...todo,
            completed: false
        }))
    }

    async function fetchTodo(id) {
        const data = await getTodo(id)
        todo.value = data
    }

    return {todos, todo, fetchTodos, fetchTodo }
})