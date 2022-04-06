
//3. Créer une function intersection(arr,arr2), fonction qui calcule l’intersection entre 2 tableaux (Number, String)

function intersection( arr, arr2 ) {
    typeof arr === 'string' ? arr = arr.split(' ') : null;
    typeof arr2 === 'string' ? arr2 = arr2.split(' ') : null;
   
    return arr.filter( element => arr2.indexOf( element ) !== -1);
    
  }

  console.log(intersection(['245', 'bidule', 'truc', "machin"], "245"));
  console.log(intersection(['2', '45', 'truc', "machin"], "2 45"));
  console.log(intersection([ 'truc', "machin"], "2 45"));
