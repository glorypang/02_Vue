<template>
  <div class="card card-body">
    <h2>Test</h2>

    <div>
      <router-link to="{name: '/test/num', params: {num: 1}}"
        ><button class="btn btn-primary">1번 버튼</button></router-link
      >
      <router-link to="{name: '/test/num', params: {num: 2}}"
        ><button class="btn btn-primary">2번 버튼</button></router-link
      >
    </div>
  </div>
</template>

<script>
export default {
  name: 'Test',
};
</script>
