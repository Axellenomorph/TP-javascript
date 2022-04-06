// 5. Créer une fonction palindrome(str) qui vérifie si un mot est un palindrome et retourne un booléen

function palindrome( text ) {
    if ( typeof text === 'string' ) {
      const revertedStr = text.split('').reverse().join('');
      return text === revertedStr;
    } else {
      return null;
    }
  }
  
  console.log(palindrome('Axelle'));
  console.log(palindrome('tut tut'));
  console.log(palindrome('tuti tuti'));
  
  console.log(palindrome({ test: 'value' }));
  console.log(palindrome(233400));