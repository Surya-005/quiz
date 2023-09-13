import React from 'react';
import QuizzImg from "./quizzimages/doubt.png";
import "./quizzhome.css";
import { Link } from 'react-router-dom'
function Quizzhome() {
    return (
        <div className="landing_page">
            <div className="container">
                <div className="landing_body_left">
                    <div className="its_quizz_time">
                        <span className="its">it's</span>
                        <span className="quizz">
                            <h5 className="q">q</h5>uiz
                        </span>
                        <span className="time">time</span>
                    </div>
                    <p>Feed your brain with our application</p>
                    <div className="letsgo_button">
                        <Link to={'/vinadivina'}>Lets go</Link>
                    </div>
                    <span className="questionmark q2">?</span>
                </div>
                <div className="landing_body_right">
                    <img src={QuizzImg} alt="unavailable" />
                    <span className="questionmark big_q">?</span>
                </div>
            </div>
            <span className="q3">?</span>
                <span className="q4">?</span>
                <span className="q5">?</span>
                <span className="q6">?</span>
                <span className="q7">?</span>
                <span className="q8">?</span>
                <span className="q9">?</span>
                <span className="q10">?</span>
                <span className="q11">?</span>
                <span className="q12">?</span>

        </div>
    )
}
export default Quizzhome;