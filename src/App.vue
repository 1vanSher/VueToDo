<script setup>
import {ref, watch, reactive, computed} from 'vue'
import TodoItem from './components/TodoItem.vue'
import AddTodo from './components/AddTodo.vue'

const todos = ref([
  {
    title: 'Купить хлеб и изучить Vue.js',
    id: 1,
    completed: true
  },
  {
    title: 'Молоко',
    id: 2,
    completed: true
  },
  {
    title: 'Вода',
    id: 3,
    completed: false
  },
  {
    title: 'Чипсы',
    id: 4,
    completed: false
  }
])

const deleteTodo = (id) =>{
  todos.value = todos.value.filter(todo => todo.id !== id)
}

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
const addToDo = (text) =>{
  if(text === ''){
    return
  }
  todos.value.push({title: text, id: todos.value.length+1, completed: false})
}

// watch(todos, () =>{
//   console.log(todos);
// },
// {
//   deep:true
// }
// )
</script>

<template>
  <main>
    <AddTodo @onAddButtonClick="addToDo"/>
    <h2>{{ headerTitleDone }}</h2>
    <TodoItem v-for="todo in newTodos" :key="todo.id" :todo="todo" @deleteTodo="deleteTodo"/>
    <h2 style="white-space: pre-wrap">{{ headerTitleNotDone }}</h2>
    <TodoItem v-for="todo in doneTodos" :key="todo.id" :todo="todo" @deleteTodo="deleteTodo"/>
  </main>
</template>

<style scoped>
  main{
    width: 583px;
    min-height: 758px;
    background-color: #1D1825;
    color: #ffffff;
    padding: 50px 86px 65px 55px;
    border-radius: 20px;
    font-size: 12px;
  }
  h2{
    margin-top: 60px;
    margin-bottom: 15px;
  }
</style>