import { useState } from "react"

function App() {
  const [data, setData] = useState({})
  const [isVisible, setIsVisible] = useState(false)
  const [playerScore, setPlayerScore] = useState(0)
  const [randomQuestion, setRandomQuestion] = useState(null)

  
  let randomCategory = Math.floor(Math.random() * (10 - 1 + 1) + 1)

  
  function toggleVisibility() {
    setIsVisible(!isVisible)
  }

  async function triviaCategory() {
    try{
    const response = await fetch(`http://jservice.io/api/category?id=${randomCategory}`)
    const data = await response.json()
    console.log(data)
    setData(data)
    setRandomQuestion(Math.floor(Math.random() * (data.clues_count)))
    } catch(error) {
      console.log(error)
    }
  }

  function handleQuestionClick() {
    triviaCategory()

  }

  function handleScore(expression){
    let score;
    switch(expression){
      case 'decrease':
        score = playerScore - data.clues?.[randomQuestion].value
        setPlayerScore(score)
        break;
      case 'increase':
        score = playerScore + data.clues?.[randomQuestion].value
        setPlayerScore(score)
        break;
      case 'reset':
        score = 0
        setPlayerScore(score)
        break
    }
  }

  return (
    <div className="flex flex-col items-center bg-gradient-to-b from-teal-500 to-blue-500 w-screen h-screen m-0 p-10">
      <h1>Welcome to Jeopardy!</h1>
      <p>Score: {playerScore}</p>
      <div>
        <button className="px-1 border border-black" onClick={() => handleScore('decrease')}>decrease</button>
        <button className="px-1 border border-black" onClick={() => handleScore('increase')}>increase</button>
        <button className="px-1 border border-black" onClick={() => handleScore('reset')}>reset</button>
      </div>
      <p>Lets play!</p>
      <button className="px-1 border border-black" onClick={handleQuestionClick}>Get question</button>
      <p>Category: {data.title}</p>
      <p>Points: {data.clues?.[randomQuestion].value}</p>
      <p>Question: {data.clues?.[randomQuestion].question}</p>
      <p className={isVisible ? '' : 'hidden'}>Answer: {data.clues?.[randomQuestion].answer}</p>
      <button className="px-1 border border-black" onClick={toggleVisibility}>Reveal Answer</button>
    </div>
  )
}

export default App
