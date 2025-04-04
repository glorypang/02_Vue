import { reactive, computed } from 'vue';
import { defineStore } from 'pinia';

export const useTodoListStore = defineStore('todoList', () => {
  // 반응형 상태 정의
  const state = reactive({
    todoList: [
      { id: 1, todo: 'ES6학습', done: false },
      { id: 2, todo: 'React학습', done: false },
      { id: 3, todo: 'ContextAPI 학습', done: true },
    ],
  });

  // 액션 정의
  const addTodo = (todo) => {
    state.todoList.push({
      id: new Date().getTime(), // 현재 시간을 ID로 사용
      todo,
      done: false,
    });
  };

  const deleteTodo = (id) => {
    let index = state.todoList.findIndex((todo) => todo.id === id);
    state.todoList.splice(index, 1); // 해당 인덱스의 항목 삭제
  };

  const toggleDone = (id) => {
    let index = state.todoList.findIndex((todo) => todo.id === id);
    state.todoList[index].done = !state.todoList[index].done; // 완료 상태 토글
  };

  // 계산된 속성 정의
  const doneCount = computed(
    () => state.todoList.filter((todoItem) => todoItem.done === true).length
  );

  const todoList = computed(() => state.todoList);

  return {
    todoList, // 전체 할일 목록
    doneCount, // 완료된 할일 개수
    addTodo, // 할일 추가 메서드
    deleteTodo, // 할일 삭제 메서드
    toggleDone, // 완료 상태 토글 메서드
  };
});
