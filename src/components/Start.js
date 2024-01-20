import React, { useContext } from 'react';
import DataContext from '../context/dataContext';

const Start = () => {
    const {startQuiz, showStart} = useContext(DataContext);
    return (
        <section className='text-white text-center bg-dark' style={{ display: `${showStart ? 'block' : 'none'}` }}>
            <div className="container">
                <div className="row vh-100 align-items-center justify-content-center">
                    <div className="col-lg-8">
                        <h1 className='fw-bold mb-4'>Quiz game🤗</h1>
                        <h2>Discover endless fun and knowledge with our Quiz App!
                            Perfect for testing your expertise and sharing results with friends!!🤩💓💥</h2>

                        <button onClick={startQuiz} className="btn px-4 py-2 bg-light text-dark fw-bold">play  Quiz</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Start;