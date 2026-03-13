<script setup>
import IconDelete from './icons/IconDelete.vue'
import IconCheck from './icons/IconCheck.vue'
const props = defineProps({
    todo: {
        type: Object,
        required: true
    }
}) 

const emits = defineEmits(['deleteTodo', 'navigateTodo'])

const onTodoDelete = () =>{
    emits('deleteTodo', props.todo.id)
}

const onTodoNavigate = () =>{
    emits('navigateTodo', props.todo.id)
}
</script>
<template>
    <div class="item">
      <h2 :class="{ completed: todo.completed }">{{ todo.title }}</h2>
      <div>
        <label class="custom-checkbox">
            <input class="hidden-checkbox" v-model="todo.completed"   type="checkbox" >
            <span class="checkbox-icon">
                <IconCheck v-if="todo.completed" class="check-icon" />
            </span>
        </label>
        <button @click="onTodoDelete"><IconDelete/></button>
      </div>
    </div @click="onTodoNavigate">
</template>
<style scoped>
    .item{
        width: 432px;
        height: 75px;
        background-color: #15101C;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 20px;
        border-radius: 10px;
        margin-bottom: 15px;
        color: #9E78CF;
        font-size: 12px;
    }
    .item:last-child{
        margin-bottom: 0;
    }
    div{
        display: flex;
        justify-content: center;
        align-items: center;
    }
    button{
        width: 30px;
        height: 30px;
        background: transparent; 
        border: none;  
        cursor: pointer;
    }
    .custom-checkbox {
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    width: 20px;
    height: 20px;
    margin-bottom: 3px;
    }
    .hidden-checkbox {
        position: absolute;
        opacity: 0;
        width: 0;
        height: 0;
    }
    .checkbox-icon {
        width: 20px;
        height: 20px;
        border: 2px solid #9E78CF; 
        border-radius: 6px; 
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: transparent;
        transition: all 0.2s ease;
        box-sizing: border-box;
    }
    .hidden-checkbox:checked + .checkbox-icon{
        border-color: transparent;
        text-decoration: line-through
    }
    .completed {
    text-decoration: line-through;
    color: #78CFB0; 
    }
</style>