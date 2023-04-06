import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import BaseApp from "../Core/Base";


export function AddUser({user, setUser}){
    const history=useNavigate();

    const[name,setName]=useState("")
    const[id,setId]=useState("")
    const[age,setAge]=useState("")
    const[email,setEmail]=useState("")
    const[course,setCourse]=useState("")
    const[hobbies,setHobbies]=useState("")

    const addNewUser=()=>{
        const newUSer={
            id,
            name,
            age,
            email,
            course,
            hobbies
        }
        console.log(newUSer);
        setUser([...user, newUSer])
        history("/")
    }
  


    return(
        <BaseApp
        title={"Add a New User"}>
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

                <input placeholder="Course" className="course" type="text"
                 value={course}
                 onChange={(event)=>setCourse(event.target.value)}
                /><br></br>

                <input placeholder="Hobbies" className="hobbies" type="text"
                 value={hobbies}
                 onChange={(event)=>setHobbies(event.target.value)}
                /><br></br>

                <button
                onClick={addNewUser} className="add"
                >Add</button>
         
        </div>
        </BaseApp>
       
    )
}
