import axios from "axios";
import React, { lazy, Suspense, useEffect, useState } from "react";
import Loading from "../components/Loading";
import '../styles/card.css'
import '../styles/loading.css'

const Card = lazy(()=> import('../components/Card'))
const InfiniteScroll = () => {
  
  let page = 1
  const [characters, setCharacters] = useState([]);

  const getCharacters = async () => {
    //Creando array para almacenar los personajes
    const newCharacters = []
    //Usando axios para obtener los personajes
     axios.get(`https://rickandmortyapi.com/api/character/?page=${page}`)
     .then(({data}) => {
      //añadiendo los personajes al array
      data.results.map(c => newCharacters.push(c))
      //Guardando los personajes nuevos y antiguos en characters
     setCharacters((character)=> [...character, ...newCharacters])
    })
    page++
  };

  //Método para leer que llegamos abajo en el scroll
  const handleScroll = (e) => {

    const scrollHeight = e.target.documentElement.scrollHeight;
    const currentHeight = Math.ceil(
      e.target.documentElement.scrollTop + window.innerHeight
    );
    //Si nuestra posicion del scroll es mayor a la altura del scroll
    //Ejecuta nuevamente la función de getCharacters
    if (currentHeight + 1 >= scrollHeight) {
      getCharacters();
    }
  };

  useEffect(() => {
    getCharacters()
    window.addEventListener('scroll', handleScroll)
  }, [])

  return (
    <main>
      <Loading/>
      <Suspense fallback={<Loading/>}>
      <section className="cards">
        {characters.map(character =>{
          return(
            <Card key={character.id} character={character}/>
          )
        })}
      </section>
      </Suspense>
    </main>
  );
};

export default InfiniteScroll;
