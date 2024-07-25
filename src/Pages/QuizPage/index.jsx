import React, { useState } from 'react'
import quiz from '../../quizData.js'
import QuizComponent from '../../Components/QuizComponent'
import FinalScoreComponent from '../../Components/FinalScoreComponent/index.jsx'
import HeaderComponent from '../../Components/HeaderComponent/index.jsx'
import Navbar from '../../Components/Navbar/index.jsx'
import styles from "./styles.module.css"

export default function QuizPage() {

    const [score, setScore] = useState(0)

    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)

    const [quizCompleted, setQuizCompleted] = useState(false)

    const handleNextQuestion = () => {
        if (currentQuestionIndex < quiz.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1)
        } else {
            setQuizCompleted(true)
            console.log("Total score: " + score)
        }
    }

    const currentQuestion = quiz[currentQuestionIndex]

    return (
        <div>
            <Navbar />
            <div className='container'>
                {(!quizCompleted) && <h1 className={`text-center ${styles.heading}`}>Try to answer all the questions correctly</h1>}
                {
                    !quizCompleted ? (
                        <QuizComponent key={currentQuestionIndex}
                            question={currentQuestion.question}
                            answer={currentQuestion.ans}
                            options={currentQuestion.options}
                            serialNum={currentQuestion.sr}
                            setScore={setScore}
                            score={score}
                            handleNextQuestion={handleNextQuestion} />
                    ) : (
                        <FinalScoreComponent score={score} setCurrentQuestionIndex={setCurrentQuestionIndex} setQuizCompleted={setQuizCompleted} />
                    )
                }
            </div>


        </div>
    )
}
