
// 4. Créer une fonction arrayDiff(first,second) qui calcule la différence entre 2 tableaux (Number, String)

function arrayDiff( arr, arr2 ) {
    typeof arr === 'string' ? arr = arr.split(' ') : null;
    typeof arr2 === 'string' ? arr2 = arr2.split(' ') : null;

    return arr.filter( element => arr2.indexOf( element ) === -1);

  }

  console.log(arrayDiff(['245', 'bidule', 'truc', "machin"], "245"));
  console.log(arrayDiff(['2', '45', 'truc', "machin"], "2 45"));
  console.log(arrayDiff([ 'truc', "machin"], "2 45"));
