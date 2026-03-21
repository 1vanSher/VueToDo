import { defineStore } from "pinia";
import { useRouter } from 'vue-router'
import { ref, computed } from 'vue'
import { getTodos } from '@/api/todo/getTodos'

export const useTodosStore = defineStore('todos', () =>{

    const todos = ref([])
    const router = useRouter()
    //API
    async function fetchTodos() {
        const rawTodos = await getTodos()
            todos.value = rawTodos.map((todo) => ({
            ...todo,
            completed: false
        }))
    }

    //ACTIONS
    const deleteTodo = (id) =>{
        todos.value = todos.value.filter(todo => todo.id !== id)
    }

    const navigateTodo = (id) =>{
        router.push({path: `/todo/${id}`})
    }

    const addToDo = (text) =>{
        if(text === ''){
            return
        }
        todos.value.push({title: text, id: todos.value.length+1, completed: false})
    }

    //COMPUTED
    const doneTodos = computed(() =>{
        return todos.value.filter(todo => todo.completed)
    })

    const newTodos = computed(() =>{
        return todos.value.filter(todo => !todo.completed)
    })

    const allTodosDone = computed(() =>{
        return newTodos.value.length === 0
    })

    const allTodosNotDone = computed(() =>{
        return newTodos.value.length === todos.value.length
    })

    const headerTitleDone = computed(() =>{
        return allTodosDone.value ? 'Все задачи выполнены' : `Tasks to do ${newTodos.value.length}`
    })

    const headerTitleNotDone = computed(() => {
        return allTodosNotDone.value ? `Done
    Ничего не найдено...` : `Done - ${doneTodos.value.length}`
    })

    return {todos, fetchTodos, deleteTodo, navigateTodo, addToDo, doneTodos, newTodos, headerTitleDone, headerTitleNotDone}
})