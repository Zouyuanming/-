import Vue from 'vue'
import Router from 'vue-router'

// 路由数据
import routes from './router'

const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
}
Vue.use(Router);
const router = new Router({
    base: process.env.BASE_URL,
    routes
});

/**
 * 路由拦截
 * 权限验证
 */
router.beforeEach((to, from, next) => {
    document.title = to.meta.title;
    next()
})

// router.afterEach(() => {
// })

export default router
