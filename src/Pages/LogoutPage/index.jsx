import React from 'react'
import styles from "./styles.module.css"
import Navbar from "../../Components/Navbar"
import { useNavigate } from 'react-router-dom'

export default function LogoutPage() {

  const navigate = useNavigate()

  const handleLogout = () => {
    localStorage.removeItem("token")
    navigate("/")
  }

  return (
    <div>
      <Navbar />
      <div className={`container ${styles.mainContainer}`}>
        <h2 className='text-center'>Hii there, click on the button below to logout</h2>
        <div className='text-center'>
          <button className={`${styles.btn}`} onClick={handleLogout} >Logout</button>
        </div>

      </div>
    </div>
  )
}
