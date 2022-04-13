/* Créez une fonction qui prend en paramètre une date de naissance
d’une personne au format DD/MM/YYYY. Si la personne est mineure,
la promesse échoue, sinon elle renvoie true */

function isMinor( dob ) {
    return new Promise(( res, rej ) => {
        const today = new Date();
        const arrayDate = dob.split('/');
        var age = today.getFullYear() - arrayDate[ 2 ];
        var monthsDifference = today.getMonth() - arrayDate[ 1 ];
        if (
            monthsDifference < 0 && ( today.getDate() < arrayDate[ 0 ]) ||
            ( monthsDifference === 0 && ( today.getDate() > arrayDate[ 0 ]))
        ) {
            age--;
        }

        if ( age >= 18 ) {
            res( true )
        } else {
            rej('This person is a minor')
        }
    });
}

async function test( dob ) {
    try {
        await isMinor( dob )
        .then(( res ) => {
            console.info( res );
        });
    } catch ( e ) {
        console.error( e );
    }
}


test('28/01/1995');
test('13/04/2004');
test('14/07/2004');