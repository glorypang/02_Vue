<template>
  <div class="card card-body">
    <h2>TestChild</h2>
    <h3>파라미터 num : {{ num }}</h3>

    <button class="btn btn-primary btn-lg" @click="closeTest">닫기</button>
  </div>
</template>

<script>
import { useRoute, useRouter } from 'vue-router';
import { ref, watchEffect } from 'vue';
// Composition API 방식의 단일 값 proxy 래핑 객체

export default {
  name: 'TestChild',

  setup() {
    // 현재 라우트 정보(path, fullpath, params 등의 정보가 담겨있음)
    const currentRoute = useRoute();

    // 동적라우트(:num)에 전달된 값 얻어와 num변수에 저장
    const num = ref(currentRoute.params.num);

    // watchEffect() : ref,reactive 변화가 감지되면 수행
    watchEffect(() => {
      num.value = currentRoute.params.num;
    });

    // 프로그래밍 방식을 라우팅 제어하기
    const router = useRouter();
    const closeTest = () => {
        // <RouterLink to="/test"> 클릭한 것과 같은 효과
      router.push('/test'); // test로 라우팅 => 주소 변경 + 컴포넌트 전환
    };

    // setup() 에서 반환된 객체는 템플릿에서 사용할 수 있음
    return { num, closeTest };
  },
};
</script>
