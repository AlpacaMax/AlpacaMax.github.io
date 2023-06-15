import Link from 'next/link';

import NavLink from './navlink';
import Projects from '../pages/projects';
import Publications from '../pages/publications';
import Art from '../pages/art';

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
			<NavLink
				name="ART"
				tab={tab}
				setTab={setTab}
				setTabContent={() => setTabContent(<Art />)}
			/>
		</div>
	)
}
