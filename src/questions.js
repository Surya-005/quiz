import React, { useState } from "react";
import './question.css'
import { Link } from "react-router-dom";
export default function Questions({ quizz_questions, quizzcategory, error, loading }) {
    let [score, setscore] = useState(0)
    let [attended, setattended] = useState(0)
    console.log(quizz_questions)
    const rightorwrong=(id, option, answer, index)=> {
        setattended(attended + 1)
        if (option === answer) {
            setscore(score + 1)
            let cor_ans = document.querySelector(`.class${id + index}`);
            cor_ans.style.backgroundColor = "rgb(101, 236, 101)";
            cor_ans.style.pointerEvents = "none";
            let parent = cor_ans.parentElement;
            let otherchildren = [...parent.childNodes].filter((node) => node.textContent !== answer)
            otherchildren.forEach((node) => {
                node.style.cssText = "opacity:0.3;background-color:rgb(229, 226, 226);pointer-events:none;";
            })
        }
        else {
            let wro_ans = document.querySelector(`.class${id + index}`);
            wro_ans.style.cssText = 'background-color:lightcoral;opacity:0.5;'
            let parent = wro_ans.parentElement;
            let options = [...parent.childNodes].filter((option) => option.textContent !== wro_ans.innerHTML)
            options.forEach((node) => {
                if (node.textContent === answer) {
                    node.style.backgroundColor = 'rgb(101, 236, 101)'; node.style.pointerEvents = "none"
                }
                else {
                    node.style.cssText = "opacity:0.3;background-color:rgb(229, 226, 226);pointer-events:none;";
                }
            })
        }
    }
    return (

        <main>
            {loading && <h1 className="loading">Loading...</h1>}
            {error && <h1 className="error">{error.message}<br />Try again later</h1>}
            {loading || error ? <Link to={'/'} className="back">Back</Link> : null}
            {!loading && !error ? quizz_questions.length === 0 ?
                <div>
                    <h1 className="empty">there is no data available<br /> try again later</h1>
                </div> :
                <div className="question_and_answers">
                    <div className="heading">
                        <h1>Category: <span>{quizzcategory}</span></h1>
                        <h1>SCORE: <span>{score}</span><span>/</span><span>{quizz_questions.length}</span></h1>
                    </div>
                    <ol className="quizz_question_options">
                        {quizz_questions.map((indexes) => (
                            <li id="question" key={indexes.id}>{indexes.question.text}<span className='difficulty' style={indexes.difficulty === 'hard' ? { color: 'red' } : indexes.difficulty === 'medium' ? { color: 'orange' } : { color: "green" }}>{indexes.difficulty}</span>
                                <ol className="options">
                                    {([indexes.correctAnswer, ...indexes.incorrectAnswers].sort()).map((options, index) =>
                                        (<li className={`class${indexes.id + index}`} onClick={() => rightorwrong(indexes.id, options, indexes.correctAnswer, index)} key={options}>{options}</li>))}
                                </ol>
                            </li>
                        ))}
                    </ol>
                    {attended === 10 ? <div className="result_wrapper">
                        <div className="result">
                            {score >= 5 ? <h1>CONGRATULATION !!! <br /> YOU CORRECTLY ANSWERED <span className="score">{score}</span> QUESTIONS <br /> KEEP GOING!!!</h1> : <h1>BETTER LUCK NEXT TIME <br /> YOU CORRECTLY ANSWERED <span className="score">{score}</span> {score > 1 ? <span>QUESTIONS</span> : <span>QUESTION</span>}</h1>}
                            <Link to="/" >close</Link>
                        </div>
                    </div> : null}
                </div>
                : null}

        </main>

    )
}

