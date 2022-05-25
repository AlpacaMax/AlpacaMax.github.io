import { FaGithub, FaTwitter } from 'react-icons/fa';

export default function Footer() {
	return (
		<footer className="flex flex-row justify-center text-2xl text-text">
			<a href="https://github.com/AlpacaMax" className="mx-4 my-6" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
			<a href="https://twitter.com/AlpacaMax2000" className="mx-4 my-6" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
		</footer>
	)
}
