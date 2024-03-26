import * as S from './styles';
import Carrosel from '../../components/Carrosel/Carrosel';
import Button from '../../components/Button/Button';
import { planilhas } from '../../planilhas.js';

export default function Planilhas() {
	return (
		<main>
			<S.Cabecalho>
				<S.Titulo>PLANILHAS EMPRESARIAIS PRONTAS</S.Titulo>
				<S.Texto>
					Agregue facilidade e praticidade na sua vida, confira nossas
					planilhas e veja qual se encaixa melhor no seu
					negócio/projeto.
				</S.Texto>
			</S.Cabecalho>

			<Carrosel titulo="Novas Planilhas" planilhas={planilhas} />

			<S.Sugestao>
				<div>
					<S.SugestaoTitulo>
						Não encontrou oque precisa?
					</S.SugestaoTitulo>
					<S.SugestaoTexto>
						Entre em contato conosco para fazermos uma planilha
						personalizada!
					</S.SugestaoTexto>
				</div>
				<Button
					text="Entre em contato"
					color="--escuro"
					link="/contato"
				/>
			</S.Sugestao>
		</main>
	);
}
