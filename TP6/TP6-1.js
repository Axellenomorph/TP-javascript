const E_Months = {
    "1": 'A',
    "2": 'B',
    "3": 'C',
    "4": 'D',
    "5": 'E',
    "6": 'H',
    "7": 'L',
    "8": 'M',
    "9": 'P',
    "10": 'R',
    "11": 'S',
    "12": 'T',
  };
  
  const persons = [
    {
      name: 'Blondin',
      surname: 'Axelle',
      gender: 'F',
      dob: '28/1/1995',
    },
    {
      name: "Helen",
      surname: "Yu",
      gender: "F",
      dob: "1/12/1950"
    },
    {
      name: "Mickey",
      surname: "Mouse",
      gender: "M",
      dob: "16/1/1928"
    },
    {
      name: "Matt",
      surname: "Edabit",
      gender: "M",
      dob: "1/1/1900"
    }
  ];
  
  function consonants( str ) {
    return str.match( /[bcdfghjklmnpqrstvwxys]/gi ) ?
    str.match( /[bcdfghjklmnpqrstvwxys]/gi ).join( '' ) :
    '';
  }
  function vowels( str ) {
    return str.match( /[aeiou]/gi ) ?
    str.match( /[aeiou]/gi ).join( '' ) :
    '';
  };
function getName( name ) {
    if ( consonants( name ).length < 3) {
        if (( consonants( name ) + vowels( name )).length < 3 ) {
            name = (`${consonants( name )}${vowels( name )}XXX`).slice( 0, 3 );
        } else {
            name = (`${consonants( name )}${vowels( name )}XXX`).slice( 0, 3 );
        }
    } else {
        name = consonants( name ).slice( 0, 3 );
    }
    return name;
}

function getSurname( surname ) {
    if ( consonants( surname ).length < 3 ) {
        if (( consonants( surname ) + vowels( surname )).length < 3 ) {
            surname = (`${consonants( surname )}${vowels( surname )}XXX`).slice(0, 3);
        } else {
            surname = (`${consonants( surname )}${vowels( surname )}`).slice(0, 3);
        }
    } else if ( consonants( surname ) > 3 ) {
        surname = `${ consonants( surname )[ 0 ]}${ consonants( surname )[ 2 ]}${ consonants( surname )[ 3 ]}`;
    } else {
        surname  = consonants( surname ).slice( 0, 3 );
    }
    return surname;
}

//Warning: this method does not support 2000s year of birth.
function fiscalCode( person ) {
    const dobValues = person.dob.split( '/' );
    const birthMonth = E_Months[ dobValues[ 1 ]];
    const birthYear = dobValues[ 2 ].slice( 2, 4 );
    let birthDay = dobValues[ 0 ];

    if ( person.gender === 'F' ) {
        birthDay = Number.parseInt( birthDay ) + 40;
    } else {
        birthDay = birthDay.length === 1 ? `0${ birthDay }` : birthDay;
    }
  
    const name = getName( person.name );

    const surname = getSurname( person.surname );
  
    return `${ name.toUpperCase()}${ surname.toUpperCase()}${ birthYear }${ birthMonth }${ birthDay }`;
}


