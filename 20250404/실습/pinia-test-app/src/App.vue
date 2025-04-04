<template>
  <div>
    <h2>TodoList 테스트</h2>

    <input v-model="todo" type="text" />
    <button @click="addTodoHandler">추가</button>

    <ul>
      <li v-for="todoItem in todoList">
        <span @click="toggleDone(todoItem.id)">
          {{ todoItem.todo }}
          {{ todoItem.done ? '(완료)' : '' }}
        </span>
        <button @click="deleteTodo(todoItem.id)">삭제</button>
      </li>
    </ul>

    <div>완료된 할일 수: {{ doneCount }}</div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';

// 정의된 Stroe 가져오기
import { useTodoListStore } from '@/stores/todoList';

const todo = ref(''); // 입력 필드를 위한 반응형 참조
const store = useTodoListStore(); // store 인스턴스 생성

// store에서 필요한 메서드와 상태 추출
const { todoList, addTodo, deleteTodo, toggleDone } = store;
const doneCount = computed(() => store.doneCount);

// 할일 추가 핸들러
const addTodoHandler = () => {
  addTodo(todo.value);
  todo.value = ''; // 입력 필드 초기화
};
</script>
