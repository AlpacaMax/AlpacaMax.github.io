import Layout from '../components/layout.js';

export default function Projects() {
	return (
		<Layout>
			<div className="grow flex flex-col text-text justify-center">
				<div className="grid grid-flow-row grid-cols-3 auto-rows-max gap-6 justify-items-stretch">
					<div className="justify-self-end font-bold">
						Debate It
					</div>
					<div className="col-span-2">
						<span>A 1 vs 1 open debate platform implemented in Python + FastAPI + PostgreSQL</span>
					</div>
					<div className="justify-self-end font-bold">
						Mayat
					</div>
					<div className="col-span-2">
						An AST-based source code plagiarism detection system
					</div>
					<div className="justify-self-end font-bold">
						Anubis
					</div>
					<div className="col-span-2">
						A Distributed LMS for automating Computer Science courses from NYU
					</div>
					<div className="justify-self-end font-bold">
						Sheep Herding Simulator
					</div>
					<div className="col-span-2">
						A 2021 GiGA Game Jam entry implemented in Lua + Love2d
					</div>
					<div className="justify-self-end font-bold">
						Plane Ticket Booking System
					</div>
					<div className="col-span-2">
						A plane ticket booking system implemented in Python + Flask + SQLalchemy
					</div>
					<div className="justify-self-end font-bold">
						XAM
					</div>
					<div className="col-span-2">
						A WeeklyGameJam entry implemented in Unity3D
					</div>
					<div className="justify-self-end font-bold">
						CHIP8 Emulator
					</div>
					<div className="col-span-2">
						A Chip-8 Emulator implemented in Python
					</div>
				</div>
			</div>
		</Layout>
	)
}
