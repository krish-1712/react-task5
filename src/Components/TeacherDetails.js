import React from "react";
import { useParams } from "react-router-dom";
import BaseApp from "../Core/Base";


 export function TeacherDetails({teacher}){
    const{id}=useParams();
    const person =teacher[id];
    return(
        <BaseApp
        title={"Teacher Details"}>
            <div className="teacher-content">
          
                <div  className="teacher-card">
                    <h1>{person?.name}</h1>
                    <p>Age         :   {person?.age}</p>
                    <p>Email      :   {person?.email}</p>
                    <p>Subject :   {person?.subject}</p>
                    <p>Qualification    :   {person?.qualification}</p>
                    
                 </div>
                 </div>
           
        </BaseApp>
    )

 }