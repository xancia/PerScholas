import React from "react";

const Index = ({ meats }) => {
  return (
    <div>
      <h1>Index Page</h1>
      <nav>
        <a href="/meats/new">Create a New meat</a>
      </nav>
      <ul>
        {meats.map((meat, index) => (
          <li key={index}>
            The <a href={`/meats/${index}`}>{meat.name} </a>
            is {meat.state}
            <br />
            {meat.readyToEat
              ? "It's ready to eat"
              : "It's not ready to eat..."}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Index;
