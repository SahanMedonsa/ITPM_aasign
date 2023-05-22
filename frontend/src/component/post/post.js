import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert2";
import axios from "axios";
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/esm/Container';

function Post() {

 const [post,setPost] = useState({
    caption : "",
    catgory: "",
    photo: "",

 });
    const handleChangeText = (name, value) => {
        setPost({...post, [name]: value.target.value});
    }


 const addPost= (e) => {
    e.preventDefault();
    console.log("submit");
    axios
      .post("http://localhost:8093/post/addPost", post)
      .then(() => {
        swal.fire(`successfully added`);
        navigate("/post");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const navigate = useNavigate();
  return (
    
      
        <Container>
            <br/>
            <br/>
            <h1> headline 1 </h1>
            <br/>
            <br/>


        <Form onSubmit={addPost}>
          <Row className="mb-3">
            <Form.Group
              as={Col}
              md="4"
              controlId="validationFormik101"
              className="position-relative"
            >
              <Form.Label>Post Title</Form.Label>
              <Form.Control
                name="caption"
                type="text"
                onChange={(val) => handleChangeText("caption", val)}/>
               
              
              <Form.Control.Feedback tooltip>Looks good!</Form.Control.Feedback>
            </Form.Group>
            {/*
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
                <Form.Label>post</Form.Label>
                 <Form.Control as="textarea" rows={3}
                 name="statement" 
                 onChange={(val) => handleChangeText("statement", val)}/>
            </Form.Group>
  */}
            
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
                onChange={(val) => handleChangeText("catogory", val)}/>
              
              <Form.Control.Feedback tooltip>Looks good!</Form.Control.Feedback>

             
            </Form.Group>
          </Row>
          <Form.Group className="position-relative mb-3">
          <Form.Label>Photo</Form.Label>
              <Form.Control
                name="photo"
                type="text"
                onChange = {(val) => handleChangeText("photo", val)}
               
              />
           
          </Form.Group>
         
          <Button type="submit">Submit form</Button>
        </Form>
        </Container>
    
)}



export default Post;
