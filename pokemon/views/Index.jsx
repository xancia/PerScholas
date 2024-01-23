import React, { Fragment } from "react";


const regEx = /(\b[a-z](?!\s))/g;

export default function Index({ pokemon }) {
  return (
    <>
      <h2>Pokemon List</h2>
      {pokemon && (
        <ul>
          {pokemon.map((mon, i) => (
            <Fragment key={mon.name}>
              <li>
                <a href={`/pokemon/${i}`}>
                  {mon.name.replace(regEx, function (x) {
                    return x.toUpperCase();
                  })}
                </a>
              </li>
            </Fragment>
          ))}
        </ul>
      )}
      {!pokemon && (
        <>
          <p>No Pokemon Here</p>
        </>
      )}
    </>
  );
}
