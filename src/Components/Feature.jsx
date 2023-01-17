import React, {useEffect, useState} from 'react';
import FeatureBox from "./FeatureBox";
import featureimage from '../images/feature1.jpg';
import featureimage1 from '../images/feature2.jpg'
import featureimage2 from '../images/feature3.jpg'
import axios from "axios";
import {apiConfig} from "../apiConfig";

function Feature() {
    const doctorsDb = [
        {'id': 1, 'nume': 'Andreea Popescu'},
        {'id': 2, 'nume': 'Marius Ionescu'},
    ];
    
    const [doctors, setDoctors] = useState(doctorsDb);

    const getDoctors = async () => {
        let response = await axios.get(`${apiConfig.baseUrl}/doctors`);
        let data = response.data;
        let doctorsArr = [];
        for (let doctor of data)    {
            doctorsArr.push(doctor);
        }

        setDoctors(doctorsArr);
    };


    const deleteDoctor = async (doctor_id) => {
        let response = await axios.delete(`${apiConfig.baseUrl}/doctor-delete/${doctor_id}`);

        if (response.status == 200) {
            alert('Doctor deleted');
        } else {
            alert('Error');
        }
    };

    useEffect(() => {
       // getDoctors();
    });

    return (
        <div id='features'>
            <div className='a-container'>
                {doctors.map((doctor) => {
                    return <>
                        <FeatureBox image={featureimage} title={doctor.nume} doctorId={doctor.id} doctorDeleteFunction={deleteDoctor}/>
                        </>
                })}
            </div>
        </div>
    )
}

export default Feature;