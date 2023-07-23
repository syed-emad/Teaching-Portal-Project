import React, { useEffect, useState } from "react";
import axios from "axios";
import "./admin.css";
import { Link } from "react-router-dom";
import Modal from "react-modal";
import { Button } from "react-bootstrap";
import { getUser, removeUserSession } from "../../Utils/Common";
function Admin(props) {
  var url_string = window.location.href;
  var url = new URL(url_string);
  var name = url.searchParams.get("name");
  const [value, setValue] = useState(null);
  const [valueuser, setValue2] = useState(null);
  const [ID, setID] = useState("");

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  function refreshPage() {
    window.location.reload(false);
  }

  function Callfunction(id) {
    deleteteacher(id);
    refreshPage();
  }
  function Callfunctionuser(id) {
    deleteuser(id);
    refreshPage();
  }
  async function getSomething() {
    try {
      const response = await axios.get(`/api/teachers`);

      console.log(response.data);
      setValue(response.data);
    } catch (error) {
      console.error(error);
    }
  }
  async function getSomething2() {
    try {
      const response = await axios.get(`/api/users`);

      console.log(response.data);
      setValue2(response.data);
    } catch (error) {
      console.error(error);
    }
  }
  async function deleteteacher(id) {
    try {
      const response = await axios.delete(
        `/api/teachers/teacherdelete?id=${id}`
      );

      console.log(response.data);
      setValue(response.data);
    } catch (error) {
      console.error(error);
    }
  }
  async function deleteuser(id) {
    try {
      const response = await axios.delete(`/api/users/userdelete?id=${id}`);

      console.log(response.data);
      setValue(response.data);
    } catch (error) {
      console.error(error);
    }
  }
  var subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);
  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = "#f00";
  }

  function closeModal() {
    setIsOpen(false);
  }
  const handleLogout = () => {
    removeUserSession();
    props.history.push("/adminlogin");
  };
  useEffect(() => {
    getSomething();
    getSomething2();
  }, []);

  {
    return (
      <div>
        {" "}
        <div className="wrapper">
          <div className="sidebar">
            <div
              className="logo"
              style={{
                marginLeft: "9px",
              }}
            >
              <img src="images/logo.png" alt="" />
              <a
                href="#"
                style={{
                  fontFamily: "Montserrat",
                  marginLeft: "5px",
                  marginRight: "2px",
                  fontSize: "18px",
                }}
              >
                PROFESSOR
              </a>
            </div>
            <br></br>
            <ul>
              <li>
                <a href="#">
                  <i className="fa fa-home" />
                  Home
                </a>
              </li>
              <li>
                <a href="#teacherstable">
                  <i className="fa fa-user" />
                  Teachers
                </a>
              </li>
              <li>
                <a href="#userstable">
                  <i className="fa fa-user" />
                  Users
                </a>
              </li>
            </ul>
            <div className="social_media">
              <a href="#">
                <i className="fa fa-facebook-f" />
              </a>
              <a href="#">
                <i className="fa fa-twitter" />
              </a>
              <a href="#">
                <i className="fa fa-instagram" />
              </a>
            </div>
          </div>
          <div className="main_content">
            <div className="headerx">
              <div class="pull-left">
                {" "}
                <img
                  src="images/team2.jpg"
                  alt="Avatar"
                  style={{
                    borderRadius: "50%",
                    height: "50px",
                    width: "50px",
                  }}
                />
                <a style={{ marginLeft: "5px" }}> {name}</a>
              </div>
              <div class="pull-right" style={{ margin: "10px" }}>
                <a onClick={handleLogout}>Logout</a>
              </div>
            </div>
            <div className="info">
              <div>
                <div className="" id="teacherstable">
                  <h3 className=" text-center" style={{ margin: "30px" }}>
                    Teachers
                  </h3>
                  <div className="table100 ver1 m-b-110">
                    <div className="table100-head">
                      <table>
                        <thead>
                          <tr className="row100 head">
                            <th className="cell100 column1">Name</th>
                            <th className="cell100 column2">Email</th>
                            <th className="cell100 column3">About</th>
                            <th className="cell100 column4">Subjects</th>
                            <th className="cell100 column5">City</th>
                            <th className="cell100 column6"></th>{" "}
                            <th className="cell100 column7"></th>{" "}
                            <th className="cell100 column8"></th>{" "}
                            <th className="cell100 column9"></th>{" "}
                            <th className="cell100 column10"></th>{" "}
                            <th className="cell100 column11"></th>
                          </tr>
                        </thead>
                      </table>
                    </div>
                    <div className="table100-body js-pscroll">
                      {value &&
                        value.map((data, index) => {
                          // day = index;
                          return (
                            <table>
                              {console.log(index, "phala")}
                              <tbody>
                                <tr className="row100 body">
                                  <td className="cell100 column1">
                                    {data.name}
                                  </td>
                                  <td className="cell100 column2">
                                    {" "}
                                    {data.email}{" "}
                                  </td>
                                  <td className="cell100 column3">
                                    {data.About}
                                  </td>
                                  <td className="cell100 column4">
                                    {data.subjects}
                                  </td>
                                  <td className="cell100 column5">
                                    {data.City}
                                  </td>
                                  <td className="cell100 column6">
                                    {data.Price}
                                  </td>
                                  <td className="cell100 column7">
                                    {data.education &&
                                      data.education.map((data2, index) => {
                                        // day = index;
                                        return (
                                          <table>
                                            {console.log(index, "phala")}
                                            <tbody>
                                              <tr className="row100 body">
                                                <td className="cell100 column1">
                                                  {data2.level}
                                                </td>
                                                <td className="cell100 column2">
                                                  {data2.field}
                                                </td>
                                                <td className="cell100 column3">
                                                  {data2.enddate}
                                                </td>
                                                <td className="cell100 column4">
                                                  {data2.institute}
                                                </td>
                                                <td className="cell100 column5">
                                                  {data2.startDate}
                                                </td>
                                              </tr>
                                            </tbody>
                                          </table>
                                        );
                                      })}
                                    {/* <button
                                      type="button"
                                      onClick={handleShow}
                                      class="purplebutton"
                                    >
                                      Education
                                    </button>{" "}
                                    <button onClick={openModal}>
                                      Education
                                    </button> */}
                                    <Modal
                                      isOpen={modalIsOpen}
                                      onAfterOpen={afterOpenModal}
                                      onRequestClose={closeModal}
                                      contentLabel="Example Modal"
                                      className="table100-body js-pscroll"
                                    >
                                      <h2
                                        ref={(_subtitle) =>
                                          (subtitle = _subtitle)
                                        }
                                      >
                                        EDUCATIONS
                                      </h2>
                                      {/* <button onClick={closeModal}>
                                        close
                                      </button> */}

                                      <div className="table100-body js-pscroll">
                                        {data.education &&
                                          data.education.map((data2, index) => {
                                            // day = index;
                                            return (
                                              <table>
                                                {console.log(index, "phala")}
                                                <tbody>
                                                  <tr className="row100 body">
                                                    <td className="cell100 column1">
                                                      {data2.level}
                                                    </td>
                                                    <td className="cell100 column2">
                                                      {data2.field}
                                                    </td>
                                                    <td className="cell100 column3">
                                                      {data2.enddate}
                                                    </td>
                                                    <td className="cell100 column4">
                                                      {data2.institute}
                                                    </td>
                                                    <td className="cell100 column5">
                                                      {data2.startDate}
                                                    </td>
                                                  </tr>
                                                </tbody>
                                              </table>
                                            );
                                          })}
                                      </div>
                                    </Modal>
                                  </td>
                                  <td className="cell100 column8">
                                    {data.work &&
                                      data.work.map((data2, index) => {
                                        // day = index;
                                        return (
                                          <table>
                                            {console.log(index, "phala")}
                                            <tbody>
                                              <tr className="row100 body">
                                                <td className="cell100 column1">
                                                  {data2.title}
                                                </td>
                                                <td className="cell100 column2">
                                                  {data2.place}
                                                </td>
                                                <td className="cell100 column3">
                                                  {data2.enddate}
                                                </td>
                                                <td className="cell100 column4">
                                                  {/* {data2.details} */}
                                                </td>
                                                <td className="cell100 column5">
                                                  {data2.startDate}
                                                </td>
                                              </tr>
                                            </tbody>
                                          </table>
                                        );
                                      })}
                                    {/* <button
                                      type="button"
                                      onClick={handleShow}
                                      class="purplebutton"
                                    >
                                      Education
                                    </button>{" "}
                                    <button onClick={openModal}>
                                      Education
                                    </button> */}
                                    <Modal
                                      isOpen={modalIsOpen}
                                      onAfterOpen={afterOpenModal}
                                      onRequestClose={closeModal}
                                      contentLabel="Example Modal"
                                      className="table100-body js-pscroll"
                                    >
                                      <h2
                                        ref={(_subtitle) =>
                                          (subtitle = _subtitle)
                                        }
                                      >
                                        EDUCATIONS
                                      </h2>
                                      {/* <button onClick={closeModal}>
                                        close
                                      </button> */}

                                      <div className="table100-body js-pscroll">
                                        {data.work &&
                                          data.work.map((data3, index) => {
                                            // day = index;
                                            return (
                                              <table>
                                                {console.log(index, "phala")}
                                                <tbody>
                                                  <tr className="row100 body">
                                                    <td className="cell100 column1">
                                                      {data3.title}
                                                    </td>
                                                    <td className="cell100 column2"></td>
                                                    <td className="cell100 column3"></td>
                                                    <td className="cell100 column4"></td>
                                                    <td className="cell100 column5"></td>
                                                  </tr>
                                                </tbody>
                                              </table>
                                            );
                                          })}
                                      </div>
                                    </Modal>
                                  </td>
                                  <td className="cell100 column9">
                                    <Link
                                      to={`./teacherschedulea?name=${data.name}&id=${data._id}&adminname=${name}`}
                                    >
                                      <button
                                        type="button"
                                        onClick={() => {}}
                                        class="purplebutton"
                                      >
                                        Schedule
                                      </button>
                                    </Link>
                                  </td>
                                  <td className="cell100 column10">
                                    <Link
                                      to={`./teacherbookingsa?name=${data.name}&id=${data._id}&adminname=${name}`}
                                    >
                                      <button
                                        type="button"
                                        onClick={() => {}}
                                        class="purplebutton"
                                      >
                                        Bookings
                                      </button>
                                    </Link>
                                  </td>
                                  <td className="cell100 column11">
                                    <button
                                      type="redbutton"
                                      onClick={() => {
                                        Callfunction(data._id);
                                      }}
                                      class="redbutton"
                                    >
                                      Delete Record
                                    </button>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          );
                        })}
                    </div>
                  </div>
                </div>
                <div className="" id="userstable">
                  <h3 className=" text-center" style={{ margin: "30px" }}>
                    Users
                  </h3>
                  <div className="table100 ver1 m-b-110">
                    <div className="table100-head">
                      <table>
                        <thead>
                          <tr className="row100 head">
                            <th className="cell100 column1">ID</th>
                            <th className="cell100 column2">Name</th>
                            <th className="cell100 column3">Time Registered</th>
                            <th className="cell100 column4">Email</th>
                            <th className="cell100 column5"> </th>
                            <th className="cell100 column6"></th>
                          </tr>
                        </thead>
                      </table>
                    </div>
                    <div className="table100-body js-pscroll">
                      {valueuser &&
                        valueuser.map((data, index) => {
                          // day = index;
                          return (
                            <table>
                              {console.log(index, "phala")}
                              <tbody>
                                <tr className="row100 body">
                                  <td className="cell100 column1">
                                    {data._id}
                                  </td>
                                  <td className="cell100 column2">
                                    {" "}
                                    {data.name}{" "}
                                  </td>
                                  <td className="cell100 column5">
                                    {data.register_date}
                                  </td>
                                  <td className="cell100 column3">
                                    {data.email}
                                  </td>
                                  <td className="cell100 column7">
                                    <Link
                                      to={`./userbookingsa?name=${data.name}&id=${data._id}&adminname=${name}`}
                                    >
                                      <button
                                        type="button"
                                        onClick={() => {}}
                                        class="purplebutton"
                                      >
                                        Bookings
                                      </button>
                                    </Link>
                                  </td>
                                  <td className="cell100 column8">
                                    <button
                                      type="redbutton"
                                      onClick={() => {
                                        Callfunctionuser(data._id);
                                      }}
                                      class="redbutton"
                                    >
                                      Delete Record
                                    </button>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          );
                        })}
                      <div>
                        {" "}
                        <Modal show={show} onHide={handleClose}>
                          <Modal.Header closeButton>
                            <Modal.Title>Modal heading</Modal.Title>
                          </Modal.Header>
                          <Modal.Body>
                            Woohoo, you're reading this text in a modal!
                          </Modal.Body>
                          <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>
                              Close
                            </Button>
                            <Button variant="primary" onClick={handleClose}>
                              Save Changes
                            </Button>
                          </Modal.Footer>
                        </Modal>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Admin;
