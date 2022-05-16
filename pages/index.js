import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
		<div className="container mx-auto">
			<div className="flex flex-row">
				<div className="grow flex flex-row">
					<div className="bg-highlight py-8 px-6 rounded-b-lg">
						<a href="#" className="text-xl text-bgcolor font-sans font-bold">
							AlpacaMax
						</a>
					</div>
				</div>
				<div className="grow flex flex-row justify-end font-sans font-extralight text-text">
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
		</div>
  )
}
