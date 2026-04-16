const campoVisibilidadeDasMarcacoes = document.querySelector('#visibilidade-das-marcacoes');

if (campoVisibilidadeDasMarcacoes) {
	const atualizarVisibilidadeDasMarcacoes = () => {
		document.body.classList.toggle(
			campoVisibilidadeDasMarcacoes.value,
			campoVisibilidadeDasMarcacoes.checked
		);
	};

	campoVisibilidadeDasMarcacoes.addEventListener('input', atualizarVisibilidadeDasMarcacoes);
	atualizarVisibilidadeDasMarcacoes();
}

const marcacoesDaFoto = document.querySelectorAll('.marcacao');

const campoX = document.querySelector('#x-da-marcacao');
const campoY = document.querySelector('#y-da-marcacao');
const campoLargura = document.querySelector('#largura-da-marcacao');
const campoAltura = document.querySelector('#altura-da-marcacao');
const campoTitulo = document.querySelector('#titulo-da-marcacao');
const campoConteudo = document.querySelector('#conteudo-da-marcacao');
const campoCor = document.querySelector('#cor-da-marcacao');
const camposFormato = document.querySelectorAll('input[name="formato-da-marcacao"]');

const atualizaControles = (marcacaoEl) => {
	if (!marcacaoEl) {
		return;
	}

	if (campoX) {
		campoX.value = parseInt(marcacaoEl.style.left, 10);
	}

	if (campoY) {
		campoY.value = parseInt(marcacaoEl.style.top, 10);
	}

	if (campoLargura) {
		campoLargura.value = parseInt(marcacaoEl.style.width, 10);
	}

	if (campoAltura) {
		campoAltura.value = parseInt(marcacaoEl.style.height, 10);
	}

	if (campoTitulo) {
		campoTitulo.value = marcacaoEl.dataset.titulo;
	}

	if (campoConteudo) {
		campoConteudo.value = marcacaoEl.dataset.conteudo;
	}

	if (campoCor) {
		campoCor.value = marcacaoEl.dataset.cor;
	}

	const formato = marcacaoEl.classList.contains('formato-oval')
		? 'formato-oval'
		: 'formato-retangular';
	const campoFormato = document.querySelector(`input[name="formato-da-marcacao"][value="${formato}"]`);

	if (campoFormato) {
		campoFormato.checked = true;
	}
};

const atualizaMarcacao = (marcacaoEl) => {
	if (!marcacaoEl) {
		return;
	}

	if (campoX) {
		marcacaoEl.style.left = `${campoX.value}px`;
	}

	if (campoY) {
		marcacaoEl.style.top = `${campoY.value}px`;
	}

	if (campoLargura) {
		marcacaoEl.style.width = `${campoLargura.value}px`;
	}

	if (campoAltura) {
		marcacaoEl.style.height = `${campoAltura.value}px`;
	}

	if (campoTitulo) {
		marcacaoEl.dataset.titulo = campoTitulo.value;
	}

	if (campoConteudo) {
		marcacaoEl.dataset.conteudo = campoConteudo.value;
	}

	if (campoCor) {
		marcacaoEl.dataset.cor = campoCor.value;
	}

	const campoFormatoSelecionado = document.querySelector('input[name="formato-da-marcacao"]:checked');

	marcacaoEl.classList.remove('formato-oval', 'formato-retangular');
	if (campoFormatoSelecionado) {
		marcacaoEl.classList.add(campoFormatoSelecionado.value);
	}
};

const atualizaMarcacaoSelecionada = () => {
	atualizaMarcacao(document.querySelector('.marcacao.selecionada'));
};

const controlesDaMarcacao = [
	campoX,
	campoY,
	campoLargura,
	campoAltura,
	campoTitulo,
	campoConteudo,
	campoCor,
	...camposFormato
].filter(Boolean);

controlesDaMarcacao.forEach((controle) => {
	controle.addEventListener('input', atualizaMarcacaoSelecionada);
});

if (marcacoesDaFoto.length > 0) {
	marcacoesDaFoto.forEach((marcacao) => {
		marcacao.addEventListener('click', (e) => {
			const marcacaoAtual = document.querySelector('.marcacao.selecionada');

			if (marcacaoAtual) {
				marcacaoAtual.classList.remove('selecionada');
			}

			const marcacaoSelecionada = e.currentTarget;
			marcacaoSelecionada.classList.add('selecionada');
			atualizaControles(marcacaoSelecionada);
		});
	});
}

atualizaControles(document.querySelector('.marcacao.selecionada'));
