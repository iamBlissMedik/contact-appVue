<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useContactStore } from "../stores/contactList";
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

const addContact = () => {
  store.addContact(contact.value);
  form.value.reset();
  router.push("/contacts");
  console.log(contact.value);
};

const cancelForm = () => router.push("/contacts");
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
        <div class="sm:w-full px-10 border-b items-center">
          <div
            class="float-right w-full flex justify-end gap-7 items-center py-12"
          >
            <button
              type="reset"
              class="px-5 py-4 cancel-btn hover:bg-red-700"
              @click="cancelForm"
            >
              Cancel
            </button>
            <button class="px-5 py-4 submit-btn hover:bg-green-600">
              Add Contact
            </button>
          </div>
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

.submit-btn {
  background-color: blue;
  border-radius: 10px;
  color: white;
  box-shadow: -1px 21px 34px -14px rgba(0, 0, 255, 0.63);

  font-weight: bold;
  text-transform: uppercase;
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
