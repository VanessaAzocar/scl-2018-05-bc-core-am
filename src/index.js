/* Acá va tu código , (manejo del DOM)*/ 
window.onload = => () {

 /* Boton DECODIFICAR */
  const decoded = document.getElementById("btnEnterDecoded"); /*para traer el valor del boton*/    decoded .addEventListener ("click",() => { /*evento click*/
    let decodedSend = document.getElementById("sendDecoded")[0].value; /*para guardar el texto que ingreso el usuario en texarea */
    let decodednumber = document.getElementById("numberDecoded").value;/*para guardar el numero que ingreso el usuario en texarea */
    document.getElementById("msjDecoded").innerHTML = "El mensaje oculto decodificado es:" ;/*que regrese el resultado*/
  })

  /* Boton CODIFICAR */
  const coded= document.getElementById("btnEnterCoded");/*para traer el valor del boton*/ 
    coded.addEventListener ("click",() => {  /*evento click*/
    let codedSend = document.getElementById("receivedCoded")[0].value ;/*para guardar el texto que ingreso el usuario en texarea */
    let codednumber = document.ElementsByClassName("numberCoded").value;/*para guardar el numero que ingreso el usuario en texarea */
    document.getElementById("msjCoded").innerHTML = "El mensaje codificado es:" + ""  + "*Ahora puedes copiar y enviar este mensaje, solo indicando el número de desplazamiento y será secreto!!!";/*que reguese el resultado*/
  })

    
  }