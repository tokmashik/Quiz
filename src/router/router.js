import Main from "@/pages/Main.vue";
import {createRouter, createWebHistory} from "vue-router";
import UserPage from "@/pages/UserPage";
import About from "@/pages/About";
import PostIdPage from "@/pages/PostIdPage";
import PostPageWithStore from "@/pages/PostPageWithStore";
import PostPageCompositionApi from "@/pages/PostPageCompositionApi";
import VConstructor from "@/components/VConstructor"
import Quizzes from "@/pages/Quizzes"

const routes = [
    {
        path: '/',
        component: Main
    },
    {
        path: '/posts',
        component: UserPage
    },
    {
        path: '/about',
        component: About
    },
    {
        path: '/posts/:id',
        component: PostIdPage
    },
    {
        path: '/store',
        component: PostPageWithStore
    },
    {
        path: '/composition',
        component: PostPageCompositionApi
    },
    {
        path: '/consructor',
        component: VConstructor
    },
    {
        path: '/quizzes',
        component: Quizzes
    },
]

const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL)
})

export default router;
