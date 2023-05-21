<script setup>
import ContactsContent from "../components/ContactsContent.vue";
import TitleVue from "../components/Title.vue";
import SearchBarVue from "../components/SearchBar.vue";
import ButtonsVue from "../components/Buttons.vue";
import { RouterView } from "vue-router";
</script>
<template>
  <!-- contact app contents -->
  <div class="grid gap-4">
    <TitleVue />

    <!-- search bar + 2 buttons -->
    <div class="w-full grid gap-4 sm:flex items-center">
      <!-- search bar -->
      <SearchBarVue />

      <!-- buttons -->
      <ButtonsVue />
    </div>
    <!-- contact list -->
    <div class="w-full">
      <ContactsContent />
    </div>
    <!-- ADD CONTACT popup -->
    <div>
      <RouterView />
    </div>
  </div>
</template>
