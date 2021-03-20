import React from 'react';
import { useState } from 'react';
import './login.css'
import { Link } from 'react-router-dom';
const Signin = (props) => {
    const [signinStatus,setsigninStatus] = useState(false)
    const handleSigninstatus = () =>{
        setsigninStatus(!signinStatus)
    }
    return (
        <div>
             <div className="form1">
             {
                 !signinStatus ? <h1>Create An Account</h1>:
                 <h1>Sign Up</h1>
             }
     
      <form action="" onSubmit={()=>props.handleSubmit(signinStatus)}>
      {
          !signinStatus ? <input type="text" onBlur={props.handleBlur} className="inp1" name="name" id="" placeholder="Your Name" required/>:
          <h1></h1>
      }
     
      <input type="email" onBlur={props.handleBlur} className="inp1" name="email" id="" placeholder="Your Email Address" required/><br/>
      <input type="password" onBlur={props.handleBlur} className="inp1" name="password" id="" placeholder="Your Password" required/><br />
      {
          !signinStatus ? <input type="password" name="cpassword" className="inp1" id="" placeholder="Confirm Password" required/>:
          <h1></h1>
      }
      
      <br/>
      {
        !signinStatus ?  <input type="submit" value="Create An Account"/> :
        <input type="submit" value="Sign In"/>
      }
      
      
    </form>
    {
       !signinStatus ? <p>Already Have an Account?<button onClick={handleSigninstatus}>Sign In</button></p>:
       <p>Create an Account?<button onClick={handleSigninstatus}>Sign Up</button></p>     
    }
   
    </div>

        </div>
    );
};

export default Signin;