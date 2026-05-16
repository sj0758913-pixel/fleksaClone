import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <>
      <nav className="navbar navbar-dark navbar-expand-md" style={{ backgroundColor: 'yellow' }}>
        <div className='container-fluid navimg'>
          <a href="" className='navbar-brand'>
            <img src="https://fleksa.com/wp-content/uploads/2023/01/fleksa-logo.png" alt="" className='weblogo' />
          </a>
          <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span className='navbar-toggler-icon'></span>
          </button>

          <div className="menu navbar-collapse collapse " id="navbarNav">
            <ul className="navbar-nav ms-auto ">
              <li><Link to="/" className="nav-link" style={{ color: 'black' }}>Product</Link></li>
              <li><Link to="/Blogs" className="nav-link" style={{ color: 'black' }}>Blogs</Link></li>
              <li><Link to="/Ordering-System" className="nav-link" style={{ color: 'black' }}>Ordering System </Link></li>
              <li><Link to="/contact" className="nav-link" style={{ color: 'black' }}>Zero-Commision Delivery</Link></li>
              <li><Link to="/Login" className="nav-link" style={{ color: 'black' }}>Login </Link></li>
          
              
            </ul>
          </div>




        </div>

      </nav>
    </>
  )
}

export default Header
