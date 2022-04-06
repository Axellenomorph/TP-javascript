// 2. Ecrire une fonction ucFirst(word) qui transforme la première lettre d’une chaine de caractère en majuscule

function ucFirst( word ) {
    if ( typeof word === 'string' ) {
      return word.charAt(0)
      .toUpperCase()
      .concat( word.slice( 1 ));
    } else {
      return null;
    }
  }
  
  console.log(ucFirst('axelle'));
  console.log(ucFirst({ test: 'value' }));
  console.log(ucFirst(233400));
  console.log(ucFirst("Axelle est à l'ECV digital"));
  