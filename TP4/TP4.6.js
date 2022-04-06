// 6. Écrire une fonction findLongestWord(str) qui permet de trouver le mot le long plus d’une chaîne de caractère

function findLongestWord( text ) {
    if ( typeof text === 'string' ) {
      const words = text.split(' ');
      const sortedwords = words
      .sort( function( a, b ) {
        return b.length - a.length;
      });
      return sortedwords[ 0 ];
    } else {
      return null;
    }
  }
  
  console.log(findLongestWord('Axelle'));
  console.log(findLongestWord('elle a le covid ce weekend'));
  console.log(findLongestWord("Axelle est à l'ECV digital"));
  console.log(findLongestWord({ test: 'value' }));
  console.log(findLongestWord(233400));