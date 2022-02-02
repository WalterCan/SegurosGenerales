document.addEventListener("DOMContentLoaded", function () {
	iniciarApp();
});

function iniciarApp() {
	crearGaleria();
}

function crearGaleria() {
	const galeria = document.querySelector(".galeria-imagenes");
	for (let i = 1; i <= 12; i++) {
		const imagen = document.createElement("picture");
		imagen.innerHTML = `
		<source srcset="/build/img/galeria/${i}.avif" type="image/avif" />
		<source srcset="/build/img/galeria/${i}.webp" type="image/webp" />
		<img width="200"height="300"src="/build/img/galeria/${i}.jpg"alt="imagen galeria"/>`;

		galeria.appendChild(imagen);
	}
}
