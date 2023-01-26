import React, {useEffect, useState} from 'react';
import FeatureBox from "./FeatureBox";
import featureimage from '../images/feature1.jpg';
import featureimage1 from '../images/feature2.jpg'
import featureimage2 from '../images/feature3.jpg'
import axios from "axios";
import {apiConfig} from "../apiConfig";

let fetched = false;

function Feature() {


    const [doctors, setDoctors] = useState([]);

    const getDoctors = async () => {

        const config = {
            method: 'get',
            url: 'http://localhost:8008/doctors',
            headers: { },
            data : ''
        };

        axios(config)
            .then(response => {
                setDoctors(response.data.map(el => el[0]));
            })
            .catch(function (error) {
                console.log(error);
            });
    };

    useEffect(() => {
        if (!fetched) {
            fetched = true;
            getDoctors();
        }
    });

    const deleteDoctor = async (doctor_id) => {
        let response = await axios.delete(`http://localhost:8008/doctor-delete/${doctor_id}`);

        if (response.status == 200) {
            alert('Doctor deleted');
        } else {
            alert('Error');
        }
    };

    return (
        <div id='features'>
            <div className='a-container'>
                {doctors.map((doctorName) => {
                    return <>
                        <FeatureBox image={featureimage} title={doctorName} doctorId={null} doctorDeleteFunction={deleteDoctor}/>
                        </>
                })}
            </div>
        </div>
    )
}

export default Feature;