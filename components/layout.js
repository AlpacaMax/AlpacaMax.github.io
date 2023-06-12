import Header from '../components/header.js';
import Navbar from '../components/navbar.js';
import Footer from '../components/footer.js';

export default function Layout({ children }) {
	return (
		<div className="h-screen container mx-auto px-64 flex flex-col">
			{/* <Navbar /> */}
			<Header />
			{ children }
			<Footer />
		</div>
	)
}
