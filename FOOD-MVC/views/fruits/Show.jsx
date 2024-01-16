import React from 'react'

const Show = ({fruit, index}) => {
  return (
    <div>
        <h2><a href="/fruits">Back to Index</a></h2>
        <h1>Show Page</h1>
        <p>The {fruit.name} is {fruit.color}</p>
        <p>{fruit.readyToEat ? "It's ready to eat" : "It's not ready to eat..."}</p>
        <a href={`/fruits/${fruit._id}/edit`}><button>Edit</button></a>
        <br />

        <form action={`/fruits/${fruit._id}?_method=DELETE`} method='POST'>
            <button>Delete</button>
        </form>
    </div>
  )
}

export default Show
