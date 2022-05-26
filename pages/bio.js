import Layout from '../components/layout.js';

export default function Bio() {
	return (
		<Layout>
			<div className="grow flex flex-col text-text justify-center">
				<div className="grid grid-flow-row grid-cols-3 auto-rows-max gap-6 justify-items-stretch">
					<div className="justify-self-end font-bold">
						2022/05 ~ 2022/08
					</div>
					<div className="col-span-2">
						Summer SWE Internship at <span className="font-bold">Meta Inc.</span>, Menlo Park, CA, USA
					</div>
					<div className="justify-self-end font-bold">
						2022/3 ~ Present
					</div>
					<div className="col-span-2">
						Research Assistant under the supervision of Prof. Anirudh Sivaraman at <span className="font-bold">NYU</span>, Manhattan, NY, USA
					</div>
					<div className="justify-self-end font-bold">
						2021/9 ~ 2021/12
					</div>
					<div className="col-span-2">
						Teaching Assistant in <span className="italic">Introduction to Operating Systems</span> at <span className="font-bold">NYU Tandon</span>, Brooklyn, NY, USA
					</div>
					<div className="justify-self-end font-bold">
						2021/06 ~ 2021/08
					</div>
					<div className="col-span-2">
						SWE Internship at <span className="font-bold">Bombardier NUG Signalling Solution Ctd.</span>, Changzhou, Jiangsu, China
					</div>
					<div className="justify-self-end font-bold">
						2019/09 ~ 2022/12
					</div>
					<div className="col-span-2">
						Pursuing Bachelor of Science in Computer Science Degree at <span className="font-bold">NYU Tandon</span>, Brooklyn, NY, USA
					</div>
					<div className="justify-self-end font-bold">
						2000/11
					</div>
					<div className="col-span-2">
						Born in Changzhou, Jiangsu, China
					</div>
				</div>
			</div>
		</Layout>
	)
}
