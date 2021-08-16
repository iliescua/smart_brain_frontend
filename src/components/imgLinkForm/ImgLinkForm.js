import React from 'react';
import './ImgLinkForm.css';

const ImgLinkForm = ({ onInputChange, onSubmit }) => {
    const enterKey = (e) => {
        if (e.key === "Enter"){
            onSubmit();
        }
    }
    return (
        <div>
            <p className='f3 white'>
                {'The Smart Brain will detect faces in photos. Give it a try!'}
            </p>
            <div className='center'>
                <div className='center form pa4 br3 shadow-5 w-50'>
                    <input
                        className='f4 pa2 w-70 center'
                        type='text'
                        onKeyPress={(e) => enterKey(e)}
                        onChange={onInputChange}>
                    </input>
                    <button
                        className='w-30 grow f4 link ph3 pv2 dib white bg-light-purple'
                        onClick={onSubmit}
                    >Detect</button>
                </div>
            </div>
        </div>
    );
}

export default ImgLinkForm;