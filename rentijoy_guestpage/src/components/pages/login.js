import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Login(){
  
  function handleSubmit(event){   
     event.preventDefault();
    axios.post("http://localhost:5000/users",
    {
      username:document.getElementById("user_mail").value,
      password:document.getElementById("password").value
    })
    .then(resp=>{console.log("user has an account",resp.data)
       console.log("executed");
          document.getElementById("user_mail").value="";
          document.getElementById("password").value="";
    })
    .catch(function (err){
      console.log("check Login error",err)
    })
  }
    return (
      <div className="Login">
                      <h2>Login </h2>
                      <div>
                        User_mail :
                       <input type="email" name="user_mail" id="user_mail" ></input>
                       </div><br />
                       <div>
                        Password :
                       <input type="password" name="password" id="password"></input>
                       </div><br/>
                       <div className="button">
                       <button className="btn1" onClick={handleSubmit}>Submit</button>
                       <button className="btn2" onClick={()=>{console.log("cancelld")}}>Cancel</button><br />
                       <p>New User?
                       <Link id="signup" to="/sign-up">SignUp</Link></p>
                       </div>
                
      </div>
    );
  }


export default Login;