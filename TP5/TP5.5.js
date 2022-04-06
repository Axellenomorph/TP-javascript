
//  5. Créez une fonction combinations qui prend un nombre variable d'arguments, chaque argument représentant le nombre d'articles dans un groupe, et qui renvoie le nombre de permutations (combinaisons) d'articles que vous pourriez obtenir en prenant un article de chaque groupe.

function combinaisons( ...numbers ) {
    return numbers
    .filter( a => a || a === 0 ) // to remove falsy values except 0 because we can multiply by 0
    .reduce(( a, b ) => a * b );
  }
  
  console.log(combinaisons('245', "245"));
  console.log(combinaisons( "2", 45, 10));
  console.log(combinaisons( "2", 45, 10, NaN));
  console.log(combinaisons( "2", 45, 10, false));
  console.log(combinaisons( "2", 45, 10, "0"));
  