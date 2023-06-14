import Layout from '../components/layout.js';

export default function Projects() {
	return (
		<div className="my-16 grow flex flex-col text-text justify-center">
			<div className="grid grid-flow-row grid-cols-3 auto-rows-max gap-6 justify-items-stretch">
				<div className="justify-self-end font-bold">
					Debate It
				</div>
				<div className="col-span-2 font-light">
					1 vs 1 open debate platform implemented in Python + FastAPI + PostgreSQL
				</div>
				<div className="justify-self-end font-bold">
					<a
						href="https://github.com/AnubisLMS/Mayat"
						target="_blank"
						rel="noopener noreferrer"
						className="underline"
					>
						Mayat
					</a>
				</div>
				<div className="col-span-2 font-light">
					AST-based source code plagiarism detection system
				</div>
				<div className="justify-self-end font-bold">
					<a
						href="https://github.com/AnubisLMS/Anubis"
						target="_blank"
						rel="noopener noreferrer"
						className="underline"
					>
						Anubis
					</a>
				</div>
				<div className="col-span-2 font-light">
					Distributed LMS for automating Computer Science courses from NYU
				</div>
				<div className="justify-self-end font-bold">
					<a
						href="https://github.com/AlpacaMax/Sheep_Herding_Simulator"
						target="_blank"
						rel="noopener noreferrer"
						className="underline"
					>
						Sheep Herding Simulator
					</a>
				</div>
				<div className="col-span-2 font-light">
					2021 GiGA Game Jam entry implemented in Lua + Love2d
				</div>
				<div className="justify-self-end font-bold">
					<a
						href="https://github.com/AlpacaMax/Plane_Ticket_Booking_System"
						target="_blank"
						rel="noopener noreferrer"
						className="underline"
					>
						Plane Ticket Booking System
					</a>
				</div>
				<div className="col-span-2 font-light">
					plane ticket booking system implemented in Python + Flask + SQLalchemy
				</div>
				<div className="justify-self-end font-bold">
					<a
						href="https://alpacamax.itch.io/xam"
						target="_blank"
						rel="noopener noreferrer"
						className="underline"
					>
						XAM
					</a>
				</div>
				<div className="col-span-2 font-light">
					WeeklyGameJam entry implemented in Unity3D
				</div>
				<div className="justify-self-end font-bold">
					<a
						href="https://github.com/AlpacaMax/Python-CHIP8-Emulator"
						target="_blank"
						rel="noopener noreferrer"
						className="underline"
					>
						CHIP8 Emulator
					</a>
				</div>
				<div className="col-span-2 font-light">
					Chip-8 Emulator implemented in Python
				</div>
				<div className="justify-self-end font-bold">
					High School Website
				</div>
				<div className="col-span-2 font-light">
					Website for the International Department of Changzhou No.1 High School
				</div>
			</div>
		</div>
	);
}
