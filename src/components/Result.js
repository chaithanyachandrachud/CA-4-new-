import React, { useContext, useState } from 'react';
import DataContext from '../context/dataContext';

const Result = () => {
    const { showResult, quizs, marks, startOver }  = useContext(DataContext);
    const [isDarkMode, setDarkMode] = useState(false);

    const toggleTheme = () => {
        setDarkMode(!isDarkMode);
    };

    const buttonText = isDarkMode ? 'Dark' : 'Light';

    const buttonStyle = {
        padding: '10px 16px',
        fontSize: '16px',
        borderRadius: '5px',
        cursor: 'pointer',
        margin: '10px',
        background: 'blue'
    };

    return (
        <section className={`text-white ${isDarkMode ? 'bg-dark' : 'bg-light'}`} style={{ display: `${showResult ? 'block' : 'none'}` }}>
            <button id='theme' onClick={toggleTheme} style={buttonStyle}> {buttonText}</button>
            <div className={`container ${isDarkMode ? 'bg-dark' : 'bg-light'}`}>
                <div className="row vh-100 align-items-center justify-content-center">
                    <div className="col-lg-6">
                        <div className={`text-light text-center p-5 rounded ${marks > (quizs.length * 5 / 1) ? 'bg-success' : 'bg-danger'}`}>
                            <h1 className='mb-2 fw-bold'>{marks > (quizs.length * 1 / 5) ? 'Awesome!' : 'Oops!'}</h1>
                            <h3 className='mb-3 fw-bold'>Your score is {marks} out of {quizs.length * 5}</h3>
                            <button onClick={startOver} className='btn py-2 px-4 btn-light fw-bold d-inline'>Start Over</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Result;

