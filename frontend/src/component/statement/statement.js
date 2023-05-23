import React, { useState,useEffect, } from "react";
import { useNavigate } from "react-router-dom";
//import swal from "sweetalert2";
import swal from 'sweetalert2';
import axios from "axios";
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/esm/Container';
import Table from 'react-bootstrap/Table';
import "../../../src/assets/Images/Styles/statement.css";

function Statement() {

  
const [state,setStatement] = useState({
    title : "",
    statement: "",
    catogory: "",
    photo: "",

 });
    const handleChangeText = (name, value) => {
        setStatement({...state, [name]: value.target.value});
    }


  useEffect(() => {
      const getStatments = async () => {
        const res = await axios.get(`http://localhost:8003/statement/getStatement`);
        setStatement(res.data);
        console.log(res.data);
      };
      getStatments();
    }, []);


 const addStatment= (e) => {
    e.preventDefault();
    console.log("submit");
      axios.post("http://localhost:8003/statement/addStatment", state)
      .then((res) => {
        swal.fire(`successfully added`);
        navigate("/statement");
      })
      .catch((error) => {
        console.log(error);
      });
  };

 const deleteStatment = async (id) => {
    const res =await axios.delete(`http://localhost:8003/statement/deleteStatement/${id}`)
      .then((res) => {
        console.log(`product ${id} deleted`);
        swal.fire(` succesfully deleted`);
      })
      .then((res) => {
        setStatement(state.filter((list) => list._id !== id));
      });
  };


  const editStatment = async (_id) => {
    navigate(`/updateStatement/${_id}`);
  };

  const navigate = useNavigate();
  return (
    
      
        <Container>
            <br/>
            <br/>
            <h1 className="a"> Add Statement </h1>
            <br/>
            <br/>
          <h3><center>
          This school is a developing school which stated 10 years ago.
          this school is currently available of primary section and we are hoping to develop it to secondary and advanced level sections also.
          </center>
          </h3>

          <br/>
            <br/>

        <Form onSubmit={addStatment}>
         
          <Row className="mb-3">
            <Form.Group
              as={Col}
              md="4"
              controlId="validationFormik101"
              className="position-relative"
            >
              <Form.Label className="bb">Statement Title</Form.Label>
              <Form.Control
                name="title"
                type="text"
                required
                onChange={(val) => handleChangeText("title", val)}/>
               
               
              <Form.Control.Feedback tooltip>Looks good!</Form.Control.Feedback>
            </Form.Group>
            
            <Form.Group
              as={Col}
              md="4"
              controlId="validationFormik102"
              className="position-relative"
            >

              <Form.Control.Feedback tooltip>Looks good!</Form.Control.Feedback>
            </Form.Group>
                
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <br/>
                <Form.Label>Statement</Form.Label>
                 <Form.Control as="textarea" rows={3}
                 name="statement" 
                 required
                 onChange={(val) => handleChangeText("statement", val)}/>
            </Form.Group>

            
          </Row>
          <Row className="mb-3">
            <Form.Group
              as={Col}
              md="6"
              controlId="validationFormik103"
              className="position-relative"
            >
              <Form.Label className=" bb">Category</Form.Label>
              <Form.Control
                name="catogory"
                type="text"
                required
                onChange={(val) => handleChangeText("catogory", val)}/>
              
              <Form.Control.Feedback tooltip>Looks good!</Form.Control.Feedback>

             
            </Form.Group>
          </Row>
          <Form.Group className="position-relative mb-3">
          <Form.Label>link of social media </Form.Label>
              <Form.Control
                name="photo"
                type="text"
                required
                onChange = {(val) => handleChangeText("photo", val)}
               
              />
           
          </Form.Group>
         <center>
          <Button class name="b" type="submit">Submit Statement </Button>
          </center>
        </Form>

<br/>
<br/>
<br/>
<br/>
<div>

        
<Table striped>
      <thead>
        <tr >
          <th>Title</th>
          <th>Statment</th>
          <th>Categort</th>
          <th>link of social media</th>
          <th>Edit</th>
          <th>delete</th>
        </tr>
      </thead>
      <tbody>
      {state.length>0 && state.map((stat, key)=>(       
         <tr key={key}>
          <td>{stat.title}</td>
          <td>{stat.statement}</td>
          <td>{stat.catogory}</td>
          <td>{stat.photo}</td>
          <td><Button variant="primary"  onClick={(e) => editStatment(stat._id, e)}>Edit</Button></td>
          <td><Button variant="danger" onClick={() => deleteStatment(stat._id)}>Delete</Button></td>
        </tr>
        ))}
      </tbody>
    </Table>
    
    </div>


        </Container>

       
    
)}



export default Statement;
