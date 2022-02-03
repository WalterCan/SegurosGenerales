document.addEventListener("DOMContentLoaded", function () {
	iniciarApp();
});

function iniciarApp() {
	navegacionfija();
	crearGaleria();
	scrollNav();
}
// Funcion de Scroll Nav

function scrollNav() {
	const enlaces = document.querySelectorAll(".navegacion-principal a");
	enlaces.forEach((enlace) => {
		enlace.addEventListener("click", function (e) {
			e.preventDefault();
			const seccionscrooll = e.target.attributes.href.value;
			const seccion = document.querySelector(seccionscrooll);
			seccion.scrollIntoView({ behavior: "smooth" });
		});
	});
}

// Galeria

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

// Funcion para navegacion fija

function navegacionfija() {
	const barra = document.querySelector(".header");
	const sobreSeguros = document.querySelector(".sobre-seguros");

	// vamos a agregar espacio de donde sacamos la barra de header, para que no pegue el salto de linea

	const body = document.querySelector("body");

	// Escuchamos por el scrool que va a suceder en la pantalla

	window.addEventListener("scroll", function () {
		console.log(sobreSeguros.getBoundingClientRect());
		if (sobreSeguros.getBoundingClientRect().bottom < 0) {
			barra.classList.add("fijo");
			body.classList.add("body-scroll");
		} else {
			barra.classList.remove("fijo");
			body.classList.remove("body-scroll");
		}
	});
}
