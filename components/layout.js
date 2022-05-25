import Navbar from '../components/navbar.js';
import Footer from '../components/footer.js';

export default function Layout({ children }) {
	return (
		<div className="h-screen container mx-auto flex flex-col">
			<Navbar />
			{ children }
			<Footer />
		</div>
	)
}
