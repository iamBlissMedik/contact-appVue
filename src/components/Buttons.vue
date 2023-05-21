<script setup>
import { useRouter } from "vue-router";
import { useContactStore } from "../stores/contactList";

const router = useRouter();
const store = useContactStore();
const openModal = () => {
  store.dataBox = false;
  router.push("/contacts/contact");
};
const deleteAll = () => {
  store.deleteAll();
  store.checkAll = false;
};
</script>
<template>
  <div
    class="flex gap-2 h-[40px] w-fit sm:w-[300px] sm:flex justify-between sm:h-[50px] "
  >
    <!-- add -->
    <button
      class="py-2 px-1 flex items-center"
      :class="store.checkAll && 'opacity-50 cursor-not-allowed'"
      @click="openModal"
      :disabled="store.checkAll"
    >
      <div class="flex w-full justify-around items-center">
        <i class="fa fa-plus mr-2" aria-hidden="true"> </i>
        <span>ADD CONTACT</span>
      </div>
    </button>
    <!-- delete all -->
    <button
      class="py-2 px-1 flex items-center"
      v-if="store.checkAll"
      @click="deleteAll"
    >
      <div class="flex w-full justify-around items-center">
        <i class="fa fa-trash" aria-hidden="true"></i>
        <span>DELETE ALL</span>
      </div>
    </button>
  </div>
</template>
<style scoped>
button {
  background: linear-gradient(
    90deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(98, 94, 125, 1) 0%,
    rgba(6, 87, 173, 1) 11%,
    rgba(10, 81, 171, 1) 25%,
    rgba(17, 70, 168, 1) 61%,
    rgba(30, 49, 162, 1) 93%
  );
  border-radius: 10px;
  box-shadow: -1px 21px 34px -14px rgba(0, 0, 255, 0.63);
  width: 140px;
  font-size: 15px;
  color: white !important;
  font-weight: bold;
}
</style>
