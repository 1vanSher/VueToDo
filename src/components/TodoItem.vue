<script setup>
import IconDocumentation from './icons/IconDocumentation.vue'
import IconEcosystem from './icons/IconEcosystem.vue'
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
    <div class="item">
      <h2 :class="{ completed: todo.completed }">{{ todo.title }}</h2>
      <div>
        <label class="custom-checkbox">
            <input class="hidden-checkbox" v-model="todo.completed"   type="checkbox" >
            <span class="checkbox-icon">
                <IconEcosystem v-if="todo.completed" class="check-icon" />
            </span>
        </label>
        <button @click="onTodoDelete"><IconDocumentation/></button>
      </div>
    </div>
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
    }
    .custom-checkbox {
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    width: 20px;
    height: 20px;
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