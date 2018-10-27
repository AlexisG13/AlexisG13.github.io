window.onload = init;
   
 function init() {
     let todoList = {
         listHTML: document.getElementById("todoList"),
         listTask: [],
         add(task, priority = false) {
             
             let element = document.createElement("li");
             element.innerText = task;
             //Se agregan botones
             var bEliminar = document.createElement("input");
             var bDone = document.createElement("input");
             bEliminar.setAttribute("type","submit");
             bEliminar.setAttribute("value","Eliminar");
             bDone.setAttribute("type","submit");
             bDone.setAttribute("value","Hecho");
             element.appendChild(bEliminar);
             element.appendChild(bDone);
             
             //Funcion eliminar
             bEliminar.addEventListener("click", function(){
                console.log(this);
                let parent = element.parentNode;
                if(parent){
                    parent.removeChild(element);
                }
             })

             //Función tachar
             bDone.addEventListener('click',function(){
                 if(this.click){
                     element.style.textDecoration="line-through";
                     element.removeChild(bDone);
                 }
             })

             if (priority) {
                 this.listTask.unshift({
                     element,
                     task,
                     bEliminar, bDone
                 });
                 this.listHTML.insertBefore(element, this.listHTML.childNodes[0]);
             } else {
                 this.listTask.push({
                     element,
                     task,
                     bEliminar, bDone
                 });
                 this.listHTML.appendChild(element);
             }
         }
     }

     let form = document.managerTask;
     form.addEventListener("submit", (evt) => {
         evt.preventDefault();
         let task = form.task.value;

         let validTask = /.{2,}/;
         if (!validTask.test(task)) {
             console.log("Ingrese una descripcion clara");
             return false;
         }

         todoList.add(task, form.important.checked);

     });
 }