import { router } from '@/router/router'


function reversePage() {
    router.go(-1)
}

function goToStart() {
    router.push({name: 'Start'})
}

function goToHomePage() {
    router.push({name: 'HomePage'})
}

export { reversePage, goToStart, goToHomePage }