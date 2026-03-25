<script setup>
import { onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { useTodoStore } from '@/stores/todo';
import { storeToRefs } from 'pinia';

const route = useRoute()
const store = useTodoStore()

const {statusText} = store
const {todo} = storeToRefs(store)

onMounted(() =>{
    store.fetchTodo(Number(route.params.id))
})

</script>
<template>
    <div v-if="todo">
        <h2>Задача:</h2>
        <p>{{ todo.title }}</p>
        <h2>Статус:</h2>
        <p :class="{ completed: todo.completed }">{{ statusText }}</p>
    </div>
    <div v-else>
        Загрузка
    </div>
</template>
<style scoped> 
    div{
        width: 300px;
        height: 200px;
        border-radius: 10px;
        padding: 10px 40px;
        background-color: #1D1825;
    }
    h2{
        color: azure;
    }
    p{
        color:#9E78CF;
    }
</style>