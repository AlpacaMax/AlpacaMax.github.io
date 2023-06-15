import { useState } from 'react';

import Image from 'next/image';

import Layout from '../components/layout.js';
import Navbar from '../components/navbar.js';
import Projects from './projects.js';

export default function Home() {
	let [tab, setTab] = useState("PROJECTS");
	let [tabContent, setTabContent] = useState(<Projects />);

	return (
		<Layout>
			<div className="flex flex-row py-12">
				<div className="basis-1/4">
					<Image
						src="/portrait.jpeg"
						width={250}
						height={250}
						alt="Portrait"
						className="shadow-[10px_10px_rgba(0,0,0,1)]"
					/>
				</div>
				<div className="basis-3/4 text-text px-16">
					<p className="font-light">
						Hello, I&apos;m
					</p>
					<p className="py-4 text-2xl font-bold">
						Tian Yang
					</p>
					<p className="font-light">
						I am an incoming Ph.D. student under the supervision of Andrew Chien at University of Chicago. Before that, I was an undergraduate student and research intern at New York University majoring in Computer Science. My research interests are in Cloud Computing, Operating Systems, Distributed Systems, and Computer Security.
					</p>
					<br />
					<p className="font-light">
						I’m also an amateur artist who dabbles in sketching, 3D art, and graphic design. You can find my artwork on Instagram and Artstation.
					</p>
				</div>
			</div>
			<Navbar
				tab={tab}
				setTab={setTab}
				setTabContent={setTabContent}
			/>
			{ tabContent }
			<div className="grow flex flex-col"></div>
		</Layout>
	)
}
