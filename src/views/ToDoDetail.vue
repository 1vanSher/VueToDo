<script setup>
import { getTodo } from '@/api/todo/getTodo';
import { onMounted, reactive, computed } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute()

const todo = reactive({})

onMounted(async () =>{
    const newTodo = await getTodo(route.params.id)
    Object.assign(todo, newTodo)
    console.log(todo.completed)
})

const statusText = computed(() => {
    return todo.completed ? 'Выполнено ✓' : 'Не выполнено ✗'
})

</script>
<template>
    <div>
        <h2>Задача:</h2>
        <p>{{ todo.title }}</p>
        <h2>Статус:</h2>
        <p :class="{ completed: todo.completed }">{{ statusText }}</p>
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