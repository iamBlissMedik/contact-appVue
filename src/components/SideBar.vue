<script setup>
import { useContactStore } from "../stores/contactList";
const store = useContactStore();
</script>
<template>
  <div
    class="h-screen w-[60px] bg-blue-800 flex flex-col items-center"
    v-if="store.side"
  >
    <!-- close sidebar -->
    <div class="h-[50px] flex justify-center items-center cursor-pointer" @click="store.close">
      <i class="fa fa-times" aria-hidden="true"></i>
    </div>
    <!-- other icons -->
    <div class="h-[calc(100vh-50px)] flex flex-col justify-around">
      <div>
        <a href="#" class="nav-items">
          <i class="fa fa-home" aria-hidden="true"></i>
        </a>
      </div>
      <div>
        <a href="#" class="nav-items icon-3">
          <i class="fa fa-address-book" aria-hidden="true"></i>
        </a>
      </div>
      <div>
        <a href="#" class="nav-items">
          <i class="fa fa-envelope-o" aria-hidden="true"></i>
        </a>
      </div>
      <div>
        <a href="#" class="nav-items">
          <i class="fa fa-cogs" aria-hidden="true"></i>
        </a>
      </div>
    </div>
  </div>
</template>

<style scoped>
div i {
  color: white;
  font-size: 25px;
}
</style>
