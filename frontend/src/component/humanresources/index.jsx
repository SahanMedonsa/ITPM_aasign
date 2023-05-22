import React, { useEffect, useState } from "react";
import {
  Alert,
  Button,
  Card,
  CardBody,
  CardHeader,
  Col,
  Form,
  FormGroup,
  Input,
  Label,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Row,
  Table,
} from "reactstrap";
import axios from "axios";
import { API_URL } from "../../constant";
import SearchBar from "../../layout/searchbar";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import { CSVLink } from "react-csv";
import { jsPDF } from "jspdf";
import "jspdf-autotable";
const HumanResources = (props) => {
  const Human_Resources_Router = "humanResourcesRouter/";
  const [Principals, setPrincipals] = useState("");
  const [Primary_Teachers, setPrimary_Teachers] = useState("");
  const [Secondary_Teachers, setSecondary_Teachers] = useState("");
  const [Tertiary_Teachers,  setTertiary_Teachers] = useState("");
  const [Primary_Students, setPrimary_Students] = useState("");
  const [Secondary_Students, setSecondary_Students] = useState("");
  const [Tertiary_Students, setTertiary_Students] = useState("");
  const [Category_1, setCategory_1] = useState("");
  const [Category_2, setCategory_2] = useState("");
  const [Teacher_Count, setTeacher_Count] = useState("");
  const [Unavaialbility_of_Teachers, setUnavaialbility_of_Teachers] = useState("");
  const [Response, setResponse] = useState("");
  const [Dropdown, setDropdown] = useState("");
  const [Keyword, setKeyword] = useState("");
  //Update
  const [uPrincipals, setuPrincipals] = useState("");
  const [uPrimary_Teachers, setuPrimary_Teachers] = useState("");
  const [uSecondary_Teachers, setuSecondary_Teachers] = useState("");
  const [uTertiary_Teachers, setuTertiary_Teachers] = useState("");
  const [uPrimary_Students, setuPrimary_Students] = useState("");
  const [uSecondary_Students, setuSecondary_Students] = useState("");
  const [uTertiary_Students, setuTertiary_Students] = useState("");
  const [uCategory_1, setuCategory_1] = useState("");
  const [uCategory_2, setuCategory_2] = useState("");
  const [uTeacher_Count, setuTeacher_Count] = useState("");
  const [uUnavaialbility_of_Teachers, setuUnavaialbility_of_Teachers] = useState("");
  const [modal, setModal] = useState(false);
  const [UId, setUId] = useState("");
  const notify = () => toast.success("Successfully Saved !!");
  //Validations
  const [Primary_TeachersValidation, setPrimary_TeachersValidation] = useState("");
  const [Secondary_TeachersValidation, setSecondary_TeachersValidation] = useState("");
  const [Tertiary_TeachersValidation, setTertiary_TeachersValidation] = useState("");
  const [Primary_StudentsValidation, setPrimary_StudentsValidation] = useState("");
  const [Secondary_StudentsValidation, setSecondary_StudentsValidation] = useState("");
  const [Tertiary_StudentsValidation, setTertiary_StudentsValidation] = useState("");
  

  const selectedCategory = (data) => {
    console.log("select", data);
    setCategory_1(data.selectedOptions[0].innerText);
    setCategory_2(data.value);
  };
  const getAllData = () => {
    axios.get(API_URL + humanResourcesRouter + "get/").then((response) => {
      setResponse(response.data);
    });
  };
  const toggle = () => {
    setModal(true);
  };
  const updateData = () => {
    const model = {
      Principals: uPrincipals,
      Primary_Teachers: uPrimary_Teachers,
      Secondary_Teachers: uSecondary_Teachers,
      Tertiary_Teachers: uTertiary_Teachers,
      Primary_Students: uPrimary_Students,
      Secondary_Students: uSecondary_Students,
      Tertiary_Students: uTertiary_Students,
      Category_1: uCategory_1,
      Category_2: uCategory_2,
      Teacher_Count: uTeacher_Count,
      Unavaialbility_of_Teachers: uUnavaialbility_of_Teachers,
    };

    console.log("Modal", model);
    console.log("UID", UId);
    axios
      .put(API_URL + humanResourcesRouter + "update/" + UId, model)
      .then((response) => {
        console.log("Update Response==>", response);
        getAllData();
        setModal(false);
        notify("Successfully Updated Data !!!");
      });
  };
  const deleteData = (data) => {
    axios
      .delete(API_URL + humanResourcesRouter + "delete/" + data._id)
      .then((response) => {
        console.log("response", response);
        notify("Successfully Deleted !!");
        getAllData();
      });
  };
  const postData = () => {
    if (Principals== "") {
      sePrincipalstValidation("Please Enter Principals Count !!");
    } else if (Primary_Teachers == "") {
      setPrimary_TeachersValidation("Please Enter Primary Teachers Count !!");
    } else if (Secondary_Teachers == "") {
      setSecondary_TeachersValidation("Please Enter Secondary Teachers Count !!");
    } else if (Tertiary_Teachers == "") {
      setTertiary_TeachersValidation("Please Enter Tertiary Teachers Count !!");
    } else if (Primary_Students == "") {
      setPrimary_StudentsValidation("Please Enter Primary Students Count !!");
    } else if (Secondary_Teachers == "") {
      setSecondary_StudentsValidation("Please Enter Secondary Students Count !!");
    } else if (Tertiary_Teachers == "") {
      setTertiary_StudentsValidation("Please Enter Tertiary Students Count !!");
    } else if (Category_1 == "") {
      setCategory_1Validation("Please Enter Category 1 !!");
    } else if (Category_2 == "") {
      setCategory_2Validation("Please Enter Category 2 !!");
    } else if (Teacher_Count == "") {
      setTeacher_CountValidation("Please Enter Teachers Count !!");
    } else if (Unavaialbility_of_Teachers == "") {
      setUnavaialability_of_TeachersValidation("Please Enter Unavaialable Teachers Count !!");
    } else {
      const model = {
        Principals: Principals,
        Primary_Teachers: Primary_Teachers,
        Secondary_Teachers: Secondary_Teachers,
        Tertiary_Teachers: Tertiary_Teachers,
        Primary_Students: Primary_Students,
        Secondary_Students: Secondary_Students,
        Tertiary_Students: Tertiary_Students,
        Category_1: Category_1,
        Category_2: Category_2,
        Teacher_Count: Teacher_Count,
        Unavaialbility_of_Teachers: Unavaialbility_of_Teachers,
      };
      console.log("model", model);
      axios
        .post(API_URL + humanResourcesRouter + "save", model)
        .then((response) => {
          setPrincipals("");
          setPrimary_Teachers("");
          setSecondary_Teachers("");
          setTertiary_Teachers("");
          setPrimary_Students("");
          setSecondary_Students("");
          setTertiary_Students("");
          setCategory_1("");
          setCategory_2("");
          setTeacher_Count("");
          setUnavaialbility_of_Teachers("");
          Alert("Successfully Created Data!!");
          getAllData();
        });
      notify();
    }
  };
  useEffect(() => {
    if (!Response) {
      getAllData();
    }
  });
  const editButton = (data) => {
    setPrincipals(data.Principals);
    setPrimary_Teachers(data.Primary_Teachers);
    setSecondary_Teachers(data.Secondary_Teachers);
    setTertiary_Teachers(data.Tertiary_Teachers);
    setPrimary_Students(data.Primary_Students);
    setSecondary_Students(data.Secondary_Students);
    setTertiary_Students(data.Tertiary_Students);
    setCategory_1(data.Category_1);
    setCategory_2(data.Category_2);
    setTeacher_Count(data.Teacher_Count);
    setUnavaialbility_of_Teachers(data.Unavaialbility_of_Teachers);
    toggle();
  };
  const csvData = Response;
  const savePDF = async() => {
    const doc = new jsPDF("p","pt","a4");

    doc.setFontSize(15);
    doc.text("All Report", 40, 40);
    var data
    var price=0
    var count = 0
  
    await axios
      .get(API_URL + humanResourcesRouter + "get/")
    .then(res => {
        if(res.data){

            console.log(res.data)

            data = res.data
                        
            const headers = [["ID","Principals","Primary Teachers","Secondary Teachers","Tertiary Teachers","Primary Students","Secondary Students","Tertiary Students","Category 1","Category 2","Teacher Count","Unavaialbility of Teachers"]];
            const datas = Response.map(elt=> [++count,elt.principals,elt.primaryTeachers,elt.secondaryTeachers,elt.tertiaryTeachers,elt.primaryStudents,elt.secondaryStudents,elt.tertiaryStudents,elt.category1,elt.category2,elt.teacherCount,elt.unavaialabilityofTeachers]);
         

            let content = {
              startY: 50,
              head: headers,
              body: datas
            };

            data.map(res=>{
                price=price+res.cost
            });

            
            doc.autoTable(content)
        }else{
          //  sweat("ERROR!", "NIC ERROR!", "error")
        }
    })
    doc.save("report.pdf")
  };
  return (
    <div>
         {/* <CSVLink data={csvData}> Download Report</CSVLink> */}
         <br></br>
         <br></br>
         <button className="btn btn-primary" onClick={()=>savePDF()}>Download Report</button>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={() => setModal(false)}>Modal title</ModalHeader>
        <ModalBody>
          <Form>
            <Row>
              <Col md={6}>
                <FormGroup>
                  <Label>Principals</Label>
                  <Input
                    value={uPrincipals}
                    onChange={(e) => setuPrincipals(e.target.value)}
                  />
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup>
                  <Label>Primary_Teachers</Label>
                  <Input
                    value={uPrimary_Teachers}
                    onChange={(e) => setuPrimary_Teachers(e.target.value)}
                  />
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col md={6}>
                <FormGroup>
                  <Label>Secondary_Teachers</Label>
                  <Input
                    value={uSecondary_Teachers}
                    onChange={(e) => setuSecondary_Teachers(e.target.value)}
                  />
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup>
                  <Label>Tertiary_Teachers</Label>
                  <Input
                    onChange={(e) => setuTertiary_Teachers(e.target.value)}
                    className="form-control"
                    value={uTertiary_Teachers}
                  />
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col md={6}>
                <FormGroup>
                  <Label>Primary_Students</Label>
                  <Input
                    value={uPrimary_Students}
                    onChange={(e) => setuPrimary_Students(e.target.value)}
                  />
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col md={6}>
                <FormGroup>
                  <Label>Secondary_Students</Label>
                  <Input
                    value={uSecondary_Students}
                    onChange={(e) => setuSecondary_Students(e.target.value)}
                  />
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col md={6}>
                <FormGroup>
                  <Label>Tertiary_Students</Label>
                  <Input
                    value={uTertiary_Students}
                    onChange={(e) => setuTertiary_Students(e.target.value)}
                  />
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col md={6}>
                <FormGroup>
                  <Label>Category_1</Label>
                  <Input
                    value={uCategory_1}
                    onChange={(e) => setuCategory_1(e.target.value)}
                  />
                   </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col md={6}>
                <FormGroup>
                  <Label>Category_2</Label>
                  <Input
                    value={uCategory_2}
                    onChange={(e) => setuCategory_2(e.target.value)}
                  />
                   </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col md={6}>
                <FormGroup>
                  <Label>Teacher_Count</Label>
                  <Input
                    value={uTeacher_Count}
                    onChange={(e) => setuTeacher_Count(e.target.value)}
                  />
                   </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col md={6}>
                <FormGroup>
                  <Label>Unavaialbility_of_Teachers</Label>
                  <Input
                    value={uUnavaialbility_of_Teachers}
                    onChange={(e) => setuUnavaialbility_of_Teachers(e.target.value)}
                  />
                </FormGroup>
              </Col>
            </Row>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={() => updateData()}>
            Update
          </Button>
          <Button color="secondary" onClick={() => setModal(false)}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
      <br></br>
      <br></br>
      <SearchBar
        Keyword={Keyword}
        setKeyword={setKeyword}
        Response={Response}
        setResponse={setResponse}
        Router={humanResourcesRouter}
      ></SearchBar>
      <br></br>
      <div className="row">
        <div className="col-md-3"></div>
        <div className="col-md-6">
          <Card>
            <CardHeader>Create Human Resources Details</CardHeader>
            <CardBody>
              <Form>
                <div className="row">
                  <div className="col-md-6">
                    <FormGroup>
                      <Label>Primary_Teachers</Label>
                      <Input
                        onChange={(e) => {
                          setPrimary_Teachers(e.target.value);
                        }}
                        placeholder="Primary Teachers"
                      />
                      {Primary_TeachersValidation && (
                        <small style={{ color: "red" }}>
                          {Primary_TeachersValidation}
                        </small>
                      )}
                    </FormGroup>
                  </div>
                  <div className="col-md-6">
                    <FormGroup>
                      <Label>Secondary_Teachers</Label>
                      <Input
                        onChange={(e) => {
                          setSecondary_Teachers(e.target.value);
                        }}
                        placeholder="Secondary Teachers"
                      />
                      {Secondary_TeachersValidation && (
                        <small style={{ color: "red" }}>
                          {Secondary_TeachersValidation}
                        </small>
                      )}
                    </FormGroup>
                    </div>
                  <div className="col-md-6">
                    <FormGroup>
                      <Label>Tertiary_Teachers</Label>
                      <Input
                        onChange={(e) => {
                          setTertiary_Teachers(e.target.value);
                        }}
                        placeholder="Tertiary Teachers"
                      />
                      {Tertiary_TeachersValidation && (
                        <small style={{ color: "red" }}>
                          {Tertiary_TeachersValidation}
                        </small>
                      )}
                       </FormGroup>
                    </div>
                  <div className="col-md-6">
                    <FormGroup>
                      <Label>Primary_Students</Label>
                      <Input
                        onChange={(e) => {
                          setPrimary_Students(e.target.value);
                        }}
                        placeholder="Primary Students"
                      />
                      {Primary_StudentsValidation && (
                        <small style={{ color: "red" }}>
                          {Primary_StudentsValidation}
                        </small>
                      )}
                      </FormGroup>
                    </div>
                  <div className="col-md-6">
                    <FormGroup>
                      <Label>Secondary_Students</Label>
                      <Input
                        onChange={(e) => {
                          setSecondary_Students(e.target.value);
                        }}
                        placeholder="Secondary Students"
                      />
                      {Secondary_StudentsValidation && (
                        <small style={{ color: "red" }}>
                          {Secondary_StudentsValidation}
                        </small>
                      )}
                      </FormGroup>
                    </div>
                  <div className="col-md-6">
                    <FormGroup>
                      <Label>Tertiary_Students</Label>
                      <Input
                        onChange={(e) => {
                          setTertiary_Students(e.target.value);
                        }}
                        placeholder="Tertiary Students"
                      />
                      {Tertiary_StudentsValidation && (
                        <small style={{ color: "red" }}>
                          {Tertiary_StudentsValidation}
                        </small>
                      )}
                    </FormGroup>
                  </div>
                </div>
              </Form>
              <br></br>
              <div className="row">
                <div className="col-md-4"></div>
                <div className="col-md-6">
                  <Button
                    color="primary"
                    onClick={() => {
                      postData();
                    }}
                  >
                    Create Human Resources
                  </Button>
                </div>
              </div>
            </CardBody>
          </Card>
        </div>
        <div className="col-md-3"></div>
      </div>
      <br></br>
      <br></br>
      <div className="row">
        <div className="col-md-2"></div>
        <div className="col-md-8">
          <Card>
            <CardHeader>All Quality Details</CardHeader>
            <CardBody>
              <Table>
                <tr>
                  <th style={{ textAlign: "center" }}>Record Id</th>
                  <th style={{ textAlign: "center" }}>Principals</th>
                  <th style={{ textAlign: "center" }}>Primary_Teachers</th>
                  <th style={{ textAlign: "center" }}>Secondary_Teachers</th>
                  <th style={{ textAlign: "center" }}>Tertiary_Teachers</th>
                  <th style={{ textAlign: "center" }}>Primary_Students</th>
                  <th style={{ textAlign: "center" }}>Secondary_Students</th>
                  <th style={{ textAlign: "center" }}>Tertiary_Students</th>
                  <th style={{ textAlign: "center" }}>Category_1</th>
                  <th style={{ textAlign: "center" }}>Category_2</th>
                  <th style={{ textAlign: "center" }}>Teacher_Count</th>
                  <th style={{ textAlign: "center" }}>Unavaialbility_of_Teachers</th>
                  <th>Actions</th>
                </tr>
                {Response &&
                  Response.map((item, index) => {
                    return (
                      <tr>
                        <td style={{ textAlign: "center" }}>
                          {Number(index) + 1}
                        </td>
                        <td style={{ textAlign: "center" }}>
                          {item.principals}
                        </td>
                        <td style={{ textAlign: "center" }}>{item.category1}</td>
                        <td style={{ textAlign: "center" }}>
                          {item.primaryStudents}
                        </td>
                        <td style={{ textAlign: "center" }}>{item.category2}</td>
                        <td style={{ textAlign: "center" }}>{item.unavaialabilityofTeachers}</td>
                        <td style={{ textAlign: "center" }}>
                          {item.teacherCount}
                        </td>
                        <td style={{ textAlign: "center" }}>
                          <div className="row">
                            <div className="col-md-5">
                              <Button type="" onClick={() => deleteData(item)}>
                                Delete
                              </Button>
                            </div>

                            <div className="col-md-5 ml-1">
                              <Button
                                color="primary"
                                onClick={() => editButton(item)}
                              >
                                Edit
                              </Button>
                            </div>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
              </Table>
            </CardBody>
          </Card>
        </div>
        <div className="col-md-2"></div>
      </div>
    </div>
  );
};
export default HumanResources;
