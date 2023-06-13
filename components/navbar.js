import Link from 'next/link';

import NavLink from './navlink';

export default function Navbar({tab, setTab}) {
	return (
		<div className="flex flex-row justify-center">
			<NavLink name="PROJECTS" tab={tab} setTab={setTab} />
			<NavLink name="PUBLICATIONS" tab={tab} setTab={setTab} />
			<NavLink name="ART" tab={tab} setTab={setTab} />
		</div>
	)
}
