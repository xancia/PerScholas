import React from 'react'

const Edit = ({fruit , index}) => {
  return (
    <div>
        <h1>Edit Fruit Page</h1>
      <form action={`/fruits/${index}?_method=PUT`} method="POST">
        Name: <input type="text" name="name" defaultValue={fruit.name}/>
        <br /> <br />
        Color: <input type="text" name="color" defaultValue={fruit.color}/>
        <br /> <br />
        Is Ready To Eat: <input type="checkbox" name="readyToEat" defaultChecked={fruit.readyToEat}/>
        <br /> <br />
        <button>Update Fruit</button>
      </form>
    </div>
  )
}

export default Edit