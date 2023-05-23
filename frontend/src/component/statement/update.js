import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import swal from "sweetalert2";
import axios from "axios";
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/esm/Container';

function UpdateStatement() {
  const navigate = useNavigate();
  const { _id } = useParams();
  const [state, setStatement] = useState({
    title : "",
    statement: "",
    catogory: "",
    photo: "",
  });
  useEffect(() => {
    const getStatementById = () => {
      axios.get(`http://localhost:8003/statement/getStatement/${_id}`)
        .then((res) => {
          console.log(res.data); 
          setStatement(res.data);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    console.log(_id); 
    getStatementById();
  }, [_id]);

  const handleChangeText = (name, value) => {
    setStatement({ ...state, [name]: value.target.value });
    console.log(state);
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    const statementData = {
      title: state.title,
      statement: state.statement,
      catogory: state.catogory,
      photo: state.photo,
    };

    axios
      .put(`http://localhost:8003/statement/updatestatement/${_id}`, statementData)
      .then(() => {
        swal.fire("Updated successfully");
        navigate("/statement");
      })
      .catch((error) => {
        console.log(error);
      });
  };

return(
    <Container>
    <br/>
    <br/>
    <h1> Update Statement </h1>
    <br/>
    <br/>


<Form onSubmit={handleUpdate}>
  <Row className="mb-3">
    <Form.Group
      as={Col}
      md="4"
      controlId="validationFormik101"
      className="position-relative"
    >
      <Form.Label>Statement Title</Form.Label>
      <Form.Control
        name="title"
        type="text"
        value={state.title}
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
         value={state.statement}
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
      <Form.Label>Category</Form.Label>
      <Form.Control
        name="catogory"
        type="text"
        value={state.catogory}
        onChange={(val) => handleChangeText("catogory", val)}/>
      
      <Form.Control.Feedback tooltip>Looks good!</Form.Control.Feedback>

     
    </Form.Group>
  </Row>
  <Form.Group className="position-relative mb-3">
  <Form.Label>Photo</Form.Label>
      <Form.Control
        name="photo"
        type="text"r
        value={state.photo}
        onChange = {(val) => handleChangeText("photo", val)}
       
      />
   
  </Form.Group>
 
  <Button type="submit">Submit form</Button>
</Form>
 </Container>

);

}
export default UpdateStatement;
