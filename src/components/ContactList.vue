<script setup>
import Contact from "./Table.vue";
import ContactBox from "./contactBox.vue";

</script>
<template>
  <div class="data">
    <!-- table -->
    <div>
      <Contact />
    </div>

    <!-- show contact result -->
    <div>
      <ContactBox />
    </div>
  </div>
</template>

<style scoped>
thead {
  background-color: #eeecec;
  border-radius: 10px;
}
</style>
