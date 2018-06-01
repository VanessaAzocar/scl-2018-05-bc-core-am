/* Acá va tu código , (manejo del DOM)*/ 
window.onload = => (){
/*siempre espera que el usuario haga algo para que cuando el usuario haga click que es su funcion*/
 /*se hace la variable para guardar el texto y que busqye la clase que tiene text_hide y se busca la posicion que es 0 (la que esta en 1 lugar en el HTML en orden de escritura) */
 /*hide se pone en CSS diciendo que se oculte*/

 /* Boton DECODIFICAR */
  const encoded = document.getElementById("btnEnterEncoded").addEventListener ("click",() => {
    const codedSend = document.getElementById("sendDecoded").value;
    const codednumber = document.getElementById("numberCoded").value;
    document.getElementById("msjDecoded").innerHTML = "El mensaje oculto decodificado es:" ;
  })
  /* Boton CODIFICAR */
  const coded= document.getElementById("btnEnterCoded");
    encoded.addEventListener ("click",() => {
    let codedSend = document.getElementById("receivedCoded")[0].value;
    let codednumber = document.ElementsByClassName("numberCoded").value;
    document.getElementById("msjCoded").innerHTML = "El mensaje codificado es:" + ""  + "*Ahora puedes copiar y enviar este mensaje, solo indicando el número de desplazamiento y será secreto!!!";
  })

    
}