import React from 'react'

const Show = ({fruits, index}) => {
  return (
    <div>
        <h1>Show Page</h1>
        <p>The {fruits.name} is {fruits.color}</p>
        <p>{fruits.readyToEat ? "It's ready to eat" : "It's not ready to eat..."}</p>
        <a href={`/fruits/${index}/edit`}><button>Edit</button></a>
        <br />

        <form action={`/fruits/${index}?_method=DELETE`} method='POST'>
            <button>Delete</button>
        </form>
    </div>
  )
}

export default Show
