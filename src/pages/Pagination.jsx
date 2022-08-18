import axios from "axios";
import React, { lazy, Suspense, useEffect, useState } from "react";
import Loading from "../components/Loading";

import { Link, useParams } from "react-router-dom";

import "../styles/card.css";
import "../styles/loading.css";

const Card = lazy(() => import("../components/Card"));

const Pagination = () => {
  const [characters, setCharacters] = useState([]);
  let params = useParams();

  const getCharacters = async (page) => {
    axios
      .get(`https://rickandmortyapi.com/api/character/?page=${page}`)
      .then(({ data }) => {
        const newCharacters = [];
        //añadiendo los personajes al array
        data.results.map((c) => newCharacters.push(c));
        //Guardando los personajes nuevos y antiguos en characters
        setCharacters(newCharacters);
      });
  };

  useEffect(() => {
    getCharacters(params.type);
  }, [params.type]);

  return (
    <Suspense fallback={<Loading />}>
      <main>
        <section className="cards">
          {characters.map((character) => {
            return <Card key={character.id} character={character} />;
          })}
        </section>
        <nav>
          <Link to={`/pagination/page/1`}>
            <button onClick={() => getCharacters(1)}>1</button>
          </Link>
          <Link to={`/pagination/page/2`}>
            <button onClick={() => getCharacters(2)}>2</button>
          </Link>
          <Link to={`/pagination/page/3`}>
            <button onClick={() => getCharacters(3)}>3</button>
          </Link>
          <Link to={`/pagination/page/4`}>
            <button onClick={() => getCharacters(4)}>4</button>
          </Link>
          <Link to={`/pagination/page/5`}>
            <button onClick={() => getCharacters(5)}>5</button>
          </Link>
          <Link to={`/pagination/page/6`}>
            <button onClick={() => getCharacters(6)}>6</button>
          </Link>
          <Link to={`/pagination/page/7`}>
            <button onClick={() => getCharacters(7)}>7</button>
          </Link>
          <Link to={`/pagination/page/8`}>
            <button onClick={() => getCharacters(8)}>8</button>
          </Link>
          <Link to={`/pagination/page/9`}>
            <button onClick={() => getCharacters(9)}>9</button>
          </Link>
          <Link to={`/pagination/page/10`}>
            <button onClick={() => getCharacters(10)}>10</button>
          </Link>
        </nav>
      </main>
    </Suspense>
  );
};

export default Pagination;
