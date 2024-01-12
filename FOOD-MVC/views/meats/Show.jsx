import React from 'react'

const Show = ({meats, index}) => {
  return (
    <div>
        <h2><a href="/meats">Back to Index</a></h2>
        <h1>Show Page</h1>
        <p>The {meats.name} is {meats.state}</p>
        <p>{meats.readyToEat ? "It's ready to eat" : "It's not ready to eat..."}</p>
        <a href={`/meats/${index}/edit`}><button>Edit</button></a>
        <br />

        <form action={`/meats/${index}?_method=DELETE`} method='POST'>
            <button>Delete</button>
        </form>
    </div>
  )
}

export default Show
