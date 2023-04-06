import React from "react";
import { useParams } from "react-router-dom";
import BaseApp from "../Core/Base";


 export function UserDetails({user}){
    const{id}=useParams();
    const person =user[id];
    return(
        <BaseApp
        title={"User Details"}>
            <div className="user-content">
          
                <div  className="user-card">
                    <h1>{person.name}</h1>
                    <p>Age         :   {person.age}</p>
                    <p>Email      :   {person.email}</p>
                    <p>Course :   {person.course}</p>
                    <p>Hobbies    :   {person.hobbies}</p>
                    
                 </div>
                 </div>
           
        </BaseApp>
    )

 }