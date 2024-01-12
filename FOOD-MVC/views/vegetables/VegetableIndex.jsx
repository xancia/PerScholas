import React from "react";

const Index = ({ vegetables }) => {
  return (
    <div>
      <h1>Index Page</h1>
      <nav>
        <a href="/vegetables/new">Create a New vegetable</a>
      </nav>
      <ul>
        {vegetables.map((vegetable, index) => (
          <li key={index}>
            The <a href={`/vegetables/${index}`}>{vegetable.name} </a>
            is {vegetable.color}
            <br />
            {vegetable.readyToEat
              ? "It's ready to eat"
              : "It's not ready to eat..."}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Index;