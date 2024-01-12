import React from 'react'

const Show = ({vegetables, index}) => {
  return (
    <div>
        <h2><a href="/vegetables">Back to Index</a></h2>
        <h1>Show Page</h1>
        <p>The {vegetables.name} is {vegetables.color}</p>
        <p>{vegetables.readyToEat ? "It's ready to eat" : "It's not ready to eat..."}</p>
        <a href={`/vegetables/${index}/edit`}><button>Edit</button></a>
        <br />

        <form action={`/vegetables/${index}?_method=DELETE`} method='POST'>
            <button>Delete</button>
        </form>
    </div>
  )
}

export default Show
