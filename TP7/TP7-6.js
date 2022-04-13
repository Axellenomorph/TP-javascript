/* Avec fetch et https://swapi.dev/, recupérer la liste de tous les personnages, vaisseaux et planètes et affichez les dans
une liste. Vous devez utiliser des promesses, async / await & des try catch.
 */

async function getCharacters() {
    return new Promise(async (res, reject) => {
      let characters = [];
      let url = 'https://swapi.dev/api/people/';
      while (url !== null) {
        const res = await fetch(url);
        const APIresponse = ({ next, results } = await res.json());
        url = APIresponse.next;
        characters = [...characters, ...APIresponse.results];
      }
      res(characters);
    });
  }
  
  async function getPlanets() {
    return new Promise(async (res, reject) => {
      let planets = [];
      let url = 'https://swapi.dev/api/planets/';
      while (url !== null) {
        const res = await fetch(url);
        const APIresponse = ({ next, results } = await res.json());
        url = APIresponse.next;
        planets = [...planets, ...APIresponse.results];
      }
      res(planets);
    });
  }
  
  async function getShips() {
    return new Promise(async (res, reject) => {
      let ships = [];
      let url = 'https://swapi.dev/api/starships/';
      while (url !== null) {
        const res = await fetch(url);
        const APIresponse = ({ next, results } = await res.json());
        url = APIresponse.next;
        ships = [...ships, ...APIresponse.results];
      }
      res(ships);
    });
  }
  
  async function test() {
    try {
      Promise.all([getCharacters(), getPlanets(), getShips()]).then((values) => {
        console.info(
          'Here the lists of Starwars characters, planets and starships !',
          {
            characters: values[0],
            planets: values[1],
            ships: values[2],
          }
        );
      });
    } catch (e) {
      console.error(e);
    }
  }
  
  test();
  