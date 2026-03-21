<script setup>
import {ref, reactive, computed, onMounted} from 'vue'
import TodoItem from '@/components/TodoItem.vue'
import AddTodo from '@/components/AddTodo.vue'
import { useBreakpoint } from '@/composables/useBreakpoint'
import { useTodosStore } from '@/stores/todos'
import { storeToRefs } from 'pinia'

const store = useTodosStore()

const {deleteTodo, navigateTodo, addToDo} = store
const {todos, doneTodos, newTodos, headerTitleDone, headerTitleNotDone} = storeToRefs(store)

onMounted(() =>{
  store.fetchTodos()
})

const { isWider } = useBreakpoint(1024)

</script>

<template>
  <div v-if="isWider">
    <AddTodo @onAddButtonClick="addToDo"/>
    <h2>{{ headerTitleDone }}</h2>
    <TodoItem v-for="todo in newTodos" :key="todo.id" :todo="todo" @deleteTodo="deleteTodo" @navigateTodo="navigateTodo"/>
    <h2 style="white-space: pre-wrap">{{ headerTitleNotDone }}</h2>
    <TodoItem v-for="todo in doneTodos" :key="todo.id" :todo="todo" @deleteTodo="deleteTodo" @navigateTodo="navigateTodo"/>
  </div>
  <p v-else class="too-small">
    Sorry, too small
  </p>
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
  .too-small {
  color: #888;
  font-size: 18px;
  }
</style>