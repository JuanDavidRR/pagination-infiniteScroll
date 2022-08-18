import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

const Card = ({ character }) => {
  return (
    <article className="card">
      <LazyLoadImage
      className="skeleton"
      alt={character.name}
      src={character.image} />
      <div className="card-body">
        <h2>{character.name}</h2>
        <span>{character.status}</span>
        <p>{character.species}</p>
        <p>{character.gender}</p>
        <p>{character.origin.name}</p>
      </div> 
    </article>
  );
};

export default Card;
