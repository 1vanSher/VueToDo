<script>
import {ref, watch, reactive} from 'vue'

const todos = ref([
  {
    title: 'Хлеб',
    id: 1,
    complited: true
  },
  {
    title: 'Молоко',
    id: 2,
    complited: true
  },
  {
    title: 'Вода',
    id: 3,
    complited: false
  },
  {
    title: 'Чипсы',
    id: 4,
    complited: false
  }
])

const deleteTodo = (id) =>{
  todos.value = todos.value.filter(todo => todo.id !== id)
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
    <div v-for="todo in todos" :key="todo.id">
      <h2>{{ todo.title }}</h2>
      <input v-model="todo.complited" type="checkbox">
      <button @click="deleteTodo(todo.id)">Delete</button>
    </div>
  </main>
</template>

<style scoped></style>