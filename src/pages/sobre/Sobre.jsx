import * as S from './styles';

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

			<section class="sobre__conteudo">
				<div class="sobre__conteudo--container">
					<h2 class="sobre__conteudo--titulo titulo--1">
						Quem somos
					</h2>
					<p class="sobre__conteudo--texto">
						Nossa organização tem como objetivo fornecer aos nossos
						clientes, sejam proprietários de negócios ou alguém que
						queira dinamizar alguma área na vida pessoal, a
						possibilidade de obtenção de sistemas em planilhas de
						Excel, capazes de agregar valor aos nossos usuários e os
						processos de suas respectivas empresas, com qualidade e
						um preço acessível.
					</p>
				</div>
				<div class="sobre__conteudo--container">
					<h2 class="sobre__conteudo--titulo titulo--2">
						Nossa Proposta
					</h2>
					<p class="sobre__conteudo--texto">
						Diversas atividades de uma empresa necessitam de
						automação e agilidade, ficar no papel e caneta em um
						mundo tão digitalizado é fora de questão, por outro
						lado, construir ou obter um sistema do zero pode
						demandar bastante recurso e tempo. É ai que nós
						entramos, nosso objetivo é suprir as necessidades dos
						nossos clientes com planilhas de Excel, com um melhor
						custo benefício e qualidade.
					</p>
				</div>
				<a class="botao" href="planilhas.html">
					Conheça nossos produtos!
				</a>
			</section>
		</main>
	);
}
