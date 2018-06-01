/* Acá va tu código , (manejo del DOM)*/ 
window.onload = () => {

 /* Boton DECODIFICAR */
  const decoded = document.getElementById("btnEnterDecoded"); /*para traer el valor del boton*/    decoded.addEventListener ("click",() => { /*evento click*/
    let decodedSend = document.getElementById("sendDecoded").value; /*para guardar el texto que ingreso el usuario en texarea */
    let decodedNumber = document.getElementById("numberDecoded").value;/*para guardar el numero que ingreso el usuario en texarea */
    let resultDecoded = window.cipher.encode(decodedSend, decodedNumber); /*para enlazar el texto decodificado*/
    document.getElementById("msjDecoded").innerHTML = "El mensaje oculto decodificado es: "  + resultDecoded;/*que regrese el resultado*/
  })

  /* Boton CODIFICAR */
  const coded = document.getElementById("btnEnterCoded");/*para traer el valor del boton*/ 
    coded.addEventListener ("click",() => {  /*evento click*/
    let codedSend = document.getElementById("receivedCoded").value;/*para guardar el texto que ingreso el usuario en texarea */
    let codednumber = document.getElementById("numberCoded").value;/*para guardar el numero que ingreso el usuario en texarea */
    let resultEncoded = window.cipher.encode(codedSend, codednumber); /*para enlazar el texto codificado*/
    document.getElementById("msjCoded").innerHTML = "El mensaje codificado es "  + resultEncoded +  "<br><br>*Ahora puedes copiar y enviar este mensaje, solo indicando el número de desplazamiento y será secreto!!!</br></br>"; /*que reguese el resultado*/
  })

    
  }