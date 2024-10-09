import './style/loginpage.css';
import './style/signup.css';
import {Link} from 'react-router-dom';
import React, {Component } from 'react';
import axios from 'axious'


export default class Signuppage extends Component {
  handleSubmit = (e)  => {
    e.preventDefault()
  const data ={
    first_name: this.firstName,
    last_name :this.lastname,
    email : this.email,
    password:this.password,
    confirm_password:this.confirmpassword
    
      } ;
      //axios.post('https://localhost:3200/post' +data).then(
        //res =>{
         // console.log(res.data)
        //}
      //).catch(
       // err => {
         // console.log(err)
        //}
      //)
    
      };
  
    render(){
      return ( 
      
    
      <div className="signup-container">
  
        <h1>welcome to HackYourFuture institute</h1>
        <form action="" className="signup-form"  >
           
           <h1>Create an account</h1>
           <p>connect with your friends today</p>
           <input type="text" required  placeholder='Enter YOur Username' /><br />
           
           <input type="text"  required placeholder='Enter YOur Email' className='email'  /><br />
          
           
           <input type="password" required name="" id="" placeholder='Enter Your Password' className='pass'  /><br></br>
           
  
           <button className='btn-id'  >login</button><br></br>
         <span>or With</span><br /><br /><br />

         <Link to="homepage"><button >login with facebook</button><br></br><br />
</Link>
         <button id='btn-id'>login with google</button><br></br>
         <p>Already have an account? <Link className="link"  >login</Link></p>
        </form>
        </div>   
     

        
     );
      }

}
 
