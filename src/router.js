import Vue from "vue";
import VueRouter from "./plugins/vue-router";

Vue.use(VueRouter)

const router = new VueRouter({
	mode: 'history',
	routes: [{
			path: '/',
			name: 'home',
			component: () => import('./views/HomeView.vue')
		},
		{
			path: '/about',
			name: 'about',
			component: () => import('./views/AboutView.vue')
		},
		{
			path: '/vue-mini',
			name: 'vueMini',
			component: () => import('./views/VueMiniView.vue')
		}
	]
})

export default router