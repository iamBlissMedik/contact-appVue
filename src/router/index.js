import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import ContactsView from "../views/ContactsView.vue";
import MessagesView from "../views/MessagesView.vue";
import SettingsView from "../views/SettingsView.vue";
import AddContactView from "../views/AddContactView.vue";
import EditContactView from "../views/EditContactView.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/contacts",
      component: ContactsView,
      children: [
        {
          name: "contact",
          path: "contact",
          component: AddContactView,
        },
        {
          name: "editContact",
          path: "edit-contact",
          component: EditContactView,
        },
      ],
    },
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/messages",
      name: "messages",
      component: MessagesView,
    },
    {
      path: "/settings",
      name: "settings",
      component: SettingsView,
    },
  ],
});
export default router;
