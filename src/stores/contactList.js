import { computed, ref } from "vue";
import { defineStore } from "pinia";

export const useContactStore = defineStore("contact", () => {
  const contacts = ref([
    {
      firstName: "Oluseye",
      lastName: "Richard",
      email: "ellamiss@gmail.com",
      phoneNumber: "08654311111",
    },
    {
      firstName: "Ellams",
      lastName: "Bliss",
      email: "elllismail.com",
      phoneNumber: "111111111",
    },
    {
      firstName: "Akinro",
      lastName: "Destined",
      email: "ellil.com",
      phoneNumber: "0811111",
    },
  ]);
  const contactResultIndex = ref(0);

  const checkBox = ref("checkbox");
  const fullName = computed(() =>
    contacts.value.map((e) => {
      return {
        names: `${e.firstName} ${e.lastName}`,
        phoneNumber: e.phoneNumber,
        email: e.email,
      };
    })
  );

  const addContact = (contact) => contacts.push(contact);
  const contactIndex = (i) => (contactResultIndex.value = i);
  const contactResult = computed(() =>
    fullName.value.filter((e, i) => i === contactResultIndex.value)
  );
  const side = ref(true);
  const close = () => {
    side.value = false;
  };
  const open = () => {
    side.value = true;
  };

  return {
    contacts,
    addContact,
    fullName,
    side,
    open,
    close,
    checkBox,
    contactResult,
    contactIndex,
  };
});
