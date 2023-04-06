import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import BaseApp from "../Core/Base";

export  const EditTeacherUser=({teacher ,setTeacher})=>{
    
    const[name,setName]=useState("")
    const[idx,setIdx]=useState("")
    const[age,setAge]=useState("")
    const[email,setEmail]=useState("")
    const[subject,setSubject]=useState("")
    const[qualification,setQualification]=useState("")

    const {id}=useParams()
    const history=useNavigate();

    const selectedUser= teacher.find((per)=>per.id === id);
    
   
    useEffect(()=>{
        setIdx(selectedUser.id)
        setName(selectedUser.name)
        setAge(selectedUser.age)
        setEmail(selectedUser.email)
        setSubject(selectedUser.subject)
        setQualification(selectedUser.qualification)
    },[])


    const updateUser=()=>{

        const editIndex=teacher.findIndex(per =>per.id === id)
      
        const editedData ={
            id : idx,
            name,
            age,
            email,
            subject,
            qualification
        }

        teacher[editIndex]=editedData
        setTeacher([...teacher]);
        history("/teacher")



    }

     return(
        <BaseApp
        title={"Edit the Teacher Details"}>
         <div className="new">
                <input placeholder="Id" className="id" type="number"
                    value={idx}
                    onChange={(event)=>setIdx(event.target.value)}
                /> <br></br>

                <input placeholder="Name" className="name" type="text"
                    value={name}
                    onChange={(event)=>setName(event.target.value)}
                /> <br></br>

                <input placeholder="Age" className="age" type="number"
                 value={age}
                 onChange={(event)=>setAge(event.target.value)}
                /><br></br>

                <input placeholder="Email" className="email" type="text"
                 value={email}
                 onChange={(event)=>setEmail(event.target.value)}
                /><br></br>

                <input placeholder="Subject" className="subject" type="text"
                 value={subject}
                 onChange={(event)=>setSubject(event.target.value)}
                /><br></br>

                <input placeholder="Qualification" className="qualification" type="text"
                 value={qualification}
                 onChange={(event)=>setQualification(event.target.value)}
                /><br></br>

                <button
                onClick={updateUser} className="Edit"
                >Edit</button>
         
        </div>
        </BaseApp>
     )
}