// 4. Ecrire une fonction pascalCase(str) qui transforme chaque première lettre de chaque mot en majuscule et supprime les espaces

function ucFirst( word ) {
    if ( typeof word === 'string' ) {
      return word[ 0 ]
      .toUpperCase()
      .concat( word.slice( 1 ));
    } else {
      return null;
    }
  }
  
  function pascalCase( text ) {
    if ( typeof text === 'string' ) {
      return text
      .split(' ')
      .map( word => ucFirst( word ))
      .join("");
    } else {
      return null;
    }
  }
  
  console.log(pascalCase('axelle a le covid ce weekend'));
  console.log(pascalCase({ test: 'value' }));
  console.log(pascalCase(233400));