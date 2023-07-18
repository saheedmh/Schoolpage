import './style/loginpage.css';
import {Link} from 'react-router-dom';



const  Loginpage = () => {
  
    return ( 
        <div className="login-container">
        
         <form action="" className="login-form">
            <h2>hi, welcome back</h2>
            <label>Email</label>
            <input type="text" />
            <label>password</label>
            <input type="password" name="" id="" /><br></br>
            <section>         
            <input type="checkbox"  name="" id="" value='remember me' /> <labe>Remember me</labe> 
            <br></br>
            <Link>forget password</Link>
            </section>
   
            <button >login</button><br></br>
          <span>or With</span><br /><br /><br />

          <button  >login with facebook</button><br></br><br />
          <button id='btn-id'>login with google</button><br></br>
          <p>Don't have  an account?       
          <spa><Link to="signpage" className='link'>
          sign</Link></spa> </p> 

         </form>   
        </div>
     );
}
 
export default Loginpage ;