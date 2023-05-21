<script setup>
import { useRouter } from "vue-router";
import Button from "../components/Button.vue";
import { useButtonsStore } from "../stores/Buttons";
const store = useButtonsStore();
const router = useRouter();
const onClick = () => {
  router.push("/contacts");
};
</script>

<template>
  <div class="flex flex-col items-center text-center gap-5">
    <h1 class="text-9xl text-center">HOME</h1>
    <Button
      :class="store.buttons.contact.class"
      :buttonName="store.buttons.contact.buttonName"
      @click="onClick"
    />
  </div>
</template>
