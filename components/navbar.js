import Link from 'next/link';

export default function Navbar() {
	return (
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
	)
}
