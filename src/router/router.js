import Layout from '../layout/index'

const frameIn = [{
        path: '/',
        component: Layout,
        redirect: '/Hazards',
        children: [{
                path: 'Hazards',
                name: 'Hazards',
                component: () => import('../views/Hazards'),
                meta: {
                    title: '致灾因子',
                    requiresAuth: true
                },
                children: [{
                        path: 'Fire',
                        name: 'Fire',
                        component: () => import('../views/Hazards/components/Fire'),
                        meta: {
                            title: '火灾',
                            requiresAuth: true
                        }
                    },
                    {
                        path: 'Weather',
                        name: 'Weather',
                        component: () => import('../views/Hazards/Weather/index'),
                        meta: {
                            title: '气象',
                            requiresAuth: true
                        },
                    },
                    {
                        path: 'Rain',
                        name: 'Rain',
                        component: () => import('../views/Hazards/Weather/components/Rain/wind'),
                        meta: {
                            title: '大风',
                            requiresAuth: true
                    }
                    },
                    {
                        path: 'Drought',
                        name: 'Drought',
                        component: () => import('../views/Hazards/Weather/components/Drought/index'),
                        meta: {
                            title: '干旱',
                            requiresAuth: true
                    }
                    },
                    {
                        path: 'Hail',
                        name: 'Hail',
                        component: () => import('../views/Hazards/Weather/components/Hail/index'),
                        meta: {
                            title: '冰雹',
                            requiresAuth: true
                    }
                    },
                    {
                        path: 'wind',
                        name: 'wind',
                        component: () => import('../views/Hazards/Weather/components/wind/index'),
                        meta: {
                            title: '暴雨',
                            requiresAuth: true
                    }
                    },
                    {
                        path: 'Snowstorm',
                        name: 'Snowstorm',
                        component: () => import('../views/Hazards/Weather/components/Snowstorm/index'),
                        meta: {
                            title: '暴雪',
                            requiresAuth: true
                    }
                    },
                    {
                        path: 'Temperature',
                        name: 'Temperature',
                        component: () => import('../views/Hazards/Weather/components/Temperature/index'),
                        meta: {
                            title: '低温',
                            requiresAuth: true
                    }
                    },
                    {
                        path: 'Thunder',
                        name: 'Thunder',
                        component: () => import('../views/Hazards/Weather/components/Thunder/index'),
                        meta: {
                            title: '雷电',
                            requiresAuth: true
                    }
                    },
                    {
                        path: 'Flood',
                        name: 'Flood',
                        component: () => import('../views/Hazards/components/Flood'),
                        meta: {
                            title: '洪涝',
                            requiresAuth: true
                        }
                    }
                ]
            },
            {
                path: 'Disaster',
                name: 'Disaster',
                component: () => import('../views/Disaster'),
                meta: {
                    title: '承灾体',
                    requiresAuth: true
                }
            },
            {
                path: 'History',
                name: 'History',
                component: () => import('../views/History'),
                meta: {
                    title: '历史灾害',
                    requiresAuth: true
                }
            },
            {
                path: 'Capacity',
                name: 'Capacity',
                component: () => import('../views/Capacity'),
                meta: {
                    title: '减灾能力',
                    requiresAuth: true
                }
            },
            {
                path: 'HidDangers',
                name: 'HidDangers',
                component: () => import('../views/HidDangers'),
                meta: {
                    title: '重点隐患',
                    requiresAuth: true
                }
            },
            {
                path: 'Natural',
                name: 'Natural',
                component: () => import('../views/Natural'),
                meta: {
                    title: '灾害事件',
                    requiresAuth: true
                },
                children: [{
                        path: 'management',
                        name: 'management',
                        component: () => import('../views/Natural/management/index'),
                        meta: {
                            title: '事件管理',
                            requiresAuth: true
                        }
                    },
                    {
                        path: 'route',
                        name: 'route',
                        component: () => import('../views/Natural/route/index'),
                        meta: {
                            title: '路径规划',
                            requiresAuth: true
                        }
                    }
                ]
            }
        ]
    },
    {
        path: '*',
        component: () =>
            import('../views/404.vue'),
    }
]

export default [...frameIn]