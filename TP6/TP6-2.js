// Créer une méthode merge qui prend en paramètres des objets et les fusionnent.

const object1 = {
    a: [
        { x: 2 },
        { y: 4 }
    ],
    b: 1
};

const object2 = {
    a: { z: 3 },
    b: [
        2,
        3
    ],
    c: 'foo'
};

function merge( ...objetcs ) {
    let newObject = {};
    for ( const i in objetcs ) {
        const object = objetcs[i];
        for ( let key in object ) {
            if ( object.hasOwnProperty( key )) {
                if ( object[ key ] instanceof Object ) {
                    newObject[ key ] = merge( newObject[ key ], object[ key ] );
                }
                else {
                    newObject[ key ] = object[ key ];
                }
            }
        }
    };
    return newObject;
};

console.log( merge( object1, object2 ));
// je n'ai pas réussi à créer une table pour les valeurs étant des arrays. J'avais tenté ça ...
/*  
    if ( object[ key ] instanceof Object ) {
        if ( Array.isArray( object[ key ])) {
            newObject [ key ] = [];
            newObject [ key ].push( merge(newObject[ key ], object[ key ]) )
        } else {
            newObject[ key ] = merge( newObject[ key ], object[ key ] );
        }
    }
} */
