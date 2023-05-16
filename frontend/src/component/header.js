import React , {useEffect, useState} from "react";
//import "../assets/styles/header.css";
//import { Link, useNavigate } from "react-router-dom";
//import axios from "axios";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';

function Header() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
        
          <Navbar.Brand href="#home">Home </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Human Resources</Nav.Link>
            <Nav.Link href="#features">Physical Resources</Nav.Link>
            <Nav.Link href="#pricing">Statement</Nav.Link>
          </Nav>
          <Navbar.Collapse className="justify-content-end">
            <Nav>
            <Nav.Link href="#pricing">Login</Nav.Link>
            <Nav.Link href="#pricing">Logout</Nav.Link>
            </Nav>
           
          </Navbar.Collapse>
            

        </Container>
      </Navbar>

    </>
  );
}



export default Header;