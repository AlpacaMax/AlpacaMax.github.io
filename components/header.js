import Link from 'next/link';
import Head from 'next/head';
import { FaGithub, FaTwitter, FaInstagram, FaLinkedin, FaArtstation } from 'react-icons/fa';

export default function Header() {
    return (
		<div>
			<Head>
				<title>Tian Yang</title>
			</Head>
			<div className="flex flex-col md:flex-row">
				<div className="flex">
					<div className="mx-auto bg-highlight mt-6 md:my-6 py-3 px-6 shadow-[10px_10px_rgba(0,0,0,1)]">
						<Link href="/" className="text-xl text-black font-light">
							TIAN YANG
						</Link>
					</div>
				</div>
				<footer className="grow flex flex-row mx-auto md:justify-end text-2xl text-text mt-9">
					<a href="https://github.com/AlpacaMax" className="mx-4" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
					<a href="https://twitter.com/AlpacaMax2000" className="mx-4" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
					<a href="https://www.instagram.com/alpacamax2000/" className="mx-4" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
					<a href="https://www.linkedin.com/in/tian-yang-a08018198/" className="mx-4" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
					<a href="https://www.artstation.com/alpacamax" className="mx-4" target="_blank" rel="noopener noreferrer"><FaArtstation /></a>
				</footer>
			</div>
		</div>
	)
}