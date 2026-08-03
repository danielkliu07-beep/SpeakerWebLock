    import { createWebHistory, createRouter } from 'vue-router';

    import ConfigurationView from '@/components/configuration/ConfigurationView.vue';
    import LoginView from '@/components/login/LoginView.vue'

    const routes = [
        { path: '/', component: ConfigurationView},
        { path: '/login', component: LoginView },
    ]

    export const router = createRouter({
        history: createWebHistory(),
        routes,
    })