<script setup>
import Contact from "./Table.vue";
import ContactBox from "./contactBox.vue";

</script>
<template>
  <div class="grid grid-cols-1 gap-5  sm:grid sm:grid-cols-2 sm:gap-11  ">
    <!-- table -->
    <div class="mb-1">
      <Contact />
    </div>

    <!-- show contact result -->
    <div>
      <ContactBox />
    </div>
    <h1>hello</h1>
  </div>
</template>

<style scoped>

</style>
