<script setup>
import { useContactStore } from "../stores/contactList";
import { ref } from "vue";
const store = useContactStore();

const showData = (i) => {
  store.contactIndex(i);
  store.dataBox = true;
};
const deleteContact = (i) => {
  if (store.fullName[i].checked) {
    store.deleteContact(i);
    store.dataBox = false;
  }
};
const checked = () => {
  store.contacts.forEach((e) => (e.checked = !store.checkAll));
};
</script>
<template>
  <table class="text-xs table-auto w-full sm:text-lg mt-3">
    <thead class="text-left uppercase">
      <tr>
        <!-- checkbox -->
        <th>
          <input
            type="checkbox"
            class="cursor-pointer"
            @click="checked"
            v-model="store.checkAll"
          />
        </th>
        <!-- FULL NAME -->
        <th class="p-2">FULLNAME</th>
        <!-- email address -->
        <th class="p-2">Email Address</th>
        <!-- phone number-->
        <th class="p-2">Phone Number</th>
        <th class="p-2"></th>
      </tr>
    </thead>
    <tbody class="text-left sm:text-">
      <tr
        class="cursor-pointer"
        v-for="(contact, index) in store.fullName"
        :key="contact.names"
      >
        <td>
          <input :type="contact && 'checkbox'" v-model="contact.checked" />
        </td>
        <td class="p-2" @click="showData(index)">{{ contact.names }}</td>
        <td class="p-2" @click="showData(index)">{{ contact.email }}</td>
        <td class="p-2" @click="showData(index)">{{ contact.phoneNumber }}</td>
        <td class="p-2" @click="deleteContact(index)">
          <i class="fa fa-trash" aria-hidden="true"></i>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<style scoped>
thead {
  background-color: #eeecec;
  border-radius: 10px;
}
</style>
