// 1. Créer une fonction revert(str) qui inverse une chaîne de caractère et la retourne


function revert( text ) {
    if ( typeof text === 'string' ) {
        return text.split('')
        .reverse()
        .join('')
    } else {
        return null;
    }
  }
  
  console.log(revert('axelle'));
  console.log(revert({test: 'value'}));
  console.log(revert( 233400 ));
  console.log(revert( 'Axelle est à l\'ECV digital' ));
  