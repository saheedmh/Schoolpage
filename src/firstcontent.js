import './style/firstcontent.css';
const Firstcontent = () => {
    return ( 
        <div className="first-content">
            <div className="text-div">
                <h2>our program</h2>
                <p>Our 8-month program is divided into 12 modules. The last module is a 6-weeks intensive Final Project where students work on a real project with a real partner. Our training takes place at BeCentral (Brussels) every Sunday. During the week, students are supported online in their self-study, homework and peer learning.</p>
                <button>read more</button>
            </div>
            <div className="img-div">
                <img src="./images/image-prjt.png" alt="" />
            </div>
        </div>
     );
}
 
export default Firstcontent;