<script setup>
import { useContactStore } from "../stores/contactList";
const store = useContactStore();
const showData = (i) => {
  store.contactIndex(i);
  console.log(store.contactResult[0]);
};
</script>
<template>
    
  <table class="text-xs table-auto w-full sm:text-lg sm:w-[600px] mt-3">
    <thead class="text-left uppercase">
      <tr>
        <!-- checkbox -->
        <th>
          <input type="checkbox" name="" id="" />
        </th>
        <!-- FULL NAME -->
        <th class="p-2">FULLNAME</th>
        <!-- email address -->
        <th class="p-2">Email Address</th>
        <!-- phone number-->
        <th class="p-2">Phone Number</th>
      </tr>
    </thead>
    <tbody class="text-left sm:text-">
      <tr
      class="cursor-pointer"
        v-for="(contact, index) in store.fullName"
        :key="index"
        @click="showData(index)"
      >
        <td><input :type="contact && 'checkbox'" name="" id="" /></td>
        <td class="p-2">{{ contact.names }}</td>
        <td class="p-2">{{ contact.email }}</td>
        <td class="p-2">{{ contact.phoneNumber }}</td>
      </tr>
    </tbody>
  </table>
</template>

<style lang="scss" scoped></style>
