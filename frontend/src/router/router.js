    import { createWebHistory, createRouter } from 'vue-router';

    import ConfigurationView from '@/components/configuration/ConfigurationView.vue';
    import LoginView from '@/components/login/LoginView.vue'
    import RegisterView from '@/components/register/RegisterView.vue'
    import HomeView from '@/components/home/HomeView.vue'
    import StartView from '@/components/start/StartView.vue'

    const routes = [
        {
            path: '/',
            name: 'Start',
            component: StartView,
        },
        { 
            path: '/configuration', 
            name: 'Configuration',
            component: ConfigurationView,
        },
        {
            path: '/login',
            name: 'Login',
            component: LoginView,
        },
        {
            path: '/register',
            name: 'Register',
            component: RegisterView,
        },
        {
            path: '/home',
            name: 'HomePage',
            component: HomeView,
        }
    ]

    export const router = createRouter({
        history: createWebHistory(),
        routes,
    })