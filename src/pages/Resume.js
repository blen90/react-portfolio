import './style.css';

export default function Resume() {
    return (
       
        <div className="resume col-12-lg col-6-md col-3-sm text-center">
            <h1>Learned Technologies</h1>
            <div className="skill-container ">
                <li className="skill"><a href="https://www.w3schools.com/html/default.asp" target="_blank" rel="noreferrer"><img className="skill-logo display:inline" src="../assets/icons/html.jpg" alt="logo"></img></a></li>
                <li className="skill"><a href="https://www.w3schools.com/css/default.asp" target="_blank" rel="noreferrer"><img className="skill-logo display:inline" src="../assets/icons/css.jpg" alt="logo"></img></a></li>
                <li className="skill"><a href="https://www.w3schools.com/js/default.asp" target="_blank" rel="noreferrer"><img className="skill-logo display:inline" src="../assets/icons/js.jpg" alt="logo"></img></a></li>
                <li className="skill"><a href="https://nodejs.org/en/docs/" target="_blank" rel="noreferrer"><img className="skill-logo display:inline" src="../assets/icons/node.jpg" alt="logo"></img></a></li>
                <br></br>
                <li className="skill"><a href="https://dev.mysql.com/doc/" target="_blank" rel="noreferrer"><img className="skill-logo display:inline" src="../assets/icons/mysql.jpg" alt="logo"></img></a></li>
                <li className="skill"><a href="https://www.mongodb.com/" target="_blank" rel="noreferrer"><img className="skill-logo display:inline" src="../assets/icons/mongo.jpg" alt="logo"></img></a></li>
                <li className="skill"><a href="https://reactjs.org/" target="_blank" rel="noreferrer"><img className="skill-logo display:inline" src="../assets/icons/react.jpg" alt="logo"></img></a></li>
                <li className="skill"><a href="https://graphql.org/" target="_blank" rel="noreferrer"><img className="skill-logo display:inline" src="../assets/icons/graphql.jpg" alt="logo"></img></a></li>
            </div>
        </div>
    );
}









