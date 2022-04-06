// 3. Ecrire une fonction capitalize(str) qui transforme chaque première lettre de chaque mot en majuscule

function ucFirst( word ) {
    if ( typeof word === 'string' ) {
      return word[ 0 ]
      .toUpperCase()
      .concat( word.slice( 1 ));
    } else {
      return null;
    }
  }
  
  function capitalize(text) {
    if ( typeof text === 'string' ) {
      return text
      .split(' ')
      .map( word => ucFirst( word ))
      .join(" ");
    } else {
      return null;
    }
  }

  console.log(capitalize('axelle'));
  console.log(capitalize({ test: 'value' }));
  console.log(capitalize(233400));
  console.log(capitalize("Axelle est à l'ECV digital"));
  