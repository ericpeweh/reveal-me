// Components
import Navbar from "../components/Navbar";

// Styles
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
	return (
		<div className="relative">
			<Navbar />
			<Component {...pageProps} />
		</div>
	);
}

export default MyApp;
