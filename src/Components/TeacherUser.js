import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import BaseApp from "../Core/Base";


export default function TeacherUser({teacher, setTeacher}){
    const history=useNavigate();

    const[name,setName]=useState("")
    const[id,setId]=useState("")
    const[age,setAge]=useState("")
    const[email,setEmail]=useState("")
    const[subject,setSubject]=useState("")
    const[qualification,setQualification]=useState("")

    const addNewUser=()=>{
        const newTeacherUSer={
            id,
            name,
            age,
            email,
            subject,
            qualification
        }
        console.log(newTeacherUSer);
        setTeacher([...teacher, newTeacherUSer])
        history("/teacher")
    }
  


    return(
        <BaseApp
        title={"Add a New Teacher Details"}>
         <div className="new">
                <input placeholder="Id" className="id" type="number"
                    value={id}
                    onChange={(event)=>setId(event.target.value)}
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
                onClick={addNewUser} className="add"
                >Add</button>
         
        </div>
        </BaseApp>
       
    )
}
