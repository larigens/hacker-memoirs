import { useState } from "react";

export const FormComponent = () => {
    const [points, setPoints] = useState(0);

    const handleFormSubmit = (e) => {
        e.preventDefault();
        let newPoints = 0;

        // Access form elements and their values
        const formElements = e.target.elements;
        // Given answers object:
        const answers = {
            q1: 'a1',
            q2: 'a2',
            q3: 'a2',
            q4: 'a1'
        };

        //      Object.entries(answers) would produce:
        // [
        //     ['q1', 'a1'],
        //     ['q2', 'a2'],
        //     ['q3', 'a2'],
        //     ['q4', 'a1']
        //   ]
        for (const [name, correctAnswer] of Object.entries(answers)) {
            const selectedAnswer = formElements[name].value; //Gets the user answers
            if (selectedAnswer === correctAnswer) {
                newPoints += 1;
            }
        }

        setPoints(newPoints);
    };

    return (
        <form method="post" onSubmit={handleFormSubmit}>
            <h2>Interview Questions</h2>
            <hr></hr>
            <div style={{ margin: "10px 0px" }}>
                <label htmlFor="q1" style={{ margin: "15px 0px" }}>1. What is JSX in React?</label>
                <div style={{ margin: "10px 0px 0px 0px" }}>
                    <input type="radio" id="q1a1" name="q1" value="a1" />
                    <label htmlFor="q1a1">A syntax extension for JavaScript</label>
                </div>
                <div>
                    <input type="radio" id="q1a2" name="q1" value="a2" />
                    <label htmlFor="q1a2">A type of database</label>
                </div>
                <div>
                    <input type="radio" id="q1a3" name="q1" value="a3" />
                    <label htmlFor="q1a3">A CSS preprocessor</label>
                </div>
                <div>
                    <input type="radio" id="q1a4" name="q1" value="a4" />
                    <label htmlFor="q1a4">A backend framework</label>
                </div>
            </div>

            <div style={{ margin: "10px 0px" }}>
                <label htmlFor="q2" style={{ margin: "15px 0px" }}>2. Can JSX be directly rendered by browsers?</label>
                <div style={{ margin: "10px 0px 0px 0px" }}>
                    <input type="radio" id="q2a1" name="q2" value="a1" />
                    <label htmlFor="q2a1">Yes, directly</label>
                </div>
                <div>
                    <input type="radio" id="q2a2" name="q2" value="a2" />
                    <label htmlFor="q2a2">No, it needs to be compiled</label>
                </div>
                <div>
                    <input type="radio" id="q2a3" name="q2" value="a3" />
                    <label htmlFor="q2a3">Only in certain browsers</label>
                </div>
                <div>
                    <input type="radio" id="q2a4" name="q2" value="a4" />
                    <label htmlFor="q2a4">Yes, but only in developer tools</label>
                </div>
            </div>

            <div style={{ margin: "10px 0px" }}>
                <label htmlFor="q3" style={{ margin: "15px 0px" }}>3. Is JSX mandatory in React?</label>
                <div style={{ margin: "10px 0px 0px 0px" }}>
                    <input type="radio" id="q3a1" name="q3" value="a1" />
                    <label htmlFor="q3a1">Yes</label>
                </div>
                <div>
                    <input type="radio" id="q3a2" name="q3" value="a2" />
                    <label htmlFor="q3a2">No, it is optional</label>
                </div>
                <div>
                    <input type="radio" id="q3a3" name="q3" value="a3" />
                    <label htmlFor="q3a3">Only in certain cases</label>
                </div>
                <div>
                    <input type="radio" id="q3a4" name="q3" value="a4" />
                    <label htmlFor="q3a4">Only in React Native</label>
                </div>
            </div>

            <div style={{ margin: "10px 0px" }}>
                <label htmlFor="q4" style={{ margin: "15px 0px" }}>4. How do you render a variable in JSX?</label>
                <div style={{ margin: "10px 0px 0px 0px" }}>
                    <input type="radio" id="q4a1" name="q4" value="a1" />
                    <label htmlFor="q4a1">Wrap it in curly braces</label>
                </div>
                <div>
                    <input type="radio" id="q4a2" name="q4" value="a2" />
                    <label htmlFor="q4a2">Use double quotes</label>
                </div>
                <div>
                    <input type="radio" id="q4a3" name="q4" value="a3" />
                    <label htmlFor="q4a3">Use square brackets</label>
                </div>
                <div>
                    <input type="radio" id="q4a4" name="q4" value="a4" />
                    <label htmlFor="q4a4">Directly place the variable name</label>
                </div>
            </div>

            <button type="submit">Submit</button>

            <div><p style={{ margin: "10px", fontWeight: "bold" }}>Total Points: {points}/4</p></div>
        </form>
    );
};
