// my requirement is to convert the text to upper case and display it in the paragraph tag and also reset the text and upperText state variables to empty string so code is as follows

import React, { useState } from 'react';

const TextConvert = () => {
    const [text, setText] = useState('');  // example of text is 'hello world' and setText is the function to update the state variable
    const [upperText, setUpperText] = useState('');  // example of upperText is 'HELLO WORLD' and setUpperText is the function to update the state variable

    const convertToUpperCase = () => {
        setUpperText(text.toUpperCase());  // update the upperText state variable to the upper case of the text state variable
    }

    const resetText = () => {
        setText('');  // reset the text state variable to empty string
        setUpperText('');  // reset the upperText state variable to empty string
    }

    return (
        <div className="container">
            <h1>Text Convert</h1>
            <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
            <button onClick={convertToUpperCase}>Convert to Upper Case</button>

            <button onClick={resetText}>Reset</button>
            <p>{upperText}</p>
        </div>
    );
}

export default TextConvert;





