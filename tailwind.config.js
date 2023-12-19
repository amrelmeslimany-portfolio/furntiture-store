/** @type {import('tailwindcss').Config} */
export default {
	darkMode: "class",
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			screens: {
				xs: "486px",
				md9: "992px",
			},
			boxShadow: {
				top: "0px -5px 24px #00000012",
			},
			colors: {
				primary: "#688272",
				secondary: "#262626",
				secondaryText: "#717171",
			},
			fontFamily: { body: "Roboto" },
		},
	},
	plugins: [],
};
