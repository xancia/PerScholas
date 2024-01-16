import React from "react";

const Index = ({ fruits }) => {
  return (
    <div>
      <h1>Index Page</h1>
      <nav>
        <a href="/fruits/new">Create a New Fruit</a>
      </nav>
      <ul>
        {fruits.map((fruit, index) => (
          <li key={index}>
            The <a href={`/fruits/${fruit._id}`}>{fruit.name} </a>
            is {fruit.color}
            <br />
            {fruit.readyToEat
              ? "It's ready to eat"
              : "It's not ready to eat..."}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Index;
