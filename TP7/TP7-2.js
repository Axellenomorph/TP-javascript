/* Créez une fonction qui prend en paramètre deux int,
si la première variable est supérieure à la seconde,
la promesse renvoie la différence entre les deux variables,
sinon elle échoue. */

function compareInt( int1, int2 ) {
    return new Promise(( res, rej ) => {
        if ( int1 > int2 ) {
            res( int1 - int2 );
        }
        else if ( int1 < int2 ) {
            rej('int1 should be greater than int2');
        } else {
            res('no difference');
        }
    });
}

async function test( int1, int2 ) {
    try {
        await compareInt( int1, int2 )
        .then(( res ) => {
            console.info( res );
        });
    } catch ( e ) {
        console.error( e );
    }
}

test(2, 45);
test(54, 1);
test(1, 1);
