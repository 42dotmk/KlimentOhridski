/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		colors: {
			background: '#FFF9E4',
			backgroundHero: '#FFCE48',
			button: '#422800',
		},
		fontFamily: {
			'roboto': ['Roboto', 'slab'],
		},
		textColor: {
			primary: '#422800',
			white: '#FFF9E4',
			mainYellow: '#FFCE48',
		},
		borderColor: {
			primary: '#422800',
			mainYellow: '#FFCE48',
		},
		extend: {
			maxWidth: {
				'custom': 'calc(100% - 112px)',
			},
		},
	},
	plugins: [],
}
