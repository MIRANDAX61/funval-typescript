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

let titulos_tareas: Task[] = [];
let siguienteId: number = 1;

const addTask = (title: string) => {
   const nuevatarea: Task = { 
        id: siguienteId,
        title: title,
        completed: false
   };
   titulos_tareas.push(nuevatarea)
   siguienteId++;

   console.log("Tarea agregada: "+ nuevatarea.title)
}

const listTasks = () => {
    if (titulos_tareas.length=== 0){
    
    console.log("No hay tareas registradas.");
    return;
    }
        for (let j = 0; j < titulos_tareas.length; j++) {
            const tarea = titulos_tareas[j];

            let estado: string = "pendiente"; 

            if (tarea.completed) {
                estado = "completada";
            }

            console.log("[" + tarea.id +"]" + tarea.title + " - " + estado);
            
        }
}

const removeTask = () => {

     const eliminada  = titulos_tareas.pop();

     if (eliminada === undefined) {
        console.log("No hay tareas para eliminar.");
     }else {
        console.log ("Tarea eliminda: " + eliminada.title); 
     }
}


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

                    addTask(titulo);
                    break;
                }

                case "2": {
                    removeTask();
                    break;
                }

                case "3": {
                    listTasks();
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

interface Task {
    id : number;
    title : string;
    completed : boolean;
}










