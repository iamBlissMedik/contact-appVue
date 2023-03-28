<script setup>
const props = defineProps(["type", "buttonName","class"]);
</script>
<template>
  <div class="w-fit ">
    <button :type="type" :class="class" >
      {{ buttonName }}
    </button>
  </div>
</template>

<style scoped>
button {
  color: white;
  box-shadow: -1px 21px 34px -14px rgba(0, 0, 255, 0.63);
  font-weight: bold;
  text-transform: uppercase;
  border: none;
  border-radius: 12px;
  padding: 16px;
}
</style>
