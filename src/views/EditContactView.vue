<script setup>
import Edit from "../components/Edit.vue";
import { useContactStore } from "../stores/contactList";
const store = useContactStore();
</script>
<template>
  <div>
    <Edit />
  </div>
</template>

<style scoped></style>
