import './style/programcontent.css'
const ProgramFirstContent = () => {
    return ( 
        <div className="program-first-content">
            <div className="firstprogram-content ">
                <h1>Start your new career today!</h1>
                <img src="./images/program-image.png" alt="" />
            </div>
       
       <div className="prgrm-second-col">
       <div className='para'>
        <p>HackYourFuture is a free 9-month front end web development program for newcomers passionate about code and web development. You don’t need any technical background to start, only loads of motivation.</p>

<p>
If you want to kickstart your career in the IT sector, take your chance!
Women are strongly encouraged to apply!
</p>
 
 <p>
Class starts: end September 2021 (Applications CLOSED)

Next call for Applications: to be announced</p>
</div>
<button>apply</button>
       </div>
       <div className="seconds-cols">
        <div className="first-row">
        <h2>Who can apply?</h2>
        <p>We teach motivated refugees and newcomers with limited access to education or the labor market who want to start their career in web development. The course is open to anyone staying in Belgium. Women are strongly encouraged to apply!</p>
        </div>
<div className="checkbox-div">
    <input type="checkbox" /> You’re +18 years old 
<br /><br />
    <input type="checkbox"  /> You’re extremely motivated to start a career in web development. <br /><br />
    <input type="checkbox"  /> You speak English at an intermediate level. <br /><br />
    <input type="checkbox"  /> You can study a minimum of 25 hours per week.
 <br /><br />
 <input type="checkbox" /> You are recognise as a refugee or writing for your recognition. <br /><br />
 <input type="checkbox"  /> You a migrant with limited access to education or the labor market.
</div>
       </div>

       <div className="third-cols">
        <div className="third-col-text">
             <h2>8-month program</h2>
             <button>discover a full curriculum here</button>
             <br /><br />
             <button id='btnid'>become a coach</button>
        </div>
        <div className="third-col image">
            <img src="./images/html-image.png" alt="" />
             </div>
       </div>
       
       <div className="fourth-row">
            <div className="fourth-text">
                <h4>final project</h4>
                <p>We challenge our graduates to a 6-weeks final project sprint, where they build open source projects with a social impact. During the final project spring, the students get acquainted with new skills, discover new ways to collaborate, processes and learn about the industry best practices that are expected in the local labor market.</p>
               </div>
                <div className="heading-text">
                    <h1>But that's not it</h1>
                </div>
            </div>
           <div className="image-divs">
            <img src="./images/finalproject.js.png" alt="" />
            </div>
            <button id='btnsid'>Read more</button>
            <div className="fifth-col">
                <div className="fifth-row">
                    <div className="rows-text">
                        <h3>Towards a job: Mentorship Program</h3>
                        <p>Career guidance is an essential part of our program, as the real challenge for our graduates is finding an internship or job as a junior web developer.

Thanks to our voluntary mentors, we offer our students a career guiding journey when graduating from our program. Each student has its own mentor, who helps with updating their CV and LinkedIn profile, writing a motivation letter, doing a mock interview, and leading them through the job-hunting jungle in the IT sector</p>
<button id='btnids'>become a mentor</button>
                    </div>
                    <div className="rows-image">
                        <img src="./images/activity.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
        
     );
}
 
export default ProgramFirstContent;