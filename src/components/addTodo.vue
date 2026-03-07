<script setup>
import {ref} from 'vue'

const inputValue = ref('')

const emits = defineEmits(['newData'])

const addToDo = () =>{
    emits('newData', inputValue.value)
    inputValue.value = ''
}
</script>
<template>
    <input v-model="inputValue" type="text">
    <button @click="addToDo">+</button>
</template>