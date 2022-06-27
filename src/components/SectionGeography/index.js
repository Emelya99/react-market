import React from 'react';
import Title from '../Title';
import './Geography.scss'

const API_KEY = process.env.REACT_APP_API_KEY


function Geography() {    

    return (
        <section className="geography sec-bottom">
            <div className="container">
                <Title
                    title="география"
                />
                <p>{API_KEY}</p>
            </div>
        </section>
    );
}

export default Geography;