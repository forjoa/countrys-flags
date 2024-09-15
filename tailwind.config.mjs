/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: 'class',
	theme: {
	  extend: {
		textColor: {
		  skin: {
			base: 'hsl(var(--color-text))',
		  },
		},
		backgroundColor: {
		  skin: {
			fill: 'hsl(var(--color-background))',
		  },
		},
	  },
	},
	plugins: [],
}
