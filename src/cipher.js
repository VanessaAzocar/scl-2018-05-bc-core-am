window.cipher = { /* Acá va tu código */
  //DECODIFICAR
  decode: (decodedSend, decodedNumber) => {
    let result = "";
    let i =0;
      //Iteracion que hara a mi frase
      for ( i ; i < decodedSend.length; i++) {
        //Convierte mayuscula la frase incresada
        let tMayus= decodedSend.toUpperCase();
        //Para que aparezca el espacio que es en ASCII n°32
        if (tMayus.charCodeAt(i)===32){
          result += " ";
        }else { 
          //Formula para decodificar 
          let fraseDecoded= (tMayus.charCodeAt(i) - 65 - parseInt(decodedNumber)) % 26 + 65;
          //Para que si la letra es menor a 65 le sume 26 y comience nuevamente
          if (fraseDecoded < 65){
          fraseDecoded += 26;
        }
          //Guarda cada resultado de cada letra para despues mostrar la frase completa
          result += String.fromCharCode(fraseDecoded);
        }   
      } 
    return result;
  },
  
  //CODIFICAR
  encode: (codedSend, codedNumber) => {
    let result = "";
    let i = 0;    
      //iteracion que hara a mi frase
      for ( i ; i < codedSend.length; i++) {
        //convierte mayuscula la frase incresada
        let tMayus= codedSend.toUpperCase(i);
        //Formula para codificar 
        let fraseCoded= (tMayus.charCodeAt(i) - 65 + parseInt(codedNumber)) % 26 + 65;
        //Para que aparezca el espacio que es en ASCII n°32
        if (tMayus.charCodeAt(i) === 32){
          result += " ";           
        }else {
          //guarda cada resultado de cada letra para despues mostrar la frase completa
          result += String.fromCharCode(fraseCoded);
        } 
      }
    return result;
  },
}