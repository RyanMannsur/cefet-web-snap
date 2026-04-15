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
