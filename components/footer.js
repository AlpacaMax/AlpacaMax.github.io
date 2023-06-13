import { FaGithub, FaTwitter, FaInstagram, FaLinkedin, FaArtstation } from 'react-icons/fa';

export default function Footer() {
	return (
		<div className="flex flex-col text-text">
			<footer className="flex flex-row justify-center text-2xl text-text mt-6">
				<a href="https://github.com/AlpacaMax" className="mx-4" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
				<a href="https://twitter.com/AlpacaMax2000" className="mx-4" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
				<a href="https://www.instagram.com/alpacamax2000/" className="mx-4" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
				<a href="https://www.linkedin.com/in/tian-yang-a08018198/" className="mx-4" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
				<a href="https://www.artstation.com/alpacamax" className="mx-4" target="_blank" rel="noopener noreferrer"><FaArtstation /></a>
			</footer>
			<div className="flex flex-row justify-center my-4">
				<span className="font-thin text-xs">
					© Tian Yang / { (new Date()).getFullYear() }
				</span>
			</div>
		</div>
	)
}
