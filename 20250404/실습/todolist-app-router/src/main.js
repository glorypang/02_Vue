import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import 'bootstrap/dist/css/bootstrap.min.css';
//피니아가져오기
import { createPinia } from 'pinia';
const app = createApp(App);

app.use(router);
app.use(createPinia());

app.mount('#app');
