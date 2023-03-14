import { ref } from "vue";
import { defineStore } from "pinia";

export const useContactStore = defineStore("contact", () => {
  const contacts = ref([
    {
      firstName: "Oluseye",
      lastName: "Richard",
    },
    {
      firstName: "Ellams",
      lastName: "Bliss",
    },
    {
      firstName: "Akinro",
      lastName: "Destined",
    },
  ]);
  const addContact = (contact) => contacts.push(contact);
  const side = ref(true);
  const close = () => {
    side.value = false;
  };
  const open = () => {
    side.value = true;
  };

  return { contacts, addContact, side, open, close };
});
