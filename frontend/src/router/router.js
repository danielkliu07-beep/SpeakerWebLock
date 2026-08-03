    import { createWebHistory, createRouter } from 'vue-router';

    import ConfigurationView from '@/components/configuration/ConfigurationView.vue';
    import StartView from '@/components/home/StartView.vue'
    import LoginView from '@/components/login/LoginView.vue'
    import RegisterView from '@/components/register/RegisterView.vue'

    const routes = [
        { 
            path: '/configuration', 
            name: 'Configuration',
            component: ConfigurationView,
        },
        { 
            path: '/', 
            name: 'Start',
            component: StartView, 
        },
        {
            path: '/login',
            name: 'Login',
            component: LoginView
        },
        {
            path: '/register',
            name: 'Register',
            component: RegisterView
        }
    ]

    export const router = createRouter({
        history: createWebHistory(),
        routes,
    })