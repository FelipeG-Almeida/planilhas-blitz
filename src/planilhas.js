export const planilhas = [
	{
		id: 1,
		nome: 'Planilha de Gestão de Gado',
		preco: 300,
		thumb: '/src/assets/thumbs/gestao_gado_corte.png',
		path: '/planilhas/1',
		color: ['--vermelho', '--vermelho-escuro'],
		gif: '/src/assets/gifs/gestao-gado.gif',
		headline: {
			titulo: 'Controle e Gestão Eficientes para Pecuaristas',
			subtitulo:
				'Administre as <span>operações</span> do seu gado e suas fazendas com <span>facilidade.</span>',
			keywords: 'Gestão, Pecuária, Gado, Produtividade, Controle',
			preview: '/gestaoGado/headline.svg',
			background: '/gestaoGado/background.jpg',
		},
		problema: {
			titulo: '"A falta de controle e gestão é um dos maiores problemas do pecuarista brasileiro."',
			descricao:
				'<span>O que você não mede, você não controla.</span> Para garantir o bom funcionamento do seu negócio, é fundamental acompanhar de perto os <span>números da fazenda.</span> Taxa de mortalidade, peso máximo permitido por pasto, ganho de peso dos animais, entre muitas outras informações, que garantem ao pecuarista a <span>real situação da produção,</span> e garantem tomadas de decisões mais assertivas no negócio.',
		},
		solucao: {
			textoUm:
				'O controle eficiente do rebanho se faz <span>indispensável</span> para uma fazenda que quer se manter <span>competitiva</span>. Acompanhar essas informações traz ainda os seguintes <span>benefícios:</span>',
			itens: [
				{
					texto: 'Redução de custos',
					icon: '/gestaoGado/dinheiro.png',
				},
				{
					texto: 'Identificação individual dos animais',
					icon: '/gestaoGado/toro.png',
				},
				{
					texto: 'Avaliar o desempenho do rebanho',
					icon: '/gestaoGado/desempenho.png',
				},
				{
					texto: 'Aumento do número de vendas e oportunidades',
					icon: '/gestaoGado/apertoDeMao.png',
				},
				{
					texto: 'Padrão de controle de qualidade',
					icon: '/gestaoGado/check.png',
				},
			],
			titulo: 'Como posso obter essas informações?',
			textoDois:
				'Você provavelmente imaginou um sistema de informação bastante complexo e muito <span>custoso.</span> No entanto, você pode obter todos esses dados com nossa <span>planilha específica</span> para gestão de gado.',
		},
		beneficios: [
			{
				titulo: 'Planilha de Gestão de Gado',
				texto: 'Tenha todos os <span>registros dos animais</span> em um só lugar, <span>compra</span> e <span>venda</span>, <span>lotação de pastos</span>, <span>pesagem e acompanhamento de ganho</span>, além de relatórios que trazem clareza na tomada de decisão.',
				imagem: '/gestaoGado/inicio.png',
			},
			{
				titulo: 'Cadastro de Fazendas e Animais',
				texto: 'Dentre as funções disponíveis, você pode <span>registrar suas fazendas e seus respectivos pastos</span>, com informações como lotação em unidades animal e hectares para posterior cálculo de peso máximo permitido por pasto. Além da <span>entrada de animais</span> e todas as informações pertinentes, como idade, peso, categoria, etc.',
				imagem: '/gestaoGado/cadastro.png',
			},
			{
				titulo: 'Acompanhe a movimentação do gado',
				texto: 'Verifique a <span>quantidade de animais</span> por pasto e fazendas, acesse dados como <span>peso máximo permitido</span> no pasto, <span>peso médio dos animais</span> em determinado pasto, média de idade, etc.',
				imagem: '/gestaoGado/lotacao.png',
			},
			{
				titulo: 'Gerencie a saída de animais',
				texto: 'Acompanhe a <span>venda dos animais</span>, através da seção de saída é possível comparar o <span>peso de entrada e de saída</span>, o <span>resultado obtido</span> e o <span>tempo de permanência</span> do animal nas suas fazendas.',
				imagem: '/gestaoGado/saida.png',
			},
			{
				titulo: 'Observe de Perto o ganho de peso',
				texto: 'Na aba de pesagens é possível verificar o <span>histórico do ganho do peso</span> individual de cada animal, seja <span>ganho por mês</span> ou <span>dia</span>, além dos ganhos em porcentagem.',
				imagem: '/gestaoGado/pesagem.png',
			},
			{
				titulo: 'Relatórios',
				texto: 'A planilha conta com <span>2 dashboards</span> para que você pecuarista <span>visualize de forma clara</span> o andamento do negócio e a disposição das fazendas e pastos.',
				imagem: '/gestaoGado/relatorio.png',
			},
		],
	},
	{
		nome: 'Planilha de Gestão de Imóveis',
		preco: 80,
		thumb: '/src/assets/thumbs/gestao_imoveis.png',
		path: '/planilhas/2',
	},
	{
		nome: 'Planilha de Controle de Gastos',
		preco: 40,
		thumb: '/src/assets/thumbs/controle_gastos.png',
		path: '/planilhas/3',
	},
];
