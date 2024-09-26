const ingresartarea = document.getElementById("ingresar-tarea")
const btntarea = document.getElementById("btncreartarea")
const listadetareas = document.getElementById("listadetareas")
console.log(ingresartarea);
console.log(btntarea);
console.log(listadetareas);

btntarea.addEventListener("click", agregartarea);
//con el segundo parametro lo que hago es decirle que es lo que voy a hacer una vez escuche el click, este caso una función (agreagartarea que saco y desarrolo despúes
function agregartarea() {
   //primero comprobar tarea
   //con esto siguiente accedo a la propiedad de un objeto en este caso a la propiedad value
   if (ingresartarea.value) {
      console.log(ingresartarea.value);
      let tareanueva = document.createElement("div");
      tareanueva.classList.add("tarea");
      //con estas dos lineas anteriores creo un contenedor y le añado un estilo que ya tengo creado en css

      //creo el texto de la tarea
      let textotareanueva = document.createElement("p");
      textotareanueva.innerText = ingresartarea.value;
     
      //con las lineas anterior meto el texto en la p
      tareanueva.appendChild(textotareanueva);
     
      //añadir iconos
      let iconos = document.createElement("div");
      iconos.classList.add("iconos");
      //para que salgan el html
      /*iconos.innerHTML=`<span class="material-symbols-outlined">
check
</span>
<span class="material-symbols-outlined">
delete
</span>`*/
      
      //para el icono check
      let completado = document.createElement("span");
      completado.classList.add("material-symbols-outlined");
      completado.innerText = "check";
      completado.style.cursor = "pointer";
      completado.addEventListener("click", tareacompletada);


      //para el icono eliminado
      let eliminado = document.createElement("span");
      eliminado.classList.add("material-symbols-outlined");
      eliminado.innerText = "delete";
      eliminado.style.cursor = "pointer";
      eliminado.addEventListener("click", tareaeliminada);
      
//para añadir a tareanueva los simbolos creados
      iconos.append(completado,eliminado)
      
      
      
      tareanueva.appendChild(iconos);
      
      

     
     
     
     
     
     
     
      //agregar tarea a la lista
      listadetareas.appendChild(tareanueva);
      
   }
   else {
      console.log("tienes que añadir una tarea")
}
}
//con lo anterior le digo que si hay valor es decir se ha ingresado algo que me lo devuelva de lo contrario que aparezca un mensaje pidiendo que se ponga algo

function tareacompletada(e) {
   //parentNode es para trabajar en la jerarquia de los nodos//
   //toogle: si una clase existe me la eliminas y 
   console.log(e.target.parentNode);
   let tarea = e.target.parentNode.parentNode.firstChild;
   console.log(tarea);
   tarea.classList.toggle("tareacompletada");
//esto anterior es para ir al valor del evento y subir dos niveles de anidamiento despues al primer hijo para aplicarle el estilo y tacharlo
   //e significa evento
   

   console.log("tarea completada")
}

//para eliminar tarea
function tareaeliminada(e){
  
   let tarea = e.target.parentNode.parentNode;
   tarea.remove();
    console.log("tarea eliminada")
}