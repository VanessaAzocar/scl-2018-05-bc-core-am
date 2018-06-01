window.cipher = {
  encode: () => {
    /* Acá va tu código */
    //Funciones trozos de codigos reutilizable
    const frase = "vanessa azocar";
    let result = "";
    let i =0;
      for ( i ; i < frase.length; i++) {
        fraseCoded= ((frase.charCodeAt(i)-65+numberDecoded))%26+65;
           
      result += frase[i].toUpperCase();
      console.log(result)
  }
 
  iteracion();
   
  },


  decode: () => {
    /* Acá va tu código */
  }
}