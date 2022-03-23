import React, { useEffect, useState } from "react";
import Axios from "../libraries/Axios";
import { useNavigate } from "react-router-dom";

// const subData=[{sname:"JAVA"},{sname:"NODE JS"},{sname:"REACT JS"},{sname:"PYTHON"},{sname:"JAVASCRIPT"}]
const CreateStudent = () => {
  let redirect = useNavigate()
  let [name, setName] = useState("");
  let [email, setEmail] = useState("");
  let [courses, setCourses] = useState("");
  // let [subjects , setSubject]= useState([])



// useEffect(()=>{
//   // let subData = async ()=>{
//   //   let data = await Axios.get("")
//   // }
//   setSubject(subData)
// },[])
// checkbox handle



  let Submit= async (e)=>{
    e.preventDefault();
    try{
        let payload = { name, email ,courses}
        // console.log(payload)
        await Axios.post("",payload)
        alert("Data Saved Successfully")
        redirect("/")
    }
    catch(err){
        console.log(err);
    }
  }



  //? checkbox handle
// const handleChange =(e)=>{
//   let {name, checked}= e.target;
//   console.log(name, checked)
//   let tempSub = subjects.map(sub=> sub.sname === name ? {sname:sub.sname, isChecked: checked}: sub)
//   setSubject(tempSub)
//   console.log(subjects)
  
// }

  return (
    <section id="formBlock">
      <article>
        <div>
          <h1>CREATE STUDENTS</h1>
          <form onSubmit={Submit}>
            <div>
              <label htmlFor="name">Name</label>
              <input type="text" name="name" value={name}  onChange={e=>setName(e.target.value)}/>
            </div>
            <div>
              <label htmlFor="email">email</label>
              <input type="email" name="name" value={email} onChange={e=>setEmail(e.target.value)} />
            </div>
            <div>
              <label htmlFor="courses">courses</label>
            <select name="courses" id="" onChange={e=>setCourses(e.target.value)}>
                <option value="java">java</option>
                <option value="react">react</option>
                <option value="nodejs">nodejs</option>
                <option value="python">python</option>
            </select>

            {/* {
              subjects.map((sub,index)=>{
                return(
                  <span key={index}>
                  <input type="checkbox" name={sub.sname} id={sub.sname} checked={sub?.isChecked || false} onChange={handleChange} />
                  <label htmlFor={sub.sname} >{sub.sname}</label>
                  </span>
                )
              })
            }
            {
              subjects.map((x,index)=>{
                return(
                  <span key={index}>
                  <input type="checkbox" name={x.sname} id={x.sname} checked={x?.isChecked || false} onChange={handleChange} />
                  <label htmlFor={x.sname} >{x.sname}</label>
                  </span>
                )
              })
            } */}

            </div>
            <div>
              <button>Save Data</button>
            </div>

          </form>
        </div>
      </article>
    </section>
  );
};

export default CreateStudent;
