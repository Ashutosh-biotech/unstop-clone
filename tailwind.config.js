/** @type {import('tailwindcss').Config} */
export default {
	content: [
		"./index.html",
		"./src/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			margin: {
				"1/4": "calc(0.25rem / 4)",
				"1/2": "calc(0.25rem / 2)",
			},
			zIndex: {
				"1": "1",
			},
			borderWidth: {
				"1": "1px",
			},
			fontFamily: {
				"roboto": ["Roboto", "sans-serif"],
			},
		},
	},
	plugins: [],
}