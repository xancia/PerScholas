import React from 'react'

const Edit = ({vegetable , index}) => {
  return (
    <div>
        <h1>Edit vegetable Page</h1>
      <form action={`/vegetables/${index}?_method=PUT`} method="POST">
        Name: <input type="text" name="name" defaultValue={vegetable.name}/>
        <br /> <br />
        Color: <input type="text" name="color" defaultValue={vegetable.color}/>
        <br /> <br />
        Is Ready To Eat: <input type="checkbox" name="readyToEat" defaultChecked={vegetable.readyToEat}/>
        <br /> <br />
        <button>Update vegetable</button>
      </form>
    </div>
  )
}

export default Edit