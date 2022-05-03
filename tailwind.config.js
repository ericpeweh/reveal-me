module.exports = {
	content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				primary: "#FD4F5C",
				secondary: "#1B2F36",
				textPrimary: "#212121",
				textSecondary: "#979797",
				gray: "#DFDFDF",
				white: "#f3f3f3"
			},
			fontFamily: {
				anton: ["Anton", "sans-serif"],
				poppins: ["Poppins", "serif"]
			}
		}
	},
	plugins: []
};
