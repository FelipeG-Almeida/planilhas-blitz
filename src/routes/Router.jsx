import { Route, Routes } from 'react-router-dom';
import Home from '../pages/home/Home';
import Sobre from '../pages/sobre/Sobre';
import Contato from '../pages/contato/Contato';
import Planilhas from '../pages/planilhas/Planilhas';
import Planilha from '../pages/planilha/Planilha';

export default function Router() {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/planilhas" element={<Planilhas />} />
			<Route path="/sobre" element={<Sobre />} />
			<Route path="/contato" element={<Contato />} />
			<Route path="/planilhas/:indice" element={<Planilha />} />
		</Routes>
	);
}
