import './style.css';
import HTML from '../assets/icons/html.jpg';
import CSS from '../assets/icons/css.jpg';
import JS from '../assets/icons/js.jpg';
import NODE from '../assets/icons/node.jpg';
import MySQL from '../assets/icons/mysql.jpg';
import Mongo from '../assets/icons/mongo.jpg';
import React from '../assets/icons/react.jpg';
import GraphQL from '../assets/icons/graphql.jpg';

export default function Resume() {
    return (     
        <div className="resume col-12-lg col-6-md col-3-sm text-center">          
            <h1>Learned Technologies</h1>
            <div className="skill-container ">
                <li className="skill"><a href="https://www.w3schools.com/html/default.asp" target="_blank" rel="noreferrer"><img className="skill-logo display:inline" src={HTML} alt="logo"></img></a></li>
                <li className="skill"><a href="https://www.w3schools.com/css/default.asp" target="_blank" rel="noreferrer"><img className="skill-logo display:inline" src={CSS} alt="logo"></img></a></li>
                <li className="skill"><a href="https://www.w3schools.com/js/default.asp" target="_blank" rel="noreferrer"><img className="skill-logo display:inline" src={JS} alt="logo"></img></a></li>
                <li className="skill"><a href="https://nodejs.org/en/docs/" target="_blank" rel="noreferrer"><img className="skill-logo display:inline" src={NODE} alt="logo"></img></a></li>
                <br></br>
                <li className="skill"><a href="https://dev.mysql.com/doc/" target="_blank" rel="noreferrer"><img className="skill-logo display:inline" src={MySQL} alt="logo"></img></a></li>
                <li className="skill"><a href="https://www.mongodb.com/" target="_blank" rel="noreferrer"><img className="skill-logo display:inline" src={Mongo} alt="logo"></img></a></li>
                <li className="skill"><a href="https://reactjs.org/" target="_blank" rel="noreferrer"><img className="skill-logo display:inline" src={React} alt="logo"></img></a></li>
                <li className="skill"><a href="https://graphql.org/" target="_blank" rel="noreferrer"><img className="skill-logo display:inline" src={GraphQL} alt="logo"></img></a></li>
                <br></br>
                <a href="https://drive.google.com/file/d/1DX50CG6UXmlpGEqXAGVL5MvHmI8Lzm_b/view?usp=sharing" target="_blank" rel="noreferrer">Link to Resume on Google Drive</a>
            </div>
        </div>
    );
}





