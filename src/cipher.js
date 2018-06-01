window.cipher = { /* Acá va tu código */
  encode: (decodedSend, decodedNumber) => {
    //
    let result = "";
    let i =0;
      //iteracion que hara a mi frase
      for ( i ; i < decodedSend.length; i++) {
      //convierte mayuscula la frase incresada
      let tMayus= decodedSend.toUpperCase();
      //Formula del cifrado 
      fraseCoded= (tMayus.charCodeAt(i) - 65 + parseInt(decodedNumber)) % 26 + 65;
      //para que aparezca el espacio que es en ASCII n°32
      if (tMayus.charCodeAt(i)===32){
        result += " ";
        } else{ 
        //guarda cada resultado de cada letra para despues mostrar la frase completa
        result += String.fromCharCode(fraseCoded);
        }   
      } 
    return result;
  },


  decode: (codedSend, codednumber) => {
    /* Acá va tu código */
  }
}