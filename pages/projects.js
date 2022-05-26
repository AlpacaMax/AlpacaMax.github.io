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
						1 vs 1 open debate platform implemented in Python + FastAPI + PostgreSQL
					</div>
					<div className="justify-self-end font-bold">
						<a
							href="https://github.com/AnubisLMS/Mayat"
							target="_blank"
							rel="noopener noreferrer"
						>
							Mayat
						</a>
					</div>
					<div className="col-span-2">
						AST-based source code plagiarism detection system
					</div>
					<div className="justify-self-end font-bold">
						<a
							href="https://github.com/AnubisLMS/Anubis"
							target="_blank"
							rel="noopener noreferrer"
						>
							Anubis
						</a>
					</div>
					<div className="col-span-2">
						Distributed LMS for automating Computer Science courses from NYU
					</div>
					<div className="justify-self-end font-bold">
						<a
							href="https://github.com/AlpacaMax/Sheep_Herding_Simulator"
							target="_blank"
							rel="noopener noreferrer"
						>
							Sheep Herding Simulator
						</a>
					</div>
					<div className="col-span-2">
						2021 GiGA Game Jam entry implemented in Lua + Love2d
					</div>
					<div className="justify-self-end font-bold">
						<a
							href="https://github.com/AlpacaMax/Plane_Ticket_Booking_System"
							target="_blank"
							rel="noopener noreferrer"
						>
							Plane Ticket Booking System
						</a>
					</div>
					<div className="col-span-2">
						plane ticket booking system implemented in Python + Flask + SQLalchemy
					</div>
					<div className="justify-self-end font-bold">
						<a
							href="https://alpacamax.itch.io/xam"
							target="_blank"
							rel="noopener noreferrer"
						>
							XAM
						</a>
					</div>
					<div className="col-span-2">
						WeeklyGameJam entry implemented in Unity3D
					</div>
					<div className="justify-self-end font-bold">
						<a
							href="https://github.com/AlpacaMax/Python-CHIP8-Emulator"
							target="_blank"
							rel="noopener noreferrer"
						>
							CHIP8 Emulator
						</a>
					</div>
					<div className="col-span-2">
						Chip-8 Emulator implemented in Python
					</div>
					<div className="justify-self-end font-bold">
						High School Website
					</div>
					<div className="col-span-2">
						Website for the International Department of Changhzhou No.1 High School
					</div>
				</div>
			</div>
		</Layout>
	)
}
