const { src, dest, watch, parallel } = require("gulp");

// Dependencias css

const sass = require("gulp-sass")(require("sass"));
const plumber = require("gulp-plumber");

// Dependencias Imagenes

const cache = require("gulp-cache");
const imagemin = require("gulp-imagemin");
const webp = require("gulp-webp");
const avif = require("gulp-avif");

//

function css(done) {
	src("../SegurosGenerales/src/scss/**/*.scss") //Ubicamos el Archivo
		.pipe(plumber())
		.pipe(sass()) //Lo compilamos
		.pipe(dest("build/css")); //Almacenamos en el disco duro

	done();
}
// Funcion para aligerar imagenes a webp

function versionWebp(done) {
	const opciones = {
		quality: 50,
	};
	src("../SegurosGenerales/src/img/**/*.{png,jpg}") //Identificamos
		.pipe(webp(opciones)) //pasamos calidad
		.pipe(dest("build/img")); //almacenamos
	done();
}
function versionAvif(done) {
	const opciones = {
		quality: 50,
	};
	src("../SegurosGenerales/src/img/**/*.{png,jpg}") //Identificamos
		.pipe(avif(opciones)) //pasamos calidad
		.pipe(dest("build/img")); //almacenamos
	done();
}

// Aligeramos imagenes

function imagenes(done) {
	const opciones = {
		optimizationLevel: 3,
	};
	src("../SegurosGenerales/src/img/**/*.{png,jpg}") //Identifico
		.pipe(cache(imagemin(opciones)))
		.pipe(dest("build/img"));
	done();
}

// Creamos el Watch para escuchar cambios

function dev(done) {
	watch("../SegurosGenerales/src/scss/**/*.scss", css); //dos parametros, Identificamos el archivo y que tarea vamos a mandar a llamar
	done();
}
exports.css = css;
exports.versionAvif = versionAvif;
exports.imagenes = imagenes;
exports.versionWebp = versionWebp;
exports.dev = parallel(imagenes, versionWebp, versionAvif, dev);
