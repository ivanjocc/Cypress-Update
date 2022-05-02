export var date = new Date();

export var pruebaDia = date.getDate();
export var pruebaMes = date.getMonth() + 1;
export var pruebaYear = date.getFullYear();

export default function convertir () {
	if(pruebaMes == 13){
		pruebaMes = 1;
	} else{
		return pruebaMes;
	}
}

export var pruebaDayBefore = date.getDate() - 1;
export var pruebaDayAfter = date.getDate() + 1;

export var fechaMax = `${ pruebaYear - 18 }`;
export var mesActual = `${ pruebaMes }`;
export var diaHoy = `${ pruebaDia }`;
export var diaAnterior = `${ pruebaDayBefore }`;
export var diaSiguiente = `${ pruebaDayAfter }`;

convertir();
console.log(fechaMax);


// NOTA
// Si colocamos solo esta funcion date.getMonth();
// Selecciona el mes anterior al que estamos actualmente, por lo que se le suma 1 (+ 1)
// Para escoger el mes actual