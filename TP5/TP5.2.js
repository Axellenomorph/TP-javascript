
//2. Créer une fonction qui supprime les valeurs dupliquées dans un tableau (Number, String)

function deleteDuplicates( text ) {
    if ( typeof text === 'string' ) {
      const array = text.split(' ');
      return array.filter(( word, index ) => array.indexOf( word ) === index );
    } else {
      return text.filter(( word, index ) => text.indexOf( word ) === index );
    }
  }

  console.log(deleteDuplicates(['truc', 'bidule', 'truc', "machin"]));
  console.log(deleteDuplicates("Axelle a le covid covid covid"));
