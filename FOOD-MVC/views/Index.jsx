import React from "react";

const Index = ({ fruits }) => {
  return (
    <div>
      <h1>Index Page</h1>
      <ul>
        {fruits.map((fruit, index) => (
          <li key={index}>
            The <a href={`/fruits/${index}`}>{fruit.name} </a>
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
