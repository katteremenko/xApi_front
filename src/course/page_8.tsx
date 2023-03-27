import React from 'react'

const PageEight = () => {
    return (
        <>

            <div className="quiz" role="form">
                <div className="title">
                    <div className="title-contents">
                        <div className="title-contents-heading">Questions</div>
                        <div className="title-contents-buttons">
                            <button>(Select correct
                                answers) &check;</button>
                            <button>(Select wrong
                                answers) &cross;</button>
                        </div>
                    </div>
                    <div className="titleunderbar"></div>
                </div>
                <div className="body-content">
                    <label htmlFor="q0" id="q0-question">How many major types of rock are there?</label>
                    <input type="text" id="q0" name="q0" data-answer="3"/>
                </div>
                <div className="body-content">
                    <label htmlFor="q1" id="q1-question">What is the outermost layer of the earth's structure?</label>
                    <select name="q1" id="q1">
                        <option value="lower_mantle">Lower mantle</option>
                        <option value="crust" data-correct="yes">Crust</option>
                        <option value="upper_mantle">Upper mantle</option>
                        <option value="outer_core">Outer core</option>
                    </select>
                </div>
                <div className="body-content">
                    <label htmlFor="q2" id="q2-question">How many types of faults are there?</label>
                    <input type="text" id="q2" name="q2" data-answer="3"/>
                </div>
                <div className="body-content radio">
                    <label id="q3-question">What type of rock solidifies or crystallizes from melt?</label>
                    <div className="radiochoices">
                        <div className="radiochoice">
                            <input type="radio" name="q3" id="q3_1" value="sedimentary"/><label
                            htmlFor="q3_1">Sedimentary</label>
                        </div>
                        <div className="radiochoice">
                            <input type="radio" name="q3" id="q3_2" value="igneous" data-correct="yes"/><label
                            htmlFor="q3_2">Igneous</label>
                        </div>
                        <div className="radiochoice">
                            <input type="radio" name="q3" id="q3_3" value="metamorphic"/><label
                            htmlFor="q3_3">Metamorphic</label>
                        </div>
                    </div>
                </div>
                <div className="body-content">
                    <label htmlFor="q4" id="q4-question">Which of these are distinct physical properties of rocks?
                        (select all that
                        apply)</label>
                    <select name="q4" id="q4" multiple>
                        <option value="absorbency">Absorbency</option>
                        <option value="luster" data-correct="yes">Luster</option>
                        <option value="hardness" data-correct="yes">Hardness</option>
                        <option value="intelligence">Intelligence</option>
                    </select>
                </div>
                <div className="body-content">
                    <button>Submit Answers</button>
                </div>
            </div>

        </>
    )
}

export default PageEight