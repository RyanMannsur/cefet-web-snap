const balaozinho = document.querySelector('#balaozinho');
const marcacoes = document.querySelectorAll('.marcacao');

if (balaozinho) {
	marcacoes.forEach((marcacao) => {
		marcacao.addEventListener('mouseenter', (e) => {
			const alvo = e.currentTarget;

			balaozinho.innerHTML = `
				<h2>${alvo.dataset.titulo}</h2>
				<p>${alvo.dataset.conteudo}</p>
			`;
			balaozinho.style.color = alvo.dataset.cor;
		});

		marcacao.addEventListener('mouseleave', () => {
			balaozinho.replaceChildren();
		});

		marcacao.addEventListener('mousemove', (e) => {
			balaozinho.style.left = `${e.pageX}px`;
			balaozinho.style.top = `${e.pageY}px`;
		});
	});
}
