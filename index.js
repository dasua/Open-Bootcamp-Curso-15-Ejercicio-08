/**
 * Crea un archivo JS que contenga las siguientes líneas
 *
 * - [X] Una función sin parámetros que devuelva siempre "true"
 * - [X] Una función asíncrona que utilice un setTimeout y pase por consola un "Hola soy una promesa" 5 segundos después de haberse ejecutado
 * - [X] Una función generadora de índices pares automáticos
 */
let ahora;

// Punto 1
function alwaysTrue() {
    return true;
}
console.log('alwaysTrue: ',alwaysTrue());

// Punto 2
function saludar () {
    function mostrarLog(texto) {
        console.log(texto);
    }

    const saludoDiferido = new Promise((resolve) => {
        setTimeout(()=>{
            let ahora = new Date(); // Al estar declarada con let, este ahora no es el mismo que el de fuera
            resolve(ahora.toISOString());
        },5000);
    });
    console.log('Lanzando el saludo');
    saludoDiferido.then((fecha)=>mostrarLog(`Hola, soy una promesa que se ha ejecutado el ${fecha}`));
    ahora = (new Date()).toISOString();
    console.log(`El saludo ha sido lanzado el ${ahora} y se mostrará en la consola dentro de 5 segundos.\nMientras hago otras cosas`);
}

saludar();

// Punto 3
/**
 * @param maximoNumero Número máximo a devolver. Si es un impar el mayor número generado será maximoNumero - 1
 * @returns {Generator<number, number, *>}
 */
function* paresAutomaticos(maximoNumero = 10) {
    let numeroActual = 2;
    const MAX_NUM = maximoNumero - (maximoNumero % 2);
    if (maximoNumero < 2 ) {
        return undefined;
    }

    while (numeroActual < MAX_NUM) {
        yield numeroActual;
        numeroActual += 2;
    }

    return numeroActual;
}

const generador = paresAutomaticos(11);
let leido;

do {
    leido = generador.next();
    console.log('leido: ',leido.value);
} while (!leido.done);
