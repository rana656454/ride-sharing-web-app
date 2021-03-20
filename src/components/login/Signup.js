import React from 'react';
import './login.css'
const Signup = () => {
    return (
        <div>
         <div className="form1">
     <h1>Create An Account</h1>
      <form action="" onSubmit={handleSubmit}>
     <input type="text" onBlur={handleBlur} className="inp1" name="name" id="" placeholder="Your Name" required/><br/>
      <input type="email" onBlur={handleBlur} className="inp1" name="email" id="" placeholder="Your Email Address" required/><br/>
      <input type="password" onBlur={handleBlur} className="inp1" name="password" id="" placeholder="Your Password" required/><br />
      <input type="password" name="cpassword" className="inp1" id="" placeholder="Confirm Password" required/><br />
      <br/>
      <input type="submit" value="Create An Account"/>
        <p>Already Have an Account?</p><Link to="/signin">Sign In</Link>
    </form>

    </div>

        </div>
    );
};

export default Signup;