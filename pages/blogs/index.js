import Link from 'next/link';
import Layout from '../../components/layout.js';

export default function Blogs() {
	return (
		<Layout>
			<div className="grow text-text">
				<div className="my-12">
					<span className="font-black">2022</span>
				</div>
				<div className="my-4">
					<span className="italic mr-4">05/27</span>
					<Link href="blogs/comprehensive_introductions_to_most_cs_courses_at_nyu_tandon">
						<a>Comprehensive Introductions to Most CS courses at NYU Tandon</a>
					</Link>
				</div>
			</div>
		</Layout>
	)
}
