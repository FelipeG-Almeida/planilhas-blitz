import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as S from './styles';

export default function Contato() {
	return (
		<main>
			<S.Contato>
				<S.Cabecalho>
					<S.Titulo>FALE CONOSCO</S.Titulo>
					<S.Texto>
						Alguma pergunta ou sugestão? nos escreva uma mensagem!
					</S.Texto>
				</S.Cabecalho>
				<S.Container>
					<S.SubTitulo>Informações de Contato</S.SubTitulo>
					<S.Texto>
						Preencha o formulário e entraremos em contato o mais
						rápido possível. Ou se preferir entre em contato pelos
						nossos canais a baixo:
					</S.Texto>
					<S.IconDiv>
						<FontAwesomeIcon
							icon="fa-brands fa-whatsapp"
							size="2x"
						/>
						<S.Texto>
							Whatsapp -<br /> (91) 99811 - 0782
						</S.Texto>
					</S.IconDiv>
					<S.IconDiv>
						<FontAwesomeIcon
							icon="fa-solid fa-envelope"
							size="2x"
						/>
						<S.Texto>
							E-mail -<br /> planilhasblitz @gmail.com
						</S.Texto>
					</S.IconDiv>
				</S.Container>

				<S.FormContainer>
					<S.SubTitulo>Formulário</S.SubTitulo>
					<S.Formulario>
						<fieldset>
							<S.Label for="nome">Nome</S.Label>
							<S.Input
								id="nome"
								type="text"
								name="nome"
								required
								placeholder="Digite seu nome..."
							/>

							<S.Label for="Email">E-mail</S.Label>
							<S.Input
								id="Email"
								type="email"
								name="Email"
								required
								placeholder="seuemail@dominio.com"
							/>

							<S.Label for="assunto">Assunto</S.Label>
							<S.Select id="assunto">
								<option>Problema com o produto</option>
								<option>Dúvida sobre o recebimento</option>
								<option>Sugestão de Planilha</option>
								<option>Outro</option>
							</S.Select>

							<S.Label for="mensagem">Mensagem</S.Label>
							<S.Mensagem
								class="mensagem"
								id="mensagem"
								name="mensagem"
								required
								rows="6"
								placeholder="Digite sua mensagem"
							></S.Mensagem>
						</fieldset>

						<S.Enviar
							type="submit"
							name="enviar"
							value="Enviar Formulário"
						/>
					</S.Formulario>
				</S.FormContainer>
			</S.Contato>
		</main>
	);
}
