import data from "./data.js"
import Question from "./Question.jsx"
import {useState} from "react"

function Questions() {
  const [questions, setQuestions] = useState(data)

  return (
    <>
    <section className='container'>
      <h1>Questions</h1>
     {questions.map((question) => (
      <Question question={question} key={question.id} />
     ))}
       </section>   
    </>
  )
}

export default Questions
