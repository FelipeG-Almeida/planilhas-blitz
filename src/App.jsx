import './App.css';
import Router from './routes/Router';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { BrowserRouter } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';

function App() {
	return (
		<BrowserRouter>
			<Header />
			<Router />
			<Footer />
		</BrowserRouter>
	);
}

export default App;
library.add(fab, fas);
