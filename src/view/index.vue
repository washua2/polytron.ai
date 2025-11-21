<template>
  <div>
    <Navbar />
    <!-- main -->
    <div class="w-full flex items-start">
      <div class="ml-[1.5rem] mt-[1.3125rem]">
        <TotalVisitors/>
      </div>
      <div class="w-full">
        <Dashboard/>
      </div>
    </div>
  </div>

</template>
<script setup>
import Navbar from './navbar/index.vue'
import TotalVisitors from './totalVisitors/index.vue'
import Dashboard from './dashboard/index.vue'
import { ref, inject, computed } from 'vue'

</script>
<style lang="scss" scoped></style>