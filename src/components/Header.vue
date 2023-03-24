<script setup>
import { ref } from "vue";
import { useContactStore } from "../stores/contactList";
const store = useContactStore();
</script>
<template>
  <div class="w-full h-[50px] bg-gray-100 header">
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
}
.header{
  box-shadow: -1px 21px 34px -14px rgba(0, 0, 255, 0.63);
  -webkit-box-shadow: -1px 21px 34px -14px rgba(0, 0, 255, 0.63);
  -moz-box-shadow: -1px 21px 34px -14px rgba(0, 0, 255, 0.63);
}

</style>
