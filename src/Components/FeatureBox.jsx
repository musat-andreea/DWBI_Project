import React from 'react';

function FeatureBox(props) {
    return (
        <div className='a-box'>
            <div className='a-b-img'>
                <img src={props.image}/>
            </div>
            <div className='s-b-text'>
                <h2> {props.title} </h2>
                <p>Lorem ipsum dolor sit amet cosectetur adipiscing elit. Magni, blanditilis!</p>

                <br/><br/>
                <button id= "submitBtn" className = "button-text" onClick={() => props.doctorDeleteFunction(props.doctorId)}>Delete doctor</button>
            </div>

        </div>
    )
}

export default FeatureBox;