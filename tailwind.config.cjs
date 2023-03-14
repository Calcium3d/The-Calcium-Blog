/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		container: {
			center: true,
		  },
		extend: {
			fontFamily: {
				Coolvetica: ['Coolvetica', 'sans-serif'],
				Lato: ['Lato', 'sans-serif'],
				Poppins: ['Poppins', 'sans-serif'],
			},
		},
	},
	plugins: [
		require('@tailwindcss/typography'),
	],
}
