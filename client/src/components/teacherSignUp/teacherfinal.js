import React, { Component } from "react";
import UserDetails from './UserDetails';
import PersonalDetails from './PersonalDetails';
import Schedule from './Schedule';
import Work from './Work';
import Education from './Education';
import Success from './Success';

export default class TeacherFinal extends Component {
  state = {
    step: 1,
    firstName: '',
    lastName: '',
    email: '',
    password:'',
    occupation: '',
    age: '',
    About: '',
    subjects:'',
    Price:'',
    schedule: [ {Day:'', Time:''} ],
    work:[{title:'', place:'',startDate:'',endDate:'', details:''}],
    education:[{level:'',institute:'',startDate:'',endDate:'', field:''}]

  };

  // Proceed to next step
  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1
    });
  };

  // Go back to prev step
  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1
    });
  };

  // Handle fields change
  handleChange = input => e => {
    if (["Day", "Time"].includes(e.target.name) ) {
      let schedule = [...this.state.schedule]
      schedule[input][e.target.name] = e.target.value
      this.setState({ schedule }, () => console.log(this.state.schedule))
    } 
    else if (["title", "startDate","endDate","place","details"].includes(e.target.name) ) {
      let work = [...this.state.work]
      work[input][e.target.name] = e.target.value
      this.setState({ work }, () => console.log(this.state.work))
    } 
    else if (["level", "startDate","endDate","institute","field"].includes(e.target.name) ) {
      let education = [...this.state.education]
      education[input][e.target.name] = e.target.value
      this.setState({ education }, () => console.log(this.state.education))
    } 
    else {

    this.setState({ [input]: e.target.value });
    }
  };

  addSchedule = (e) => {
    this.setState((prevState) => ({
      schedule: [...prevState.schedule, {Day:"", Time:""}],
    }));
  };

  deleteSchedule = input => e => {
    e.preventDefault()
    let schedule = [
      ...this.state.schedule.slice(0, input),
      ...this.state.schedule.slice(input + 1)
    ]
    this.setState({
      schedule
    })
  };

  addWork = (e) => {
    this.setState((prevState) => ({
      work: [...prevState.work, {title:'', place:'',startDate:'',endDate:'', details:''}],
    }));
  };

  deleteWork = input => e => {
    e.preventDefault()
    let work = [
      ...this.state.work.slice(0, input),
      ...this.state.work.slice(input + 1)
    ]
    this.setState({
      work
    })
  };

  addEducation = (e) => {
    this.setState((prevState) => ({
      education: [...prevState.work, {level:'',institute:'',startDate:'',endDate:'', field:''}],
    }));
  };

  deleteEducation = input => e => {
    e.preventDefault()
    let education = [
      ...this.state.education.slice(0, input),
      ...this.state.education.slice(input + 1)
    ]
    this.setState({
      education
    })
  };

  render() {
    const { step } = this.state;
    const {schedule}=this.state;
    const {work}=this.state;
    const {education}=this.state;
    const { firstName, lastName, email, password,occupation, age, About,subjects,Price } = this.state;
    const values = { firstName, lastName, email, password,occupation, age, About,subjects,schedule,work,education,Price };
   
    switch (step) {
      case 1:
        return (
          <UserDetails
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
            step={step}
          />
        );
      case 2:
        return (
          <PersonalDetails
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
            step={step}
          />
          
        );
      case 3:
        return (
          <Schedule
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
            step={step}
            schedule={schedule}
            addSchedule={this.addSchedule}
            deleteSchedule={this.deleteSchedule}
          />
          
        );
      case 4:
        return (
        <Work
          nextStep={this.nextStep}
          prevStep={this.prevStep}
          handleChange={this.handleChange}
          values={values}
          step={step}
          work={work}
          addWork={this.addWork}
          deleteWork={this.deleteWork}
        />
        );
        case 5:
        return (
        <Education
          nextStep={this.nextStep}
          prevStep={this.prevStep}
          handleChange={this.handleChange}
          values={values}
          step={step}
          education={education}
          addEducation={this.addEducation}
          deleteEducation={this.deleteEducation}
        />
        )
        case 6:
        return (
        <Success

          nextStep={this.nextStep}
          prevStep={this.prevStep}
          values={values}
          step={step}
          values={values}
          schedule={schedule}
          work={work}
          education={education}
          
        />
        )
      default:
        (console.log('This is a multi-step form built with React.'))
    }
  }

}