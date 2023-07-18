import './style/header.css';
import {Link} from 'react-router-dom';
const Nav = () => {
    return (  
        <>
        <div className="main-header">
        <img src="./images/logo.png" alt="" />
        <div className="navbar">
           <div className='Link' >
           <Link className='link' to='homepage' >home</Link>
            
            
           
            <Link className='link' to={'/'}>signUp</Link>
            <Link className='link' to={'/loginpage'}>login</Link>
            
           </div>
        </div>
        
    </div>
    </>
    
    );
}
 
export default Nav;
