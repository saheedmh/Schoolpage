import './style/secondcontent.css'
const Secondcontent = () => {
    return (
        <div className="main-content">  
        <div className="second-content">
            <h1>our impact</h1>
            <p>We graduated over 100 people in Belgium and more than 300 globally. In Belgium, over 70% found and retained a high-quality job as a developer.</p>
            <div className="second-row">
                <div className="first col">
                    <p>100</p>
                    <p>Students graduated since HackYourFuture Belgium was founded in 2018</p>
                </div>
                <div className="second col">
                    <p>70%</p>
                    <p>Of our graduates find an internship, a job or start advanced studies.</p>

                </div>
                <div className="third col">
                    <p>300 +</p>
                    <p>Alumni in the Netherlands, Denmark, Belgium and Canada.</p>
                </div>
            </div>
        </div>
        </div>
    );
}
 
export default Secondcontent;