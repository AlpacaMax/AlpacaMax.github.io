import Link from 'next/link';
import Head from 'next/head';

export default function Header() {
    return (
		<div>
			<Head>
				<title>Tian Yang</title>
			</Head>
			<div className="flex flex-row">
				<div className="flex flex-row">
					<div className="bg-highlight my-6 py-3 px-6 shadow-[10px_10px_rgba(0,0,0,1)]">
						<Link href="/" className="text-xl text-black font-light">
							TIAN YANG
						</Link>
					</div>
				</div>
			</div>
		</div>
	)
}