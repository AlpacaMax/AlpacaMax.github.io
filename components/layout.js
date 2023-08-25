import Header from '../components/header.js';
import Footer from '../components/footer.js';

export default function Layout({ children }) {
	return (
		<div className="h-screen container mx-auto xl:px-36">
			{/* <Navbar /> */}
			<Header />
			{ children }
			<Footer />
		</div>
	)
}
