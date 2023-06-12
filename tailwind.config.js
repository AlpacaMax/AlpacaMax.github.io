module.exports = {
  content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
  theme: {
    extend: {
			colors: {
				'bgcolor': '#14213D',
				'highlight': '#FCA311',
				'text': '#3d405b'
			},
			fontFamily: {
				sans: ['Inter', 'Nunito', 'sans-serif'],
				serif: ['Crimson Pro'],
			},
		},
  },
  plugins: [],
}

