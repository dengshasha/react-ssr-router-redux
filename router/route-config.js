import asyncLoader from './async-component'
const routesList = [
    {
        path: '/',
        component: asyncLoader(() => import('../client/home.js'))
    },
    {
        path: ['list', '/hotelList'],
        component: asyncLoader(() => import('../client/hotelList.js')),
        exact: true
    },
    {
        path: '/hotelDetail/:hotelid',
        component: asyncLoader(() => import('../client/hotelDetail.js')),
        exact: true
    }
]

export default routesList