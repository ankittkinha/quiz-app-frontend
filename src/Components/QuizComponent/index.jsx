import React, { useEffect, useState } from 'react'
import styles from "./styles.module.css"

export default function QuizComponent({ question, answer, options, serialNum, handleNextQuestion, setScore, score }) {
    //add timer of 10 seconds
    const [timer, setTimer] = useState(10)

    useEffect(() => { //Until timer is zero or user press submit
        const intervalID = setInterval(() => {
            setTimer((prevTimer) => {
                if (prevTimer > 0) {
                    return prevTimer - 1
                } else {
                    clearInterval(intervalID)
                    return 0
                }
            })
        }, 1000)

        return () => clearInterval(intervalID)
    }, [])


    useEffect(() => {
        if (timer < 1) {

            handleNextQuestion()
        }
    }, [timer])

    const [selectedOption, setSelectedOption] = useState("")

    const handleOptionChange = (e) => {
        setSelectedOption(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (selectedOption != "") {
            if (selectedOption === answer) {
                setScore((prevScore) => {
                    const newScore = prevScore + 2
                    console.log("Score after update: " + newScore)
                    return newScore
                })
            }

            console.log(selectedOption)
            // alert("You have selected this option" + selectedOption)
            handleNextQuestion()
            console.log("Total score: " + score)
        }
    }

    return (
        <div className='container'>

            <div className={`${styles.timerContainer}`}>
                <h1 className={`text-center ${(timer > 3) ? styles.timer : styles.timer1}`}>{timer}</h1>
            </div>

            <div className={`${styles.questionContainer}`}>
                <div className={`${styles.questionAndOptions}`}>
                    <h2 className={`text-center`}> {serialNum + ". "}   {question}  <br /></h2>
                    {
                        options.map((option, index) => (
                            <div key={index} className={`${styles.optionX}`} >
                               
                                    <input type='radio' value={option} checked={selectedOption === option} id={`option-${index}`} onChange={handleOptionChange} />
                                    
                                
                                    <label htmlFor={`option-${index}`}>{option}</label>
                            </div>
                        ))
                    }
                </div>
            </div>

            <div className='text-center'>
            <button className={`btn btn-primary text-center ${styles.btn}`} onClick={handleSubmit}>Submit</button>
            </div>
            

        </div>
    )
}