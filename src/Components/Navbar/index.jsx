import React from 'react'
import { Link } from 'react-router-dom'
import styles from "./styles.module.css"

export default function Navbar() {
  const user = localStorage.getItem("user")
  const token = localStorage.getItem("token")
  const displayName = user && user.length > 5 ? user.substring(0, 5) : user;

  return (
    <div>
      <nav className={`navbar navbar-expand-lg bg-body-tertiary ${styles.mainNav} `}>
        <div className={`container-fluid ${styles.navBackground}`}>
          <Link className={`navbar-brand ${styles.appName}`} to="/">The <span className={`${styles.appName1}`} >Quiz</span></Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to={token ? "/logout" : "/login"} className={`nav-link active btn btn-primary ${styles.btn}`} aria-current="page" href="#">{token ? displayName : "Login"}</Link>
              </li>
            </ul>

          </div>
        </div>
      </nav>
    </div>
  )
}
