import {createWeHistory, createRouter} from "vue-router"
import ContactBook from "@/views/ContactBook.vue"

const routes =[
   {    path: "/",
        name: "contactbook",
        component: ContactBook,
    },
];

const router = createRouter({
    history: createWeHistory(import.meta.env.BASE_URL),
    routes,
});

export default router;