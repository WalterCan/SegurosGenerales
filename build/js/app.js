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

		imagen.onclick = function () {
			mostrarImagen(i);
		};

		galeria.appendChild(imagen);
	}
}
// Mostrar imagen de galeria al hacer clic

function mostrarImagen(id) {
	const imagen = document.createElement("picture");
	imagen.innerHTML = `
		<source srcset="/build/img/galeria/${id}.avif" type="image/avif" />
		<source srcset="/build/img/galeria/${id}.webp" type="image/webp" />
		<img width="200"height="300"src="/build/img/galeria/${id}.jpg"alt="imagen galeria"/>`;

	// Creamos el overlay para que la pantalla se vea oscura al seleccionar la imagen

	const overlay = document.createElement("DIV");
	overlay.appendChild(imagen);
	overlay.classList.add("overlay");
	overlay.onclick = function () {
		const body = document.querySelector("body");
		body.classList.remove("fijar-body");
		overlay.remove();
	};

	// Botón para cerrar el modal

	const cerrarModal = document.createElement("P");
	cerrarModal.textContent = "X";
	cerrarModal.classList.add("btn-cerrar");

	// Registramos el evento para cerrar el modal
	cerrarModal.onclick = function () {
		const body = document.querySelector("body");
		body.classList.remove("fijar-body");
		overlay.remove();
	};
	overlay.appendChild(cerrarModal);

	// Seleccionamos el body y agregamos la imagen

	const body = document.querySelector("body");
	body.appendChild(overlay);

	// Quitamos el scroll cuando seleccionamos una imagen

	body.classList.add("fijar-body");
}
