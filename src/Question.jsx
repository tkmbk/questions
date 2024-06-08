import Questions from "./Questions.jsx"
import {useState} from "react"
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

function Question({question}) {
  const{title, info} = question
const [showInfo, setShowInfo] = useState(false);
  return (  
  <article className='question'>
      <header>
        <h5>{title} </h5>
        
        <button className='question-btn' onClick={() => setShowInfo(!showInfo)}>
          {showInfo ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>


      </header>
      {showInfo && <p>{info}</p>}
    </article>

  )
}

export default Question


