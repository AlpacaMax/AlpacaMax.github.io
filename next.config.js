/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		loader: 'imgix',
		path: 'https://alpacamax.github.io/',
	},
  reactStrictMode: true,
}

module.exports = nextConfig
