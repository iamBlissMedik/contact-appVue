<script setup>
import Contact from "./Contacts.vue";
import ContactBox from "./contactBox.vue";

</script>
<template>
  <div class="grid grid-cols-1 gap-5   sm:grid sm:grid-cols-2 sm:gap-8  ">
    <!-- table -->
    <div class="mb-1">
      <Contact />
    </div>

    <!-- show contact result -->
    <div>
      <ContactBox />
    </div>

  </div>
</template>

<style scoped>

</style>
