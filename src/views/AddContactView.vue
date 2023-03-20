<script setup>
import Popup from "../components/Popup.vue";
import { useContactStore } from "../stores/contactList";
const store = useContactStore();
</script>
<template>
  <div class="overflow-hidden bg-black" >
    <Popup/>
  </div>
</template>

<style scoped></style>
