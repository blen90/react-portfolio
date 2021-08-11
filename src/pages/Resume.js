import './style.css';

export default function Resume() {
    return (

        
        <div className="resume col-12-lg col-6-md col-3-sm text-center">
            <h1>Learned Technologies</h1>
            <div className="skill-container ">
                <li className="skill"><img className="skill-logo display:inline" src="../assets/icons/html.jpg" alt="logo"></img></li>
                <li className="skill"><img className="skill-logo display:inline" src="../assets/icons/css.jpg" alt="logo"></img></li>
                <li className="skill"><img className="skill-logo display:inline" src="../assets/icons/js.jpg" alt="logo"></img></li>
                <li className="skill"><img className="skill-logo display:inline" src="../assets/icons/node.jpg" alt="logo"></img></li>
                <br></br>
                <li className="skill"><img className="skill-logo display:inline" src="../assets/icons/mysql.jpg" alt="logo"></img></li>
                <li className="skill"><img className="skill-logo display:inline" src="../assets/icons/mongo.jpg" alt="logo"></img></li>
                <li className="skill"><img className="skill-logo display:inline" src="../assets/icons/react.jpg" alt="logo"></img></li>
                <li className="skill"><img className="skill-logo display:inline" src="../assets/icons/graphql.jpg" alt="logo"></img></li>
            </div>
        </div>
    );
}