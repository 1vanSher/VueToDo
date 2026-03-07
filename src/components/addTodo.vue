<script setup>
import {ref} from 'vue'
import IconCommunity from './icons/IconCommunity.vue'

const inputValue = ref('')

const emits = defineEmits(['newData'])

const addToDo = () =>{
    emits('newData', inputValue.value)
    inputValue.value = ''
}
</script>
<template>
    <div>
        <input v-model="inputValue" type="text" placeholder="Add a new task">
        <button @click="addToDo"><IconCommunity/></button>
    </div>
</template>

<style scoped>
    div{
        width: 432px;
        display:  flex;
        justify-content: space-between;
    }
    input{
        outline: none;
        font-size: 16px;
        font-weight: 400;
        padding-left: 15px;
        width: 381px;
        height: 40px;
        border: solid 2px #9E78CF;
        border-radius: 10px;
    }
    button{
        width: 40px;
        height: 40px;
        border-radius: 10px;
        border: none;
        background-color: #9E78CF;
    }
</style>