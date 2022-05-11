import React from 'react';
import Title from '../Title';
import './Geography.scss'

function Geography() {
    const [count, setCount] = React.useState(1);

    let addText = React.createRef();

    let text = () =>{
        text = addText.current.value;
        console.log(text);
    }

    return (
        <section className="geography sec-bottom">
            <div className="container">
                <Title
                    title="география"
                />
                <div className='mt-30 mb-50'>
                    <textarea className='mb-15' ref={addText}></textarea>
                    <button className='d-block' onClick={text}>Отправить</button>
                </div>
                <div>
                    <p className='mb-15'>{count}</p>
                    <button className='mr-30'
                        onClick={() => setCount(count - 1)}
                        disabled={count === 0}>
                        -
                    </button>
                    <button className='mr-30'
                        onClick={() => setCount(count + 1)}>
                        +
                    </button>
                    <button
                        onClick={() => setCount(0)}
                        disabled={count === 0}>
                        Reset
                    </button>
                </div>
            </div>
        </section>
    );
}

export default Geography;