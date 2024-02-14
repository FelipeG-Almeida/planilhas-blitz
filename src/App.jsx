import './App.css';
import Router from './routes/Router';
import Header from './components/Header/Header';
import { BrowserRouter } from 'react-router-dom';

function App() {
	return (
		<BrowserRouter>
			<Header />
			<Router />
		</BrowserRouter>
	);
}

export default App;
