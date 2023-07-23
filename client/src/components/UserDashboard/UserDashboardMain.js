import React, { useEffect, useState } from "react";
import "./DashboardMain.css";
import { getUser, removeUserSession } from "../../Utils/Common";
import { Link } from "react-router-dom";
import Image from "./Image";
import Charbox from "./Chatbox/Charbox";
import axios from "axios";
import "./table.css";
import FadeIn from "react-fade-in";
import "../TeacherProfile/Styling/main.css";
import "../TeacherProfile/Styling/bootstrap.min.css";
import "../TeacherProfile/Styling/aos.css";
import ChannelForm from "../VideoChat/ChannelForm";
const { If, Then, Else } = require("react-if");

function UserDashboardMain(props) {
  const Teacher = getUser();
  var url_string = window.location.href;
  var url = new URL(url_string);
  var name = url.searchParams.get("name");
  var uid = url.searchParams.get("id");
  const [searchedsubject, setName] = useState("");
  const [searcheddate, setDate] = useState("");
  const [searchedprice, setPrice] = useState("");
  const [searchedtime, setTime] = useState("");
  const [searchedday, setDay] = useState("");

  var buttonid2;
  var scheduleid;
  var classid;
  var id;
  console.log(name);
  console.log("ID:");
  console.log(uid);
  const [value, setValue] = useState(null);

  async function getSomething() {
    try {
      const response = await axios.get(`/api/users/id?id=${uid}`);
      setValue(response.data);
      console.log("Hi");
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  function cancelClass(cid, sid) {
    classid = cid;
    scheduleid = sid;
    cancelTeacher();
    cancelStudent();
    book();
    refreshPage();
  }
  async function cancelTeacher() {
    try {
      const response = await axios.put(
        `/api/teachers/cancel2?id=${uid}&classid=${classid}`
      );
      setValue(response.data);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  }
  async function cancelStudent() {
    try {
      const response = await axios.put(
        `/api/users/cancel?id=${uid}&classid=${classid}`
      );
      setValue(response.data);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  }
  async function book() {
    try {
      const response = await axios.put(
        `/api/teachers/book2?id=${uid}&scheduleid=${scheduleid}`
      );
      setValue(response.data);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  }
  // async function getSomething2() {
  //   // bookfunction();
  //   refreshPage();
  // }
  // async function bookfunction() {
  //   try {
  //     const response = await axios.put(
  //       `/api/teachers/add?id=${id}&subjectname=${searchedsubject}&date=${searcheddate}&price=${searchedprice}&time=${searchedtime}&day=${searchedday}`
  //     );
  //     setValue(response.data);
  //     console.log(response.data);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // }
  function refreshPage() {
    window.location.reload(false);
  }
  // handle click event of logout button
  const handleLogout = () => {
    removeUserSession();
    props.history.push("/LoginDashboard");
  };
  useEffect(() => {
    getSomething();
  }, []);

  return (
    <div>
      {value &&
        value.map((data) => {
          return (
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
                    href="/"
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
                    <a href="#">
                      <i className="fa fa-user" />
                      Profile
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-address-card" />
                      About
                    </a>
                  </li>
                  <li>
                    <a href="/messages">
                      <i className="fa fa-envelope" />
                      Messages
                    </a>
                  </li>
                  <li>
                    {/* <Link to={`/TeacherDashboard?name=${data.name}&id=${data._id}/schedule`}> */}
                    <a href="#schedule">
                      <i className="fa fa-calendar" />
                      My Schedule
                    </a>
                    {/* </Link> */}
                  </li>
                  <li>
                    <a href="#bookings">
                      <i className="fa fa-address-book" />
                      My Bookings
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
                    <a style={{ marginLeft: "5px" }}>
                      {" "}
                      Welcome {name}! Have a nice day.{" "}
                    </a>
                  </div>
                  <div class="pull-right" style={{ margin: "10px" }}>
                    <a onClick={handleLogout}>Logout</a>
                  </div>
                </div>
                <div className="info">
                  <div></div>

                  <div>
                    <br></br>
                    <br></br>
                    <hr></hr>
                    <div id="bookings" className="bookings">
                      <h3 className=" text-center" style={{ margin: "30px" }}>
                        My Bookings
                      </h3>

                      <div className="table100 ver1 m-b-100">
                        <div className="table100-head">
                          <table>
                            <thead>
                              <tr className="row100 head">
                                <th className="cell100 column1">
                                  Teacher name
                                </th>
                                <th className="cell100 column2">Subject</th>
                                <th className="cell100 column2">Time</th>
                                {/* <th className="cell100 column4">Day</th> */}
                                <th className="cell100 column5">Date</th>
                                <th
                                  className="cell100 column5"
                                  style={{ paddingLeft: "25px" }}
                                >
                                  {" "}
                                  Price
                                </th>
                                <th
                                  className="cell100 column2"
                                  style={{ paddingLeft: "20px" }}
                                >
                                  {" "}
                                  ClassID
                                </th>{" "}
                                <th className="cell100 column2"> </th>
                                <th className="cell100 column2"> </th>
                              </tr>
                            </thead>
                          </table>
                        </div>
                        <div className="table100-body js-pscroll">
                          {data.mybookings &&
                            data.mybookings.map((data2) => {
                              return (
                                <table>
                                  <tbody>
                                    <tr className="row100 body">
                                      <td className="cell100 column1">
                                        {data2.TeacherName}
                                      </td>
                                      <td className="cell100 column3">
                                        {data2.Subject}
                                      </td>
                                      <td className="cell100 column2">
                                        {data2.Time}
                                      </td>
                                      {/* <td className="cell100 column4">
                                        {data2.Day}
                                      </td> */}
                                      <td
                                        className="cell100 column2"
                                        style={{ paddingLeft: "30px" }}
                                      >
                                        {data2.Date} ({data2.Day})
                                      </td>{" "}
                                      <td
                                        className="cell100 column7"
                                        style={{ paddingLeft: "30px" }}
                                      >
                                        {data2.Price}
                                      </td>{" "}
                                      <td className="cell100 column2">
                                        {data2.Classid}
                                      </td>
                                      <td className="cell100 column3">
                                        <If
                                          condition={data2.Status == "Booked"}
                                        >
                                          <Then>
                                            <Link
                                              to={`./VideoStyle?name=${name}&room=${data2.Classid}&bookingid=${data2.classid}`}
                                            >
                                              <button class="newbuttonx">
                                                Start Class
                                              </button>
                                            </Link>
                                          </Then>
                                          <Else>
                                            {/* <button class="newbuttonx" disabled> 
                                            Start Class
                                          </button> */}
                                          </Else>
                                        </If>
                                      </td>
                                      <td className="cell100 column3">
                                        {/* {data2.Status} */}

                                        <If
                                          condition={data2.Status == "Booked"}
                                        >
                                          <Then>
                                            <button
                                              class="cancelbutton"
                                              onClick={() => {
                                                cancelClass(
                                                  data2.Classid,
                                                  data2.classid
                                                );
                                              }}
                                            >
                                              Cancel
                                            </button>
                                          </Then>
                                          <Else>
                                            <button class="cancelled" disabled>
                                              {data2.Status}
                                            </button>
                                          </Else>
                                        </If>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              );
                            })}
                        </div>
                      </div>
                    </div>
                    <br />
                    <br />
                    <br />
                    <br />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
}

export default UserDashboardMain;
