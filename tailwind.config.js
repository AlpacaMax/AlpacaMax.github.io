module.exports = {
  content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
  theme: {
    extend: {
			colors: {
				'bgcolor': '#1F6E8C',
				'highlight': '#FCA311',
				'text': '#E5E5E5'
			},
			fontFamily: {
				sans: ['Inter', 'Nunito', 'sans-serif'],
				serif: ['Crimson Pro'],
			},
		},
  },
  plugins: [],
}

