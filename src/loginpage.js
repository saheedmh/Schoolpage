import './style/loginpage.css';
import {Link} from 'react-router-dom';



const  Loginpage = () => {
  
    return ( 
        <div className="login-container">
        
         <form action="" className="login-form">
            <h2>hi, welcome back</h2>
            <label htmlFor='email'>Email</label>
            <input type="text" id='email'/>
            <br/>
            
            <label htmlFor='password'>password</label>
            <input type="password" name="" id="password" /><br></br>
            <button >login</button><br/>
            <section>         
            <input type="checkbox"  name="" id="" value='remember me' /> <labe id="checkbox-id">Remember me</labe> 
            <br/>
            <Link>forget password</Link>
            </section>
   
            
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