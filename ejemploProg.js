// Programa de gestión de tareas en JavaScript para ensayos con Git

class TaskManager {
    constructor() {
      this.tasks = [];
    }
  
    addTask(task) {
      this.tasks.push(task);
      console.log(`Tarea agregada: ${task}`);
    }
  
    completeTask(task) {
      const index = this.tasks.indexOf(task);
      if (index !== -1) {
        this.tasks.splice(index, 1);
        console.log(`Tarea completada: ${task}`);
      } else {
        console.log(`Error: La tarea "${task}" no existe.`);
      }
    }
  
    listTasks() {
      console.log("Lista de tareas:");
      this.tasks.forEach((task, index) => {
        console.log(`${index + 1}. ${task}`);
      });
    }
  }
  
  // Crear una instancia de TaskManager
  const taskManager = new TaskManager();
  
  // Agregar algunas tareas
  taskManager.addTask("Hacer la compra");
  taskManager.addTask("Terminar el informe");
  taskManager.addTask("Preparar la presentación");
  
  // Completar una tarea
  taskManager.completeTask("Hacer la compra");
  
  // Listar las tareas
  taskManager.listTasks();
  