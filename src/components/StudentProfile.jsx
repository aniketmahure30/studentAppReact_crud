import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Axios from '../libraries/Axios'


const StudentProfile = () => {
let {id}=useParams()
let [loading, setLoading]= useState(false)
let [studentPro, setStudentPro]=useState([])

useEffect(()=>{
    try {
        // setLoading(true)
    let fecthdata = async ()=>{
        let data = await Axios.get(`/${id}`)
        let {payload} =data.data
        console.log(payload)
        let {name, email, courses}= payload
        console.log(name)
        setStudentPro([{name, email, courses}])
        
        // setLoading(false)   
    }
    fecthdata()
    setStudentPro([])

    } catch (error) {
        console.log(error)
    }

},[id])

  return (
    <div>
        {
            
            studentPro.map((sp)=>{
                return (
                        <div key={id}>
                        <p>{sp.name}</p>
                        <p>{sp.email}</p>
                        <p>{sp.courses}</p>
                        <button>delete</button>
                        </div>
                        )
            })
        }
    </div>
  )
}

export default StudentProfile