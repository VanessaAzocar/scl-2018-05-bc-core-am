/* Acá va tu código , (manejo del DOM)*/ 
window.onload = => (){

/*Botones decodificar*/
  let numberEncoded= document.getElementById("numberEncoded"); 
  let btnEnterEncoded= document.getElementById("btnEnterEncoded");
/*Botones codificar*/
  let numberCoded= document.getElementById("numberCoded"); 
  let btnEnterCoded= document.getElementById("btnEnterCoded");


  

/*siempre espera que el usuario haga algo para que cuando el usuario haga click que es su funcion*/
 /*se hace la variable para guardar el texto y que busqye la clase que tiene text_hide y se busca la posicion que es 0 (la que esta en 1 lugar en el HTML en orden de escritura) */
 /*hide se pone en CSS diciendo que se oculte*/

 /* Boton DECODIFICAR */
 const encoded= document.getElementById("btnEnterEncoded");
    encoded.addEventListener ("click",() => {
    let codedSend = document.getElementById("sendDecoded")[0] .value;
    let codednumber = document.ElementsByClassName("numberCoded").value;
  })
  



    
}