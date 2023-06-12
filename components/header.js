import Link from 'next/link';

export default function Header() {
    return (
		<div className="flex flex-row">
			<div className="grow flex flex-row">
				<div className="bg-highlight my-6 py-3 px-6 shadow-[10px_10px_rgba(0,0,0,1)]">
					<Link href="/">
						<a className="text-xl text-black font-light">
                            TIAN YANG
						</a>
					</Link>
				</div>
			</div>
		</div>
	)
}