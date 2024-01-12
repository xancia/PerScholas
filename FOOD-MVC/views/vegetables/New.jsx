import React from "react";

const New = () => {
  return (
    <div>
      <h1>New Vegetable Page</h1>
      <form action="/Vegetables" method="POST">
        Name: <input type="text" name="name" />
        <br /> <br />
        Color: <input type="text" name="color" />
        <br /> <br />
        Is Ready To Eat: <input type="checkbox" name="readyToEat" />
        <br /> <br />
        <button>Create Vegetable</button>
      </form>
    </div>
  );
};

export default New;
