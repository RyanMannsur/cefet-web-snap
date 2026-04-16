const campoFiltroDaFoto = document.querySelector('#filtro-da-foto');
const imagemDaFotoAnotada = document.querySelector('.foto-anotada > img');

if (campoFiltroDaFoto && imagemDaFotoAnotada) {
	const atualizarFiltroDaFoto = () => {
		imagemDaFotoAnotada.style.filter = campoFiltroDaFoto.value;
	};

	campoFiltroDaFoto.addEventListener('input', atualizarFiltroDaFoto);
	atualizarFiltroDaFoto();
}
