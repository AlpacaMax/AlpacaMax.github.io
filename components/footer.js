export default function Footer() {
	return (
		<div className="flex flex-col text-text">
			<footer className="flex flex-row justify-center mb-6">
				<span className="font-thin text-xs">
					© Tian Yang / { (new Date()).getFullYear() }
				</span>
			</footer>
		</div>
	);
}
