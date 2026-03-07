<script setup>
const props = defineProps({
    todo: {
        type: Object,
        required: true
    }
}) 

const emits = defineEmits(['deleteTodo'])

const onTodoDelete = () =>{
    emits('deleteTodo', props.todo.id)
}
</script>
<template>
    <div>
      <h2>{{ todo.title }}</h2>
      <input v-model="todo.completed" type="checkbox">
      <button @click="onTodoDelete">Delete</button>
    </div>
</template>