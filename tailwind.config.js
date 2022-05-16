module.exports = {
  content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
  theme: {
    extend: {
			colors: {
				'bgcolor': '#f4f1de',
				'highlight': '#e07a5f',
				'text': '#3d405b'
			},
			fontFamily: {
				sans: ['Nunito', 'sans-serif'],
				serif: ['Crimson Pro'],
			},
		},
  },
  plugins: [],
}

