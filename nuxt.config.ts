// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	compatibilityDate: '2024-04-03',
	devtools: { enabled: false },
	modules: ['@nuxtjs/tailwindcss'],
	app: {
		pageTransition: { name: 'page', mode: 'out-in' },
		head: {
			charset: 'utf-8',
			viewport: 'width=device-width, initial-scale=1',
		}
	},
	experimental: {
		defaults: {
			nuxtLink: {
				activeClass: 'active',
			}
		}
	}
})
