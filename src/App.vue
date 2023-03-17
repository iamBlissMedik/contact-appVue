<script setup>
import HeaderTop from "./components/Header.vue";
import SideBar from "./components/SideBar.vue";
import { RouterView } from "vue-router";
</script>

<template>
  <div class="w-full h-full flex">
    <SideBar />
    <div class="w-full h-full">
      <HeaderTop />
      <div class="w-full h-[calc(100vh-50px)] p-[40px]">
        <RouterView />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
