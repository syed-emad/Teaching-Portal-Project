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

function DashboardMain(props) {
  var buttonid;
const Teacher = getUser();
var url_string = window.location.href;
var url = new URL(url_string);
var name = url.searchParams.get("name");
var id = url.searchParams.get("id");
const [searchedsubject, setName] = useState("");
const [searcheddate, setDate] = useState("");
const [searchedprice, setPrice] = useState("");
const [searchedtime, setTime] = useState("");
const [searchedday, setDay] = useState("");


  console.log(name);
  console.log("ID:");
  console.log(id);
  const [value, setValue] = useState(null);

  async function getSomething() {

    try {
      const response = await axios.get(`/api/teachers/dash?id=${id}`);
      setValue(response.data);
      console.log("Hi");
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  }
  async function getSomething2() {
    bookfunction();
    refreshPage();
    
  }
  async function deleteRecord(id){
    buttonid=id;
    deleteSchedule();
    refreshPage();
  }

  async function deleteSchedule(){
    try {
      const response = await axios.delete(
        `/api/teachers/delete?id=${id}&buttonid=${buttonid}`
      );
      setValue(response.data);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  }
  async function bookfunction() {
    try {
      const response = await axios.put(
        `/api/teachers/add?id=${id}&subjectname=${searchedsubject}&date=${searcheddate}&price=${searchedprice}&time=${searchedtime}&day=${searchedday}`
      );
      setValue(response.data);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  }
  function refreshPage() {
    window.location.reload(false);
  }
  // handle click event of logout button
  const handleLogout = () => {
    removeUserSession();
    props.history.push("/TeacherLogin");
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
                style={{ borderRadius: "50%", height: "50px", width: "50px" }}
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
            <div>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. A sed
              nobis ut exercitationem atque accusamus sit natus officiis totam
              blanditiis at eum nemo, nulla et quae eius culpa eveniet
              voluptatibus repellat illum tenetur, facilis porro. Quae fuga odio
              perferendis itaque alias sint, beatae non maiores magnam ad,
              veniam tenetur atque ea exercitationem earum eveniet totam ipsam
              magni tempora aliquid ullam possimus? Tempora nobis facere porro,
              praesentium magnam provident accusamus temporibus! Repellendus
              harum veritatis itaque molestias repudiandae ea corporis maiores
              non obcaecati libero, unde ipsum consequuntur aut consectetur
              culpa magni omnis vero odio suscipit vitae dolor quod dignissimos
              perferendis eos? Consequuntur!
            </div>
            <div>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. A sed
              nobis ut exercitationem atque accusamus sit natus officiis totam
              blanditiis at eum nemo, nulla et quae eius culpa eveniet
              voluptatibus repellat illum tenetur, facilis porro. Quae fuga odio
              perferendis itaque alias sint, beatae non maiores magnam ad,
              veniam tenetur atque ea exercitationem earum eveniet totam ipsam
              magni tempora aliquid ullam possimus? Tempora nobis facere porro,
              praesentium magnam provident accusamus temporibus! Repellendus
              harum veritatis itaque molestias repudiandae ea corporis maiores
              non obcaecati libero, unde ipsum consequuntur aut consectetur
              culpa magni omnis vero odio suscipit vitae dolor quod dignissimos
              perferendis eos? Consequuntur!
            </div>
            <div>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. A sed
              nobis ut exercitationem atque accusamus sit natus officiis totam
              blanditiis at eum nemo, nulla et quae eius culpa eveniet
              voluptatibus repellat illum tenetur, facilis porro. Quae fuga odio
              perferendis itaque alias sint, beatae non maiores magnam ad,
              veniam tenetur atque ea exercitationem earum eveniet totam ipsam
              magni tempora aliquid ullam possimus? Tempora nobis facere porro,
              praesentium magnam provident accusamus temporibus! Repellendus
              harum veritatis itaque molestias repudiandae ea corporis maiores
              non obcaecati libero, unde ipsum consequuntur aut consectetur
              culpa magni omnis vero odio suscipit vitae dolor quod dignissimos
              perferendis eos? Consequuntur!
              <br></br>
              <br></br>
              <hr></hr>

    <div id ="schedule" className="schedule">
    
    {/* add schedule bar */}
    <FadeIn>
        <div className="home2" >
          <div className="home_container2 col-xl-10 offset-xl-1" style={{ backgroundColor: "#594f8d"}}>
            
              <div className="row">
                <div className="col-xl-12 ">
                  <div className="home_content text-center">
                    <div>
                      <form action="#" className="search_form" id="search_form">
                        <div
                          className="d-flex flex-sm-row "
                          style={{
                            padding: "50px"
                          }}
                        >
                          <input
                            onChange={(event) => setName(event.target.value)}
                            type="text"
                            name="name"
                            className="search_input2"
                            placeholder="Subject"
                            required="required"
                          />
                              <input
                            onChange={(event) => setDate(event.target.value)}
                            type="text"
                            name="Date"
                            className="search_input2"
                            placeholder="Date"
                            required="required"
                          />
                          <select
                            className="search_input2"
                            name="cars"
                            onChange={(event) => setPrice(event.target.value)}
                          >
                            <option value="">Hourly Prices</option>
                            <option value="250">250 RS</option>
                            <option value="500">500 RS</option>
                            <option value="750">750 RS</option>
                            <option value="1000">1000 RS</option>
                          </select>
                          <select
                            className="search_input2"
                            name="cars"
                            onChange={(event) => setTime(event.target.value)}
                          >
                            <option value="">Time</option>
                            <option value="12:00pm-3:00pm">
                              12:00pm-3:00pm
                            </option>
                            <option value="3:00pm-6:00pm">3:00pm-6:00pm</option>
                            <option value="6:00pm-9:00pm">6:00pm-9:00pm</option>
                            <option value="9:00pm-12:00am">
                              9:00pm-12:00am
                            </option>
                            <option value="12:00am-3:00am">
                              12:00am-3:00am
                            </option>
                            <option value="3:00pm-6:00am">3:00pm-6:00am</option>
                            <option value="6:00pm-9:00am">6:00pm-9:00am</option>
                            <option value="9:00am-12:00pm">
                              9:00am-12:00pm
                            </option>
                          </select>
                          <select
                            className="search_input2"
                            name="cars"
                            onChange={(event) => setDay(event.target.value)}
                          >
                            <option value="">Day</option>
                            <option value="Monday">Monday</option>
                            <option value="Tuesday">Tuesday</option>
                            <option value="Wednesday">Wednesday</option>
                            <option value="Thursday">Thursday</option>
                            <option value="Friday">Friday</option>
                            <option value="Saturday">Saturday</option>
                            <option value="Sunday">Sunday</option>
                          </select>
                          
                            
                             <a
                              className="newbutton4"
                               style={{ color: "white" }}
                               onClick={() => {
                                getSomething2();
                               }}
                                >Add Slot
                                </a>
                            
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
           
          </div>
        </div>
      </FadeIn>
      </div>    
          <div className="section" id="table">
          
                        
                            {" "}
                            {/* <div
              class="  "
              style={{
                paddingLeft: "100px",
                paddingRight: "100px",
                paddingTop: "60px",
              }} */}
                            <h3 className=" text-center" style={{ margin: "30px" }}>
                              My Schedule
                            </h3>
                            <div className="table100 ver1 m-b-110">
                              <div className="table100-head">
                                <table>
                                  <thead>
                                    <tr className="row100 head">
                                      <th
                                        className="cell100 column1"
                                        
                                      >
                                        Subject
                                      </th>
                                      <th
                                        className="cell100 column2"
                                      
                                      >
                                        Day
                                      </th>
                                      <th
                                        className="cell100 column3"
                                        
                                      >
                                        Time
                                      </th>
                                      <th
                                        className="cell100 column4"
                                       
                                      >
                                        Date
                                      </th>
                                      <th
                                        className="cell100 column5"
                                        
                                      >
                                        Price
                                      </th>
                                      <th
                                        className="cell100 column6"
                                        
                                      >
                                        
                                      </th>
                                    </tr>
                                  </thead>
                                </table>
                              </div>
                              <div className="table100-body js-pscroll">
                                {data.schedule &&
                                  data.schedule.map((data2, index) => {
                                    // day = index;
                                    return (
                                      <table>
                                        {console.log(index, "phala")}
                                        <tbody>
                                          <tr className="row100 body">
                                            <td className="cell100 column1">
                                              {data2.Subject}
                                            </td>
                                            <td className="cell100 column2">
                                              {data2.Day}
                                            </td>
                                            <td className="cell100 column3">
                                              {data2.Time}
                                            </td>
                                            <td className="cell100 column4">
                                              {data2.Date}
                                            </td>
                                            <td className="cell100 column5">
                                              {data2.Price}
                                            </td>
                                            <td className="cell100 column6">
                                            <button
                                                      type="button"
                                                      onClick={() => {
                                                        deleteRecord(data2._id);
                                                       }}
                                                      class="newbutton3"
                                                    >
                                                     Delete
                                                    </button>
                                            </td>
                                            {/* <td className="cell100 column5">
                                              {data2.Status}
                                            </td> */}
                                            {/* <td className="cell100 column5 ">
                                              <Link
                                                to={`/Checkout?userid=${"123"}&bookingid=${data2._id}&index=${index}&teacherid=${id}&Subject=${data2.Subject}&Date=${data2.Date}&Time=${data2.Time}&Day=${data2.Day}`}
                                              >
                                            
                                                <a
                                                  className="newbutton2"
                                                  style={{ color: "white" }}
                                                  // onClick={() => {
                                                  //   call2functions(index, data2._id);
                                                  // }}
                                                >
                                                  {data2.Status}
                                                </a>{" "}
                                                
                                              </Link>
                                            </td> */}
                                            {/* <td className="cell100 column5 ">
                                              {" "}
                                              used this too add details to schedule
                                              <a
                                                className="newbutton2"
                                                style={{ color: "white" }}
                                                onClick={bookfunction}
                                              >
                                                Bookxx
                                                {data2.Status}
                                              </a>
                                            </td> */}
                                          </tr>
                                        </tbody>
                                      </table>
                                    );
                                  })}
                              </div>
                            </div>
                          </div>
                       
             
              {/* <Table /> */}
    <div id="bookings" className="bookings" >
    
          {/* // {" "}
          // {/* <div
          //     class="  "
          //     style={{
          //       paddingLeft: "100px",
          //       paddingRight: "100px",
          //       paddingTop: "60px",
          //     }} */} 
            <h3 className=" text-center" style={{ margin: "30px" }}>
              My Bookings
            </h3>

              
            <div className="table100 ver1 m-b-110">
              <div className="table100-head">
                <table>
                  <thead>
                    <tr className="row100 head">
                      <th className="cell100 column1">Student name</th>
                      <th className="cell100 column2">Subject</th>
                      <th className="cell100 column3">Time</th>
                      <th className="cell100 column4">Day</th>
                      <th className="cell100 column5">Date</th>
                      <th className="cell100 column6">Price</th>
                      <th className="cell100 column7">Status</th>
                    </tr>
                  </thead>
                </table>
              </div>
              <div className="table100-body js-pscroll">
              {data.bookings &&
          data.bookings.map((data2) => {
            return (
                <table>
                  <tbody>
                    <tr className="row100 body">
                      <td className="cell100 column1">{data2.Username}</td>
                      <td className="cell100 column2">{data2.Subject}</td>
                      <td className="cell100 column3">{data2.Time}</td>
                      <td className="cell100 column4">{data2.Day}</td>
                      <td className="cell100 column5">{data2.Date}</td>
                      <td className="cell100 column6">{data2.Price}</td>
                      <td className="cell100 column7">{data2.Status}</td>
                    </tr>
                   
                  </tbody>
                </table>
                );  
              })}
              </div>
            </div>
            
      
    </div>
            </div>
          </div>
        </div>
      </div>
          );

      })}
    </div>
  );
}

export default DashboardMain;
