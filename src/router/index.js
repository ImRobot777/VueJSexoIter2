import { createRouter, createWebHistory } from 'vue-router'
import App from "@/App.vue";
import CitiesList from "@/views/CitiesList.vue";
import City from "@/components/City.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {path: '/villes', component: CitiesList, name: 'cities'},
    {path: '/ville', component: City, name: 'city'},
  ],
})

export default router
