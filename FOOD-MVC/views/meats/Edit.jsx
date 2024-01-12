import React from 'react'

const Edit = ({meat , index}) => {
  return (
    <div>
        <h1>Edit meat Page</h1>
      <form action={`/meats/${index}?_method=PUT`} method="POST">
        Name: <input type="text" name="name" defaultValue={meat.name}/>
        <br /> <br />
        State: <input type="text" name="state" defaultValue={meat.state}/>
        <br /> <br />
        Is Ready To Eat: <input type="checkbox" name="readyToEat" defaultChecked={meat.readyToEat}/>
        <br /> <br />
        <button>Update meat</button>
      </form>
    </div>
  )
}

export default Edit