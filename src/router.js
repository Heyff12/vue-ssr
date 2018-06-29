import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

const bar = () =>
    import ("./components/bar")
const baz = () =>
    import ("./components/baz");
const foo = () =>
    import ("./components/foo");
const item = () =>
    import ("./components/Item");

export function createRouter() {
    return new Router({
        mode: 'history',
        routes: [
            //首页
            {
                path: "/",
                name: "bar",
                component: bar,
                redirect: {
                    name: "bar"
                }
            },
            {
                path: '/item/:id',
                component: item
            },
            {
                path: "/baz",
                name: "baz",
                meta: {
                    auth: false
                },
                component: baz
            },
            {
                path: "/bar",
                name: "bar",
                meta: {
                    auth: false
                },
                component: bar
            },
            {
                path: "/foo",
                name: "foo",
                meta: {
                    auth: false
                },
                component: foo
            },
        ]
    })
}