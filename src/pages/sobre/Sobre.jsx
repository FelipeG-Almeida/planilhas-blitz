import * as S from './styles';
import Button from '../../components/Button/Button';

export default function Sobre() {
	return (
		<main>
			<S.Cabecalho>
				<S.Logo src="/logo.png" alt="#" />
				<S.Titulo>MUITO ALÉM DE PLANILHAS!</S.Titulo>
				<S.Texto>
					Nós queremos ofertar oportunidades pro seu negócio crescer!
				</S.Texto>
			</S.Cabecalho>

			<S.Conteudo>
				<S.ConteudoContainer>
					<S.ConteudoTitulo $icon="./src/assets/icons/interrogacao.png">
						Quem somos
					</S.ConteudoTitulo>
					<S.ConteudoTexto>
						Nossa organização tem como objetivo fornecer aos nossos
						clientes, sejam proprietários de negócios ou alguém que
						queira dinamizar alguma área na vida pessoal, a
						possibilidade de obtenção de sistemas em planilhas de
						Excel, capazes de agregar valor aos nossos usuários e os
						processos de suas respectivas empresas, com qualidade e
						um preço acessível.
					</S.ConteudoTexto>
				</S.ConteudoContainer>
				<S.ConteudoContainer>
					<S.ConteudoTitulo $icon="./src/assets/icons/objetivo.png">
						Nossa Proposta
					</S.ConteudoTitulo>
					<S.ConteudoTexto>
						Diversas atividades de uma empresa necessitam de
						automação e agilidade, ficar no papel e caneta em um
						mundo tão digitalizado é fora de questão, por outro
						lado, construir ou obter um sistema do zero pode
						demandar bastante recurso e tempo. É ai que nós
						entramos, nosso objetivo é suprir as necessidades dos
						nossos clientes com planilhas de Excel, com um melhor
						custo benefício e qualidade.
					</S.ConteudoTexto>
				</S.ConteudoContainer>
				<Button
					text="Conheça nossos produtos!"
					color="--laranja"
					link="/planilhas"
				/>
			</S.Conteudo>
		</main>
	);
}
