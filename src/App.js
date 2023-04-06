
import { useState } from 'react';
import { Navigate, Route ,Routes } from 'react-router-dom';
import './App.css';
import { AddUser } from './Components/AddUser';
import { EditUser } from './Components/EditUser';
import { EditTeacherUser } from './Components/EditTeacherUser';
import { Nopage } from './Components/Nopage';
import UserComponents from './Components/UserComponents';
import TeacherComponents from './Components/TeacherComponents';
import TeacherUser from './Components/TeacherUser';
import { UserDetails } from './Components/UserDetails';
import { data } from './Data/data';
import { Teacherdata } from './Data/Teacherdata';
import { TeacherDetails } from './Components/TeacherDetails';


function App() {
 
  const [user, setUser]= useState(data);
  const [teacher,setTeacher]=useState(Teacherdata);
  
  return (
    <div className="App">
      <Routes>
         <Route exact path="/" element={ <UserComponents 
         user={user}
         setUser={setUser}/>}>
        
         </Route>
         <Route exact path="/teacher" element={ <TeacherComponents 
         teacher={teacher}
         setTeacher={setTeacher}/>}>
        
         </Route>

         <Route exact path="/add/user" element={ <AddUser
            user={user}
            setUser={setUser}/>}>
         
         </Route>

         <Route exact path="/teacher/user" element={<TeacherUser
            teacher={teacher}
            setTeacher={setTeacher}/>}>
         </Route>

         <Route exact path="/edit/:id" element={<EditUser
           user={user}
           setUser={setUser}/>}>
         </Route>

         <Route exact path="/teacherEdit/:id" element={<EditTeacherUser
           teacher={teacher}
           setTeacher={setTeacher}/>}>
         </Route>

         <Route exact path="/user/:id" element={<UserDetails user={user}/>}>
            
          </Route>

        
          <Route exact path="/teacher/:id" element={<TeacherDetails  teacher={teacher}/>}>
            
          </Route>

          <Route exact path="/user" element={  <Navigate exact path='/'/>}>
            
          </Route>

          <Route exact path="/teacher" element={<Navigate exact path='/teacher'/>}>
          </Route>

          <Route exact path="*" element={<Nopage/>}>
              
          </Route>

      </Routes>
   
    </div>
  );
}

export default App;
