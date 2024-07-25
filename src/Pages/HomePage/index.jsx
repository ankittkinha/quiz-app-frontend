import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../../Components/Navbar'
import styles from "./styles.module.css"

export default function HomePage() {
  return (
    <div>
      <Navbar />
      <div className={`container ${styles.homeContainer}`}>
        <h1 className={`text-center`}>Hii there! We have an interesting quiz for you.</h1>
        <h2 className={`text-center`}>You'll get 2 points for a correct answer and none for an incorrect answer.</h2>
        <h2 className={`text-center`}>Your final score will be displayed once the quiz is over.</h2>
        <Link className={`text-center btn btn-primary ${styles.btn}`} to={'/quiz'} >Let's Start</Link>
      </div>

    </div>
  )
}
