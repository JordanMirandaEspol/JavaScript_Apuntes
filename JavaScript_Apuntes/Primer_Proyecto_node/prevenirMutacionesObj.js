function freezeObj() {
    const MATH_CONSTANTS = {
      PI: 3.14
    };
    // Cambia solo el código debajo de esta línea
  Object.freeze(MATH_CONSTANTS);
  
    // Cambia solo el código encima de esta línea
    try {
      MATH_CONSTANTS.PI = 99;
    } catch(ex) {
      console.log(ex);
    }
    return MATH_CONSTANTS.PI;
  }
  const PI = freezeObj();

  /*Como se vio en el desafío anterior, la declaración const por sí sola no protege la información de la mutación. 
  Para asegurar que tu información no cambie, JavaScript provee una función Object.freeze para prevenir la mutación de datos. */