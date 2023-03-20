<script setup>
import { storeToRefs } from "pinia";
import { useContactStore } from "../stores/contactList";
const store = useContactStore();
const { contactResult } = storeToRefs(store);
</script>
<template>
  <div class="data-field  " v-if="store.dataBox">
    <div class=" w-full py-20">
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
      
    </div>
  </div>
</template>

<style scoped>
.data-field {
 
  background-color: #eeecec;
  border-radius: 10px;
  box-shadow: -1px 21px 34px -14px rgba(0, 0, 255, 0.63);
}
</style>
