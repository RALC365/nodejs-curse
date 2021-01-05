### Fundamentos

Para correr: 
    node nombre_del_archivo

#Para iniciar el package.json
npm init -y

npx para correr algo sin necesidad de intalarlo de manera global
npx cowsay "Hola mundo"

#Recuerdos Javascript 

//fetch
fetch("https://pokeapi.co/api/v2/pokemon/")
  .then(res => res.json())
  .then(data => {
    //console.log(data.results);
    data.results.forEach(element => {
      console.log(element.name)
    });
  })
  .catch(error => console.log(error))

  // async await
  const obtenerPokemones = async() => {
    try {
      const res = await fetch("https://pokeapi.co/api/v2/pokemon/");
      const data = await res.json();
      //console.log(data.results)
      //maps
      //const arrayNombres = data.results.map(poke => poke.name)
      //console.log(arrayNombres)
      //filtros
      const arrayNombres = data.results.filter(poke => poke.name !== 'bulbasaur')
      console.log(arrayNombres)
    } catch (error) {
      console.log(error)
    }
  }

  obtenerPokemones()


  