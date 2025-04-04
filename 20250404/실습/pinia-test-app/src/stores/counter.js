import { ref, computed } from 'vue';
import { defineStore } from 'pinia';

// Store 정의 - 'counter'는 스토어의 이름(고유 식별자)
export const useCounterStore = defineStore('counter', () => {
  // 상태(state) 정의
  const count = ref(0);

  // 계산된 속성(getters) 정의
  const doubleCount = computed(() => count.value * 2);

  // 액션(actions) 정의
  function increment() {
    // 복잡한 로직, 비동기 작업 처리, 상태 변경 등의 코드 작성
    count.value++;
  }

  // 사용할 상태와 메서드 반환
  return { count, doubleCount, increment };
});
