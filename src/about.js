import Aboutcontent from "./aboutcontent";
import Footer from "./footer";
import SecondCol from "./secondscol";
import Teamcomponent from "./teamcomponent";
 
const About = () => {
    return ( 
        <div className="about-div">
            <Aboutcontent/>
            <SecondCol/>
            <Teamcomponent/>
            <Footer/> 

        </div>
     );
}
 
export default About;