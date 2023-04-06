import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import BaseApp from "../Core/Base";

export const EditUser=({user ,setUser})=>{
    
    const[name,setName]=useState("")
    const[idx,setIdx]=useState("")
    const[age,setAge]=useState("")
    const[email,setEmail]=useState("")
    const[course,setCourse]=useState("")
    const[hobbies,setHobbies]=useState("")

    const {id}=useParams()
    const history=useNavigate();

    const selectedUser= user.find((per)=>per.id === id);
    
   
    useEffect(()=>{
        setIdx(selectedUser.id)
        setName(selectedUser.name)
        setAge(selectedUser.age)
        setEmail(selectedUser.email)
        setCourse(selectedUser.course)
        setHobbies(selectedUser.hobbies)
    },[])


    const updateUser=()=>{

        const editIndex=user.findIndex(per =>per.id === id)
      
        const editedData ={
            id : idx,
            name,
            age,
            email,
            course,
            hobbies
        }

        user[editIndex]=editedData
        setUser([...user]);
        history("/")



    }

     return(
        <BaseApp
        title={"Edit the User Details"}>
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

                <input placeholder="Course" className="course" type="text"
                 value={course}
                 onChange={(event)=>setCourse(event.target.value)}
                /><br></br>

                <input placeholder="Hobbies" className="hobbies" type="text"
                 value={hobbies}
                 onChange={(event)=>setHobbies(event.target.value)}
                /><br></br>

                <button
                onClick={updateUser} className="Edit"
                >Edit</button>
         
        </div>
        </BaseApp>
     )
}