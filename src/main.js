import { createApp } from 'vue'
import App from './App.vue'
import 'flowbite';
import "@/assets/fonts/Roboto/font.css"
import "@/assets/css/style.css"
import globalComponent from '@/common/index';
import 'virtual:svg-icons-register';
import { Slider } from 'ant-design-vue';

// import LiquidGlass from 'liquid-glass-vue'
import router from '@/router';

createApp(App).use(router).use(globalComponent).use(Slider).mount('#app');
