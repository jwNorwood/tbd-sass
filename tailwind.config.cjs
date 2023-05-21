const { fontFamily, screens } = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./src/**/*.{html,js,svelte,ts}',
		// 2. Append the path for the Skeleton NPM package and files:
		require('path').join(require.resolve(
			'@skeletonlabs/skeleton'),
			'../**/*.{html,js,svelte,ts}'
		)
	],
	darkMode: ['class', '[data-theme="dark"]'],
	theme: {
		// colors: {},
		screens: {
			xs: '475px',
			...screens
		},
		extend: {
			fontFamily: {
				sans: ['Inter', ...fontFamily.sans]
			}
		}
	},
	plugins: [
		require('@tailwindcss/forms'),
		...require('@skeletonlabs/skeleton/tailwind/skeleton.cjs')()
	]
};
