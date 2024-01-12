import React from "react";

const New = () => {
  return (
    <div>
      <h1>New meat Page</h1>
      <form action="/meats" method="POST">
        Name: <input type="text" name="name" />
        <br /> <br />
        State: <input type="text" name="state" />
        <br /> <br />
        Is Ready To Eat: <input type="checkbox" name="readyToEat" />
        <br /> <br />
        <button>Create meat</button>
      </form>
    </div>
  );
};

export default New;
