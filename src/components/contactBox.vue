<script setup>
import { storeToRefs } from "pinia";
import { useContactStore } from "../stores/contactList";
const store = useContactStore();
const {contactResult} = storeToRefs(store)

</script>
<template>



    <!-- full name -->
  <div class="flex justify-between border-b-2 items-center">
    <!-- label -->
    <div>
      <p>FULL NAME:</p>
    </div>
    <!-- label result -->
    <div>
      <p>{{ contactResult[0].names}}</p>
    </div>
  </div>
   <!-- Phone Number -->
  <div class="flex justify-between border-b-2 items-center">
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
  <div class="flex justify-between border-b-2 items-center">
    <!-- label -->
    <div>
      <p>EMAIL:</p>
    </div>
    <!-- label result -->
    <div>
      <p>{{contactResult[0].email }}</p>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
