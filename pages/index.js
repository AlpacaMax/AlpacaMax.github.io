import Head from 'next/head';
import Link from 'next/link';

import Layout from '../components/layout.js';

export default function Home() {
  return (
		<Layout>
			<div className="grow text-text flex flex-col justify-center">
				<p className="text-2xl font-light">
					Hello, I&apos;m
				</p>
				<p className="my-3 text-4xl font-bold">
					Tian(Maxwell) Yang
				</p>
				<p className="font-light text-xl">
					Student, Reader, Software Developer, Open Source Contributor, Dreamer 
				</p>
				<p className="text-xl mt-20">
					I’m a student majoring Computer Science at New York University Tandon School of Engineering. I’ve been a relentless programmer since I was 13. In my free time I read books, watch TV series and anime, and code. Occasionally I play chess and tetris and draw pixel art.
				</p>
				<p className="text-xl mt-4">
I mostly code in Python. Recently I’ve also been taking a deeper dive into C. Additionally, I code in Javascript, Lua, Bash and sometimes Go. In total I’ve used 15 programming languages already and I’ll try even more in the future!
				</p>

				<div className="mt-20">
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
		</Layout>
  )
}
