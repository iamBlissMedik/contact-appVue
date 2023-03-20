import { computed, ref } from "vue";
import { defineStore } from "pinia";

export const useContactStore = defineStore("contact", () => {
  const contacts = ref([
    {
      firstName: "Oluseye",
      lastName: "Richard",
      email: "ellamiss@gmail.com",
      phoneNumber: "08654311111",
      checked: false,
    },
    {
      firstName: "Ellams",
      lastName: "Bliss",
      email: "elllismail.com",
      phoneNumber: "111111111",
      checked: false,
    },
    {
      firstName: "Akinro",
      lastName: "Destined",
      email: "ellil.com",
      phoneNumber: "0811111",
      checked: false,
    },
  ]);
  const contactResultIndex = ref(0);

  const fullName = computed(() =>
    contacts.value.map((e) => {
      return {
        names: `${e.firstName} ${e.lastName}`,
        phoneNumber: e.phoneNumber,
        email: e.email,
        checked: e.checked,
      };
    })
  );

  // check just the contact
  const checkedContact = (i) => {
    contacts.value[i].checked = !contacts.value[i].checked;
  };

  // checkbox all
  const checkAll = ref(false);
  const addContact = (contact) => contacts.value.push(contact);
  const contactIndex = (i) => (contactResultIndex.value = i);
  const contactResult = computed(() =>
    fullName.value.filter((e, i) => i === contactResultIndex.value)
  );
  const side = ref(false);

  const close = () => {
    side.value = false;
  };
  const open = () => {
    side.value = true;
  };
  const dataBox = ref(false);

  return {
    contacts,
    addContact,
    fullName,
    side,
    open,
    close,
    dataBox,
    contactResult,
    contactIndex,
    checkAll,
    checkedContact,
  };
});
