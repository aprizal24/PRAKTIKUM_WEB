import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import MyImg from '/Users/rian/Documents/MyDoc/Semester 5/PraktikumProgramweb/MODUL3/Praktikum/ilab/src/img/logo-ilab.png';

function Navbar() {
  return (
    <nav className="d-flex justify-content-between align-items-center p-3">
      <div>
        <img src={MyImg} alt="" width={60} />
      </div>
      <ul className="nav navcstm">
        <li className="nav-item">
          <Link to="Home" className="nav-link">Home</Link>
        </li>
        <li className="nav-item">
          <Link to="/AboutUs" className="nav-link">About Us</Link>
        </li>
        <li className="nav-item">
          <Link to="/Contact" className="nav-link">Contact</Link>
        </li>
      </ul>
      <div className="d-flex">
        <Button variant="primary" className="m-2">SIGN UP</Button>
        <Button variant="light" className="m-2">  LOGIN  </Button>
      </div>
    </nav>
  );
}

export default Navbar;
