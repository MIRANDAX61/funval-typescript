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

// 🚫 No eliminar las líneas de abajo ⬇️
rl.close();