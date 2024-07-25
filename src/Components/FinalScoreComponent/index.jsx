import React from 'react'
import quiz from '../../quizData'
import styles from "./styles.module.css"

export default function FinalScoreComponent({ score, setCurrentQuestionIndex, setQuizCompleted }) {

  const restartQuiz = () => {
    setCurrentQuestionIndex(0)
    setQuizCompleted(false)
  }

  return (
    <div className={`container ${styles.mainCont}`}>
      <h1 className='text-center'>Dear user, You've completed the quiz.</h1>
      <h1 className='text-center'>Your final score is {score}.</h1>
      <div className='text-center'>
        <button className={`btn tbn-primary ${styles.btn}`} onClick={restartQuiz}>Play Again</button>
      </div>

    </div>
  )
}
