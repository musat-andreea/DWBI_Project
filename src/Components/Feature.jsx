import React from 'react';
import FeatureBox from "./FeatureBox";
import featureimage from '../images/feature1.jpg';
import featureimage1 from '../images/feature2.jpg'
import featureimage2 from '../images/feature3.jpg'

function Feature() {
    return (
        <div id='features'>
            <div className='a-container'>
                <FeatureBox image={featureimage} title='Hospital Lounge'/>
                <FeatureBox image={featureimage1} title='Monitoring Room'/>
                <FeatureBox image={featureimage2} title='Emergency Room'/>
            </div>
        </div>
    )
}

export default Feature;