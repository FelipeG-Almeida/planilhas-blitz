import * as S from './styles';
import Button from '../../components/Button/Button';

export default function Home() {
	return (
		<main>
			<S.Chamada>
				<S.ChamadaTexto>
					<S.ChamadaTitulo>
						PLANILHAS DE EXCEL PRONTAS
					</S.ChamadaTitulo>
					<S.ChamadaDescricao>
						Praticidade e facilidade para a gestão do seu negócio,
						seja qual for...
					</S.ChamadaDescricao>
					<Button
						text="Conhecer as planilhas"
						color="--laranja"
						link="/planilhas"
					/>
				</S.ChamadaTexto>
			</S.Chamada>
		</main>
	);
}
