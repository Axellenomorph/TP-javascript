// Écrivez une fonction getHashTags(str) qui récupère les trois
//  mots les plus longs d'une chaîne de caractère et les transforme en hashtags.
// Si plusieurs mots sont de la même longueur, récupérez le mot qui apparaît en premier.

function findThreeLongestWord( text ) {
    if ( typeof text === 'string' ) {
      const words = text.split(' ');
      const sortedwords = words
      .sort( function( a, b ) {
        return b.length - a.length;
      });
      return sortedwords.slice(0,3);;
    } else {
      return null;
    }
  }
  
  function getHashTags( text ) {
    if ( typeof text === 'string' ) {
      const longest = findThreeLongestWord (text );
      return longest.map( word => '#' + word.toLowerCase());
    } else {
      return null;
    }
  }
  
  console.log(getHashTags('Axelle a le covid ce weekend'));
  console.log(getHashTags("The new XPS 15 & 17 with 12th Gen Intel® Core™ processors and NVIDIA graphics"));
  
  
  