<script setup>
import { provide } from 'vue';
import * as store from './store';


provide("store", store);

</script>

<template>

  <router-view></router-view>
</template>

<style>
/* 针对webkit内核浏览器的自定义样式 */
.scroll::-webkit-scrollbar {
    width: 0.25rem;
    height: 10.25rem;
}

.scroll::-webkit-scrollbar-track {
    background: transparent;
    /* 滚动条轨道的颜色 */
}

.scroll::-webkit-scrollbar-thumb {
    background-color: #E4E4E7;
    /* 滚动条的颜色 */
    border-radius: 0.625rem;
    /* 滚动条圆角 */
}

.scroll::-webkit-scrollbar-thumb:hover {
    background: #E4E4E7;
    /* 滚动条hover颜色 */
    cursor: pointer;
}
</style>
