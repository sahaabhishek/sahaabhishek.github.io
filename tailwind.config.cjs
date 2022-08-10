module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {},
	},
	darkMode: 'class',
	plugins: [
		require('@tailwindcss/line-clamp'),
		require('@tailwindcss/typography'),
	],
	variants: {
		extend: {
		  typography: ['dark']
		}
	  },
};
