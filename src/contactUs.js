import './style/contact.css'
const Contactus = () => {
    return ( 
        <div className="contact-div">
       <div className='side-row'>
        <h1>contact us</h1>
        <p>We’re always happy to welcome people like you to our HYF community. Drop us a line and become part of it!</p>
        </div>
            <form action="" className="contact-form">
             <input type="text" />
             <label id='user'
             htmlFor="full name">full name</label>
             
             <input type="text" />
             <label htmlFor="" id='email'>email</label>
             
             <textarea name="" id="" cols="30" rows="10" placeholder="your message"></textarea>
            <button type='button'>send</button>
            </form>
        </div>
     );
}
 
export default Contactus;