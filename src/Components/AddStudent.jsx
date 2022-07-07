import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { get } from './Data'


const AddStudent = () => {

  const[Name,setName]=useState("")
  const[Age,setAge]=useState("")
  const[Course,setCourse]=useState("")
  const[Batch,setBatch]=useState("")
  const[students,setStudents]=useContext(get)
  
  
  const ChangeHandler1=(e)=>{setName(e.target.value)}
  const ChangeHandler2=(e)=>{setAge(e.target.value)}
  const ChangeHandler3=(e)=>{setCourse(e.target.value)}
  const ChangeHandler4=(e)=>{setBatch(e.target.value)}
  
  const SubmitHandler=()=>{
  setStudents([...students,{Name:Name,Age:Age,Course:Course,Batch:Batch,id:new Date().getTime().toString()}])
  } 
    return (


<div style={{display:'flex', justifyContent:'center'}}>
      <form style={{ marginTop: "25px" }}>
      <label>Name:</label>
          <input id="name" type="text" name='name' value={Name} onChange={ChangeHandler1} />
          <label>Age:</label>
          <input id="age" type="text" name='age' value={Age} onChange={ChangeHandler2} />
          <label>Course:</label>
          <input id="course" type="text" name='course' value={Course} onChange={ChangeHandler3} />
          <label>Batch:</label>
          <input id="batch" type="text" name='batch' value={Batch} onChange={ChangeHandler4} />
      <div style={{ marginTop: "25px" }}>
        <Link to="/Students"><button style={{ marginLeft: "25px" }}>Cancel</button></Link>
        <Link to="/Students" onClick={SubmitHandler}><button>Submit</button></Link>
      </div>      
    </form>
      </div>
    
  )
 
}




export default AddStudent;