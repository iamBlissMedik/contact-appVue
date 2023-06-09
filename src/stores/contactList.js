import { computed, ref } from "vue";
import { defineStore } from "pinia";
import { useFirstLetter } from "../composables/useFirstLetter.js";
const { capitalizeFirstLetter } = useFirstLetter();
export const useContactStore = defineStore("contact", () => {
  const contacts = ref([
    {
      firstName: "ellams",
      lastName: "Bliss",
      email: "ellamsbliss@gmail.com",
      phoneNumber: "08163985830",
      checked: false,
    },
  ]);
  const contactResultIndex = ref(0);
  const fullName = computed(() =>
    contacts.value
      .map((e) => {
        let firstNameFormatted = capitalizeFirstLetter(e.firstName);
        let lastNameFormatted = capitalizeFirstLetter(e.lastName);
        let emailFormatted = e.email.toLowerCase();
        return {
          names: `${firstNameFormatted} ${lastNameFormatted}`,
          phoneNumber: e.phoneNumber,
          email: emailFormatted,
          checked: e.checked,
        };
      })
      .filter(
        (e) =>
          e.names.toLowerCase().includes(search.value) ||
          e.email.toLowerCase().includes(search.value) ||
          e.phoneNumber.toLowerCase().includes(search.value)
      )
      .sort((a, b) => {
        let nameA = a.names.toLowerCase();
        let nameB = b.names.toLowerCase();
        if (nameA < nameB) {
          return -1;
        }
        if (nameA > nameB) {
          return 1;
        }
      })
  );
  // search bar
  const search = ref("");
  // delete contact
  const deleteContact = (index) => {
    contacts.value = contacts.value.filter((e, i) => i !== index);
  };
  // delete all
  const deleteAll = () => contacts.value.splice(0, contacts.value.length);
  // checkboss
  const checkbox = ref(false);
  // checkbox all
  const checkAll = ref(false);
  // add contact
  const addContact = (contact) => contacts.value.push(contact);
  // edit contact
  const editContact = (contact) =>
    contacts.value.splice(contactResultIndex.value, 1, contact);
  // contact index
  const contactIndex = (i) => (contactResultIndex.value = i);
  // data box
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
    editContact,
    fullName,
    side,
    open,
    close,
    dataBox,
    contactResult,
    contactResultIndex,
    contactIndex,
    checkAll,
    deleteContact,
    search,
    deleteAll,
  };
});
