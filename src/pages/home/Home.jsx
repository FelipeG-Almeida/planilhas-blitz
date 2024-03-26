import * as S from './styles';
import Button from '../../components/Button/Button';
import Carrosel from '../../components/Carrosel/Carrosel';
import { planilhas } from '../../planilhas.js';

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

			<Carrosel titulo="Novidades" planilhas={planilhas} />

			<S.Diferenciais>
				<S.DiferenciaisTitulo>
					Agregue valor a seus processos com nossas planilhas!
					<br />
					Ganhe tempo e deixe que nossas planilhas façam o trabalho
					pesado!
				</S.DiferenciaisTitulo>
				<S.DiferenciaisItens>
					<S.DiferenciaisItem $icon="./src/assets/icons/cronometro.png">
						<S.DiferenciaisNome>TEMPO</S.DiferenciaisNome>
						<S.DiferenciaisTexto>
							Torne sua rotina mais ágil com planilhas que
							automatizam as tarefas repetitivas.
						</S.DiferenciaisTexto>
					</S.DiferenciaisItem>
					<S.DiferenciaisItem $icon="./src/assets/icons/alvo.png">
						<S.DiferenciaisNome>FOCO</S.DiferenciaisNome>
						<S.DiferenciaisTexto>
							Concentre-se no que realmente é importante, tome
							suas decisões a partir de relatórios de qualidade.
						</S.DiferenciaisTexto>
					</S.DiferenciaisItem>
					<S.DiferenciaisItem $icon="./src/assets/icons/polegar.png">
						<S.DiferenciaisNome>QUALIDADE</S.DiferenciaisNome>
						<S.DiferenciaisTexto>
							Oferecemos produtos de qualidade com preços
							acessíveis.
						</S.DiferenciaisTexto>
					</S.DiferenciaisItem>
				</S.DiferenciaisItens>
			</S.Diferenciais>
		</main>
	);
}
