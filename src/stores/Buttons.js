import { defineStore } from "pinia";
import { ref } from "vue";
export const useButtonsStore = defineStore("buttons", () => {
const buttons = ref({
  submit: {
    type: "submit",
    buttonName: "add contact",
    class: "bg-blue-700 hover:bg-green-600 ",
  },
  cancel: {
    type: "reset",
    buttonName: "cancel",
    class: "bg-gray-400 w-fit hover:bg-red-700",
  },
  edit: {
    type: "submit",
    buttonName: "save",
    class: "bg-blue-700 hover:bg-green-600 ",
  },
});
    return {
        buttons
    }
})