import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import ContactsView from "../views/ContactsView.vue";
import AddContactView from "../views/AddContactView.vue";
import EditContactView from "../views/EditContactView.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
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
  ],
});
export default router;
