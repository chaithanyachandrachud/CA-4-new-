import React, { useContext, useState } from 'react';
import DataContext from '../context/dataContext';

const Quiz = () => {
  const { showQuiz, question, quizs, checkAnswer, correctAnswer, selectedAnswer, questionIndex, nextQuestion, showTheResult } = useContext(DataContext);

  const [isDarkMode, setDarkMode] = useState(false);
  const [highlighted, setHighlighted] = useState(false);
  const [buttonText, setButtonText] = useState('Theme');

  const toggleTheme = () => {
    setDarkMode(!isDarkMode);
    setButtonText(isDarkMode ? ' Light' : ' Dark');
  };

  const highlightQuestion = () => {
    setHighlighted(true);
  };

  const deHighlightQuestion = () => {
    setHighlighted(false);
  };

  return (
    <section className={`text-white ${isDarkMode ? 'bg-dark' : 'bg-light'}`} style={{ display: `${showQuiz ? 'block' : 'none'}` }}>
      <button
        id='theme'
        onClick={toggleTheme}
        style={{
          padding: '10px 16px', // Adjust padding as needed
          fontSize: '16px', // Adjust font size as needed
          borderRadius: '5px', // Add border radius as needed
          cursor: 'pointer', // Add cursor style for better user experience
          margin:'10px',
          background:'blue'
        }}
      >
        {buttonText}
      </button>
      <div className={`container ${isDarkMode ? 'bg-dark' : 'bg-light'}`}>
        <div className="row vh-100 align-items-center justify-content-center">
          <div className="col-lg-8">
            <div className="card p-4" style={{ background: '#3d3d3d', borderColor: '#646464' }}>
              <div className="d-flex justify-content-between gap-md-3">
                <h5 className={`mb-2 fs-normal lh-base ${highlighted ? 'highlighted-text' : ''}`}>{question?.question}</h5>
                <h5 style={{ color: '#60d600', width: '100px', textAlign: 'right' }}>{quizs.indexOf(question) + 1} / {quizs?.length}</h5>
              </div>
              <div>
                {question?.options?.map((item, index) => (
                  <button
                    key={index}
                    className={`option w-100 text-start btn text-white py-2 px-3 mt-3 rounded btn-dark ${correctAnswer === item && 'bg-success'}`}
                    onClick={(event) => checkAnswer(event, item)}
                  >
                    {item}
                  </button>
                ))}
              </div>

              {(questionIndex + 1) !== quizs.length ? (
                <button className='btn py-2 w-100 mt-3 bg-primary text-light fw-bold' onClick={nextQuestion} disabled={!selectedAnswer}>Next Question</button>
              ) : (
                <button className='btn py-2 w-100 mt-3 bg-primary text-light fw-bold' onClick={showTheResult} disabled={!selectedAnswer}>Show Result</button>
              )}

              <div>
                <button className='btn py-2 w-100 mt-3 bg-primary text-light fw-bold' onClick={highlightQuestion}>Highlight</button>
                <button className='btn py-2 w-100 mt-3 bg-primary text-light fw-bold' onClick={deHighlightQuestion}>De-highlight</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Quiz;


