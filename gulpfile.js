const { src, dest, watch } = require("gulp");
const sass = require("gulp-sass")(require("sass"));

function css(done) {
	src("../SegurosGenerales/src/scss/app.scss") //Ubicamos el Archivo
		.pipe(sass()) //Lo compilamos
		.pipe(dest("/build/css")); //Almacenamos en el disco duro

	done();
}
// Creamos el Watch
function dev(done) {
	watch("../SegurosGenerales/src/scss/app.scss", css); //dos parametros, Identificamos el archivo y que tarea vamos a mandar a llamar
	// pipe(dest("/build/css"));
	done();
}
exports.css = css;
exports.dev = dev;
