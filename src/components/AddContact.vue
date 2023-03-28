<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useContactStore } from "../stores/contactList";
import ButtonView from "./Buttons.vue";
import ButtonT from "./Button.vue";

const store = useContactStore();
const router = useRouter();
const form = ref(null);
const contact = ref({
  firstName: "",
  lastName: "",
  phoneNumber: "",
  email: "",
  checked: false,
});

const buttons = ref({
  submit: {
    type: "submit",
    buttonName: "add contact",
    class : "bg-blue-700 hover:bg-green-600 rounded-xl"
  },
  cancel: {
    type: "resett",
    buttonName: "cancel",
     class : "bg-gray-400 w-fit hover:bg-red-700"
  },
});
const cancelForm = () => router.push("/contacts");
const addContact = () => {
  store.addContact(contact.value);
  form.value.reset();
  router.push("/contacts");
};
</script>
<template>
  <div
    class="popup absolute top-0 left-0 w-screen h-screen flex justify-center items-center sm:px-40"
  >
    <div class="form w-full bg-white">
      <div
        class="pt-8 text-xl font-extrabold border-b px-16 text-center flex justify-center items-center"
      >
        <h1>ADD CONTACT</h1>
      </div>
      <form ref="form" @submit.prevent="addContact">
        <!-- form inputs -->
        <div
          class="grid grid-cols-1 gap-3 sm:grid sm:grid-cols-2 sm:gap-10 w-full py-12 px-10"
        >
          <!-- left -->
          <div class="grid gap-3 sm:grid sm:gap-3">
            <!-- first name -->
            <div class="grid grid-cols-1">
              <label>First name</label>
              <input
                type="text"
                v-model.trim="contact.firstName"
                placeholder="Enter Your First Name"
                required
              />
            </div>
            <!-- email -->
            <div class="grid grid-cols-1">
              <label>Email Address</label>
              <input
                type="text"
                v-model.trim="contact.email"
                placeholder="Input Your Email"
                required
              />
            </div>
          </div>
          <!-- right -->
          <div class="grid gap-3 sm:grid sm:gap-3">
            <!-- last name -->
            <div class="grid grid-cols-1">
              <label>Last name</label>
              <input
                type="text"
                v-model.trim="contact.lastName"
                placeholder="Enter Your Last Name"
                required
              />
            </div>
            <!-- phone -->
            <div class="grid grid-cols-1">
              <label>Phone number</label>
              <input
                type="number"
                v-model.number.trim="contact.phoneNumber"
                placeholder="Input Your Phone Numb"
                required
              />
            </div>
          </div>
        </div>
        <!-- button -->
        <div
          class="w-full flex justify-end gap-7 py-12 sm:w-full px-10 border-t items-center"
        >
        <!-- cancel add contact -->
          <ButtonT
            :buttonName="buttons.cancel.buttonName"
            :type="buttons.cancel.type"
            :class="buttons.cancel.class"
            @click="cancelForm"
          />

          <!-- add contact -->
            <ButtonT
              :buttonName="buttons.submit.buttonName"
              :type="buttons.submit.type"
              :class="buttons.submit.class"

            />

        </div>
      </form>
    </div>
  </div>
</template>
<style scoped>
.popup {
  background-color: rgba(0, 0, 0, 0.4);
}
input {
  height: 50px;
  border-radius: 10px;
  outline: none;
  border: 1px solid #eeecec;
  background-color: #eeecec;
  padding: 0 10px;
}
/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
label {
  font-size: larger;
  font-weight: 400;
}
</style>
