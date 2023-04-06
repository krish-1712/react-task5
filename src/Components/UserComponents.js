import React  from "react";
import { useNavigate } from "react-router-dom";
import BaseApp from "../Core/Base";


export default function UserComponents({user,setUser}){
    
    const history=useNavigate();

    
    const deleteUser=(idx)=>{
        const alterList =user.filter((per)=> per.id!== idx)
        console.log(alterList)
        setUser(alterList);
    }
    return(
     
        <BaseApp  
        title="User Details">
        <div className="user-content">
            {
            user&&(
            user?.map((person,idx)=>(   
                <div key={idx} className="user-card">
                    <h1>{person.name}</h1>
                    <p>Age         :   {person.age}</p>
                    <p>Email      :   {person.email}</p>
                    <p>Course :   {person.course}</p>
                    <p>Hobbies    :   {person.hobbies}</p>
                    
                    <div className="btn-group">
                        <button className="btn edit-btn"
                        onClick={()=>history(`/edit/${person.id}`)}
                        >Edit</button>
                        <button className="btn view-btn"
                        onClick={()=>history(`/user/${idx}`)}
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
 