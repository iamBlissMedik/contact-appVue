<script setup>
import { ref } from "vue";
import { useContactStore } from "../stores/contactList";
const store = useContactStore();
</script>
<template>
  <div class="w-full h-[50px] bg-gray-100">
    <!-- home icon -->
    <div
      class="h-[50px] flex w-[60px] ml-3 items-center"
      v-if="!store.side"
      @click="store.open"
    >
      <a href="#">
        <i class="fa fa-bars" aria-hidden="true"></i>
      </a>
    </div>
  </div>
</template>

<style scoped>
div i {
  color: black;
  font-size: 25px;
}</style>
