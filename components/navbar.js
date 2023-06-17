import Link from 'next/link';

import NavLink from './navlink';
import Projects from '../pages/projects';
import Publications from '../pages/publications';

export default function Navbar({tab, setTab, setTabContent}) {
	return (
		<div className="flex flex-row justify-center">
			<NavLink
				name="PROJECTS"
				tab={tab}
				setTab={setTab}
				setTabContent={() => setTabContent(<Projects />)}
			/>
			<NavLink
				name="PUBLICATIONS"
				tab={tab}
				setTab={setTab}
				setTabContent={() => setTabContent(<Publications />)}
			/>
		</div>
	)
}
