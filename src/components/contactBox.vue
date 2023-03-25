<script setup>
import { storeToRefs } from "pinia";
import { useContactStore } from "../stores/contactList";
import { useRouter } from "vue-router";
const router = useRouter();
const store = useContactStore();

const { contactResult } = storeToRefs(store);
const cancelDataBox = () => (store.dataBox = false);
const editDataBox = () => {
  store.dataBox = false;
  router.push("/contacts/edit-contact");
};
</script>
<template>
  <div class="data-field" v-if="store.dataBox">
    <div class="w-full pt-20 pb-10">
      <!-- full name -->
      <div class="flex justify-between border-b-2 items-center py-3 px-8">
        <!-- label -->
        <div>
          <p>FULL NAME:</p>
        </div>
        <!-- label result -->
        <div>
          <p>{{ contactResult[0].names }}</p>
        </div>
      </div>

      <!-- Phone Number -->
      <div class="flex justify-between border-b-2 items-center py-3 px-8">
        <!-- label -->
        <div>
          <p>PhoneNumber:</p>
        </div>
        <!-- label result -->
        <div>
          <p>{{ contactResult[0].phoneNumber }}</p>
        </div>
      </div>
      <!-- EMAIL -->
      <div class="flex justify-between border-b-2 items-center py-3 px-8">
        <!-- label -->
        <div>
          <p>EMAIL:</p>
        </div>
        <!-- label result -->
        <div>
          <p>{{ contactResult[0].email }}</p>
        </div>
      </div>
      <!-- buttons -->
      <div class="flex justify-center gap-3 items-center pt-3">
        <button
          class="px-5 py-4 submit-btn hover:bg-green-600"
          @click="editDataBox"
        >
          EDIT CONTACT
        </button>
        <button
          class="px-5 py-4 cancel-btn hover:bg-red-700"
          @click="cancelDataBox"
        >
          CANCEL
        </button>
      </div>
    </div>
  </div>
</template>
<style scoped>
.data-field {
  background-color: #eeecec;
  border-radius: 10px;
  box-shadow: -1px 21px 34px -14px rgba(0, 0, 255, 0.63);
}
.submit-btn {
  background-color: rgba(30, 49, 162, 1);
  border-radius: 10px;
  box-shadow: -1px 21px 34px -14px rgba(0, 0, 255, 0.63);
  font-size: 15px;
  color: white !important;
  font-weight: bold;
}
.submit-btn:hover {
  background-color: green;
}
.cancel-btn {
  background-color: grey;
  border-radius: 10px;
  color: white;
  box-shadow: -1px 21px 34px -14px rgba(0, 0, 255, 0.63);
  border: none;
  font-weight: bold;
  text-transform: uppercase;
}
</style>
