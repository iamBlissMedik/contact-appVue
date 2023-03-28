<script setup>
import { useRouter } from "vue-router";

const router = useRouter();
const cancelForm = () => router.push("/contacts");
</script>
<template>
  <div class="float-right w-full flex justify-end gap-7 items-center py-12">
    <button
      type="reset"
      class="px-5 py-4 cancel-btn bg-gray-400 hover:bg-red-700"
      @click="cancelForm"
    >
      Cancel
    </button>
    <button class="px-5 py-4 submit-btn bg-blue-700 hover:bg-green-600">
      Add Contact
    </button>
  </div>
</template>
<style scoped>
.submit-btn {
  border-radius: 10px;
  color: white;
  box-shadow: -1px 21px 34px -14px rgba(0, 0, 255, 0.63);
  font-weight: bold;
  text-transform: uppercase;
}
.cancel-btn {
  border-radius: 10px;
  color: white;
  box-shadow: -1px 21px 34px -14px rgba(0, 0, 255, 0.63);
  border: none;
  font-weight: bold;
  text-transform: uppercase;
}
</style>
