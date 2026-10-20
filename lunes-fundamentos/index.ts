import readline from 'readline/promises';
import { stdin as input, stdout as output } from 'process';

const rl = readline.createInterface({ input, output });
// 🚫 No eliminar las líneas de arriba ⬆️

// ✍️ Escribe tu código aquí 👇

let systemName : string= "sistema Leo";
let version : number = 968 ;
let userName : string = "MIRANDAX";

console.log("==========================================");
console.log(systemName+ " " + version);
console.log("¡Bienvenido, " + userName + "!");
console.log((2 * 2) + 1);
console.log("==========================================");

let titulos_tareas : string[] = [];
async function main(){
        let entrada : string =""; 
        while (entrada !== "4") {
            console.log("==== MENÚ DE TAREAS ====");
            console.log("1. Agregar tarea");
            console.log("2. Eliminar últuima tarea");
            console.log("3. Listar tareas");
            console.log("4. Salir"); 

            entrada = await rl.question("Elige una opción: "); 
            switch (entrada) {
                case "1": {
                    const titulo = await rl.question("Título de la tarea: ");

                    titulos_tareas.push(titulo);

                    console.log("Tarea agregada: " + titulo);
                    break;
                }

                case "2": {
                    if (titulos_tareas.length === 0) {
                        console.log("No hay tareas para eliminar.");
                    } else {
                        let eliminada : string = titulos_tareas.pop()!;
                        console.log("Tarea eliminada: " + eliminada);
                        console.log(titulos_tareas);
                    }
                    break;
                }

                case "3": {
                    if (titulos_tareas.length === 0) {
                        console.log("No hay tareas registradas.");
                    } else {
                        for (let i = 0; i < titulos_tareas.length; i++) {
                            console.log( (i+1) + ". " + titulos_tareas[i]);
                        }
                    }
                    break;
                }

                case "4": {
                    console.log("¡Hasta luego!");
                    break;
                }
                default: {
                console.log("Opción inválida. Elige del 1 al 4.");
                }    

        }
    } 
    
}
main().finally(()=> {
// 🚫 No eliminar las líneas de abajo ⬇️
rl.close();});





