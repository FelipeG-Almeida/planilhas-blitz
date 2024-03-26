import * as S from './style.js';
import PlanilhaHeader from '../../components/PlanilhaHeader/PlanilhaHeader';
import Problema from '../../components/Problema/Problema.jsx';
import Solucao from '../../components/Solucao/Solucao.jsx';
import Beneficios from '../../components/Beneficios/Beneficios.jsx';
import Oferta from '../../components/Oferta/Oferta.jsx';
import Duvidas from '../../components/Duvidas/Duvidas.jsx';
import { planilhas } from '../../planilhas.js';
import { useParams } from 'react-router-dom';

export default function Planilha() {
	const param = useParams();
	const planilha = planilhas[param.indice - 1];

	return (
		<S.Main $color={planilha.color}>
			<PlanilhaHeader
				planilha={planilha.headline}
				color={planilha.color}
			/>
			<Problema planilha={planilha.problema} color={planilha.color} />
			<Solucao planilha={planilha.solucao} color={planilha.color} />
			<Beneficios
				planilha={planilha.beneficios}
				color={planilha.color}
				gif={planilha.gif}
			/>
			<Oferta thumb={planilha.thumb} preco={planilha.preco} />
			<Duvidas color={planilha.color} />
		</S.Main>
	);
}
