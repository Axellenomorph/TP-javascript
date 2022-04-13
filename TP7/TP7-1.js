/* Créez une fonction qui prend en paramètre une chaîne de caractère, si la chaîne de caractère fait plus de 20 
caractères, la promesse échoue, sinon la fonction renvoie true */


function textTooLarge( text ) {
    return new Promise(( res, rej ) => {
      if ( text.length <= 20 ) {
        res( true );
      }
      rej('the given param is too large of a text');
    });
  }
  
  async function test( str ) {
    try {
      await textTooLarge( str )
      .then(( res ) => {
        console.info( res );
      });
    } catch ( e ) {
      console.error({
        errorMessage: `This is not working beacause: ${ e }`,
      });
    }
  }
  
  test('should work');
  test('tututuututututututuututuu');
  