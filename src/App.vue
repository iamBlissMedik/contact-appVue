<script setup>
import HeaderTop from "./components/Header.vue";
import SideBar from "./components/SideBar.vue";
import { RouterView } from "vue-router";
</script>

<template>
  <div class="w-full h-full flex">
    <div>
      <SideBar />
    </div>
    <div class="w-full h-full">
      <HeaderTop />
      <div class="w-full h-full p-[40px]">
        <RouterView />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
