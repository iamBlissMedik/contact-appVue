<script setup>
import ContactLists from "../components/ContactList.vue";
import { useContactStore } from "../stores/contactList";
const store = useContactStore();


</script>
<template>
  <header class="flex h-[80px] w-full items-center">
    <!-- image -->

    <img src="../assets/images/contact.png" alt="" class="h-full" />
    <!-- contact name -->
    <div class="flex flex-col h-full  ">
      <h3 class="text-start mb-2 uppercase font-bold">Contacts</h3>
      <!-- title -->
      <div class="">
        <h4>Welcome To Lorem Phonebook</h4>
      </div>
    </div>
  </header>
  <!-- search bar + 2 buttons -->
  <div class="w-full sm:flex items-center">
    <!-- search bar -->
    <div class="my-5">
      <input type="text" class="w-full sm:w-[600px] mr-2" />
    </div>
    <!-- buttons -->
    <div
      class="grid gap-2 h-[80px] sm:w-[300px] sm:flex justify-between sm:h-[50px] items-center"
    >
      <!-- add -->
      <button class="h-full px-1 flex items-center">
        <div class="flex w-full justify-around items-center">
          <i class="fa fa-plus" aria-hidden="true"> </i>
          <span>ADD CONTACT</span>
        </div>
      </button>
      <!-- delete all -->

      <button class="h-full px-1 flex items-center">
        <div class="flex w-full justify-around items-center">
          <i class="fa fa-trash" aria-hidden="true"></i>
          <span>DELETE ALL</span>
        </div>
      </button>
    </div>
  </div>
  <!-- contact list -->
  <div class="w-full ">
    <ContactLists/>
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
input {
  height: 50px;
  border-radius: 10px;
  outline: none;
  border: 1px solid #eeecec;
  background-color: #eeecec;
  padding: 0 10px;
}
</style>
