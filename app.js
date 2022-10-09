// FUNCION QUE LE APLICA ESTILO AL MENU SELECCIONADO  

function seleccionar (link){
  
   let opciones = document.querySelectorAll("#links a ");
   console.log(opciones);
   opciones[0].className =""; 
   opciones[1].className =""; 
   opciones[2].className =""; 
   opciones[3].className =""; 
   opciones[4].className =""; 
   link.className ="seleccionado";

   // HACEMOS  DESAPARECER EL MENU UNA VEZ  QUE SE  HA SELECCIONADO LA OPCION EN EL MODO RESPONSIVE

   let x = document.getElementById("nav");
   x.className = "";
}






// Funcion para el menu 

function responsiveMenu(){
    let x = document.getElementById("nav");
     if( x.className === ""){
        x.className = "responsive";
     }else{
        x.className = ""

     }


}

//  DETECTO EL SCROLLING PARA APLICAR LA ANIMACION DE LA BARRAS DE HABILIDADES

   window.onscroll =function(){
      efectoHabilidades ()
   }

 function  efectoHabilidades(){
   let skills = document.getElementById("skills");
   let distancia_skills = window.innerHeight- skills.getBoundingClientRect().top;
   if( distancia_skills >=300){
      document.getElementById("html").classList.add("barra-progreso1");
      document.getElementById("js").classList.add("barra-progreso2");
      document.getElementById("bd").classList.add("barra-progreso3");
      document.getElementById("ps").classList.add("barra-progreso4");
   }

}


   

