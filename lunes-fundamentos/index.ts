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
    let convertir = titulos_tareas.map(
        (task : Task) => {
        const {id, title, completed} = task;
        const estado = completed ? "completada" : "pendiente";

        return "[" + id + "] " + title + " - " + estado; 
    });

    convertir.forEach((texto: string) => {
        console.log(texto);
    });

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
        while (entrada !== "7") {
            console.log("==== MENÚ DE TAREAS ====");
            console.log("1. Agregar tarea");
            console.log("2. Eliminar últuima tarea");
            console.log("3. Listar tareas");
            console.log("4. Marcar tarea como completada"); 
            console.log("5. Ver las tareas pendientes");
            console.log("6. Ver las tareas completadas");
            console.log("7. Salir");
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
                    const id : number = Number(await rl.question("Id de la tarea: "));
                    markCompleted(id);
                    break;
                }

                case "5" : { 
                    filterPending();
                    break;
                }

                case "6" : { 
                    filterCompleted();
                    break;
                }

                case "7" : { 
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


//Nuevas funciones de filtrado y modificación
// const markCompleted = (id: number) => { ... } — usa .find() para localizar
//la tarea por su id y cambia su propiedad completed a true
const markCompleted = (id: number) => {
    let localiza= titulos_tareas.find(
        (ids : Task) => id === ids.id 
    )
    if (localiza){
        localiza.completed = true;
        console.log("tarea completada " + localiza.title);
    } else {
        console.log("No se pudo localizar esa tarea");
    }
}

const filterPending = () => {
    let sincompletar = titulos_tareas.filter(
        (completado: Task) => completado.completed === false 
    );
    if (sincompletar.length > 0){
        sincompletar.forEach((tarea: Task) => {
            console.log("Tarea sin completar: " +  tarea.title);
        });
    } else {
        console.log("No hay tareas sin completar");
    }
}

const filterCompleted = () => { 
      let completada = titulos_tareas.filter(
        (completado: Task) => completado.completed === true 
    );
    if (completada.length > 0){
        completada.forEach((tarea: Task)=> {
            console.log("Tarea completa: " + tarea.title);
        });

    } else {
        console.log("No hay tareas completas");
    }  
}






