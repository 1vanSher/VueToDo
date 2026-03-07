<script setup>
import {ref, watch, reactive, computed} from 'vue'
import TodoItem from './components/TodoItem.vue'
import AddTodo from './components/addTodo.vue'

const todos = ref([
  {
    title: 'Хлеб',
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
  console.log(newTodos.value.length === todos.value.length)
  return newTodos.value.length === todos.value.length
})

const addToDo = (text) =>{
  todos.value.push({title: text, id: todos.value.length+1, completed: false})
}

watch(todos, () =>{
  console.log(todos);
},
{
  deep:true
}
)
</script>

<template>
  <main>
    <AddTodo @newData="addToDo"/>
    <h2 v-if="allTodosDone">Все задачи выполнены</h2>
    <h2 v-else>Tasks to do {{ newTodos.length }}</h2>
    <TodoItem v-for="todo in newTodos" :key="todo.id" :todo="todo" @deleteTodo="deleteTodo"/>
    <hr>
    <h2 v-if="allTodosNotDone">done <br>Ничего не найдено</h2>
    <h2 v-else>done - {{ doneTodos.length }}</h2>
    <TodoItem v-for="todo in doneTodos" :key="todo.id" :todo="todo" @deleteTodo="deleteTodo"/>
  </main>
</template>

<style scoped></style>