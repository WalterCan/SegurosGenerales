const { src, dest, watch } = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const plumber = require("gulp-plumber");

function css(done) {
	src("../SegurosGenerales/src/scss/**/*.scss") //Ubicamos el Archivo
		.pipe(plumber())
		.pipe(sass()) //Lo compilamos
		.pipe(dest("build/css")); //Almacenamos en el disco duro

	done();
}
// Creamos el Watch
function dev(done) {
	watch("../SegurosGenerales/src/scss/**/*.scss", css); //dos parametros, Identificamos el archivo y que tarea vamos a mandar a llamar
	done();
}
exports.css = css;
exports.dev = dev;
