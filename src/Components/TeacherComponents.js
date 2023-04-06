import React from "react";
import { useNavigate } from "react-router-dom";
import BaseApp from "../Core/Base";


export default function TeacherComponents({teacher,setTeacher}){
    const history=useNavigate();

    
    const deleteUser=(idx)=>{
        const alterList =teacher.filter((per)=> per.id!== idx)
        console.log(alterList)
        setTeacher(alterList);
       
           
    }
    return(
     
        <BaseApp  
        title="Teacher Details">
        <div className="teacher-content">
            {
                teacher&&(
            teacher?.map((person,idx)=>(   
                <div key={idx} className="teacher-card">
                    <h1>{person.name}</h1>
                    <p>Age         :   {person.age}</p>
                    <p>Email      :   {person.email}</p>
                    <p>Subject :   {person.subject}</p>
                    <p>Qualification    :   {person.qualification}</p>
                    
                    <div className="btn-group">
                        <button className="btn edit-btn"
                        onClick={()=>history(`/teacherEdit/${person.id}`)}
                        >Edit</button>
                        <button className="btn view-btn"
                        onClick={()=>history(`/teacher/${idx}`)}
                        >View</button>
                        <button 
                        className="btn del-btn"
                        onClick={()=>deleteUser(person.id)}
                        >Delete</button>
                    </div>
                
                </div>
            )))}
          
        </div>
        </BaseApp>
    )
}
 