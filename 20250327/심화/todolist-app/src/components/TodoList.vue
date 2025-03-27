<template>
  <div class="row">
    <div class="col">
      <ul class="list-group">
        <TodoListItem
          v-for="todo in todoList"
          :todoItem="todo"
          @toggle-completed="emit('toggle-completed', $event)"
          @delete-todo="emit('delete-todo', $event)"
        />
      </ul>
    </div>
  </div>
</template>

<script setup>
import TodoListItem from './TodoListItem.vue';

// 부모로 부터 전달 받은 데이터 수신 + 유효성 검사
const props = defineProps({
  // 전달 받은 todoList는 배열 형태, 필수 데이터
  todoList: { type: Array, required: true },
});

// 부모 컴포넌트로 방출되는 이벤트 검사
const emit = defineEmits(['toggle-completed', 'delete-todo']);
</script>
