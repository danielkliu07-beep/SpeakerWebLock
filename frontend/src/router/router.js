    import { createWebHistory, createRouter } from 'vue-router';

    import ConfigurationView from '@/components/configuration/ConfigurationView.vue';
    import StartView from '@/components/home/startView.vue'

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
    ]

    export const router = createRouter({
        history: createWebHistory(),
        routes,
    })