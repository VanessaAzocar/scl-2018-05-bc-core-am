window.cipher = { /* Acá va tu código */
  //DECODIFICAR
  decode: (decodedSend, decodedNumber) => {
    let result = "";
    let i =0;
      //iteracion que hara a mi frase
      for ( i ; i < decodedSend.length; i++) {
        //convierte mayuscula la frase incresada
        let tMayus= decodedSend.toUpperCase();
        //para que aparezca el espacio que es en ASCII n°32
        if (tMayus.charCodeAt(i)===32){
          result += " ";
        }else{ 
          //Formula para decodificar 
          let fraseDecoded= (tMayus.charCodeAt(i) - 65 - parseInt(decodedNumber)) % 26 + 65;
          //guarda cada resultado de cada letra para despues mostrar la frase completa
          if (fraseDecoded < 65){
          fraseDecoded += 26;
          }
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
        //para que aparezca el espacio que es en ASCII n°32
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