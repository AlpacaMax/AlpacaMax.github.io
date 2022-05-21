import Head from 'next/head';
import Link from 'next/link';
import { FaGithub, FaTwitter } from 'react-icons/fa';

export default function Home() {
  return (
		<div>
			<div className="container mx-auto flex flex-col">
				<div className="flex flex-row">
					<div className="grow flex flex-row">
						<div className="bg-highlight py-8 px-6 rounded-b-lg">
							<Link href="/">
								<a className="text-xl text-bgcolor font-bold">
									AlpacaMax
								</a>
							</Link>
						</div>
					</div>
					<div className="grow flex flex-row justify-end font-extralight text-text">
						<div className="m-8">
							<a href="#">Projects</a>
						</div>
						<div className="m-8">
							<a href="#">Blogs</a>
						</div>
						<div className="m-8">
							<a href="#">Bio</a>
						</div>
					</div>
				</div>

				<div className="grow my-28 text-text">
					<p className="text-2xl font-light">
						Hello, I&apos;m
					</p>
					<p className="my-3 text-4xl font-bold">
						Tian(Maxwell) Yang
					</p>
					<p className="font-light text-xl">
						Student, Reader, Software Developer, Open Source Contributor, Dreamer 
					</p>
					<p className="text-xl mt-14">
						I’m a student majoring Computer Science at New York University Tandon School of Engineering. I’ve been a relentless programmer since I was 13. In my free time I read books, watch TV series and anime, and code. Occasionally I play chess and tetris and draw pixel art.
					</p>
					<p className="text-xl mt-4">
	I mostly code in Python. Recently I’ve also been taking a deeper dive into C. Additionally, I code in Javascript, Lua, Bash and sometimes Go. In total I’ve used 15 programming languages already and I’ll try even more in the future!
					</p>
				</div>

				<div>
					<a 
						className="bg-highlight text-bgcolor text-lg py-3 px-6 rounded-lg"
						href="https://docs.google.com/document/d/e/2PACX-1vRrAs7amMwkWyspFxdKKoX0BsiYwYxhU3AUe-OWMQMFW2t095QKBol3bOaN03ZEo3hnIPUMibWWvSp0/pub"
						target="_blank"
						rel="noopener noreferrer"
					>
						Read My CV
					</a>
				</div>
			</div>
			<footer className="absolute inset-x-0 bottom-0 flex flex-row justify-center text-2xl text-text">
				<a href="https://github.com/AlpacaMax" className="mx-4 my-6" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
				<a href="https://twitter.com/AlpacaMax2000" className="mx-4 my-6" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
			</footer>
		</div>
  )
}
