import React from 'react';
import './FaceRec.css'

const FaceRec = ({ imageUrl, box }) => {
    return (
        <div className='center ma'>
            <div className='absolute mt2'>
                <img id='inputImage' alt='' width='500px' height='auto' src={imageUrl} />
                <div
                    className='bounding_box'
                    style={{ top: box.topRow, right: box.rightCol, bottom: box.botRow, left: box.leftCol }}>
                </div>
            </div>
        </div>
    );
}

export default FaceRec;