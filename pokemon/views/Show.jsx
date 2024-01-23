import React from "react";

const regEx = /(\b[a-z](?!\s))/g;

export default function Show({ pokemon }) {
  return (
    <div>
      <h4><a href={`/pokemon`}>Back to Index</a></h4>
      <h2>
        {pokemon.name.replace(regEx, (x)=> {
          return x.toUpperCase();
        })}
      </h2>
      <img src={`${pokemon.img}.jpg`} alt="" />
    </div>
  );
}
