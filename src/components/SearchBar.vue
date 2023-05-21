<script setup>
import { useContactStore } from "../stores/contactList";
const store = useContactStore();
</script>
<template>
  <div >
    <input
      type="text"
      class="w-full sm:w-[600px] "
      v-model.trim="store.search"
    />
  </div>
</template>

<style scoped>
input {
  height: 50px;
  border-radius: 10px;
  outline: none;
  border: 1px solid #eeecec;
  background-color: #eeecec;
  padding: 0 10px;
}
</style>
