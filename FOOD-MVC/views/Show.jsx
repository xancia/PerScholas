import React from 'react'

const Show = ({fruits}) => {
  return (
    <div>
        <h1>Show Page</h1>
        <p>The {fruits.name} is {fruits.color}</p>
        <p>{fruits.readyToEat ? "It's ready to eat" : "It's not ready to eat..."}</p>
    </div>
  )
}

export default Show
