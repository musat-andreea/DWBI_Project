import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {apiConfig} from "../apiConfig";

function AddDoctor(props) {
    const [name, setName] = useState('');
    const [hireDate, setHireDate] = useState('');

    const getDoctors = async () => {
        let doctors = await axios.get(`${apiConfig.baseUrl}/doctors`);
    };
    const addDoctor = async (e) => {
        e.preventDefault();

        var data = JSON.stringify({
            "id_spital": null,
            "id_specializare": null,
            "nume": name,
            "data_angajare": hireDate
          });
          
          var config = {
            method: 'put',
            url: 'http://192.168.50.125:3002/api/doctor-create',
            headers: { 
              'Content-Type': 'application/json'
            },
            data : data
          };
          
          axios(config)
            .then(function (response) {
                if (response.status == 200) {
                    alert (`Doctor ${name} added`);
                }
            })
            .catch(function (error) {
                console.log(error);
                alert ('Please Fill the Patient information');
            });
    };
    const deleteDoctor = async () => {
        let body = {

        };

        let response = await axios.delete(apiConfig.baseUrl);
    };

    useEffect(() => {

    });
    return (
        <div id='adddoctor'>
            <h3>Adauga un doctor</h3>
            <div className = "form-box">
                <form onSubmit={addDoctor}>

                    <div className = "adddoctor">
                        <p>Numele doctorului</p>
                        <input placeholder="Nume" type="text"  style={{border: '1px solid cyan'}} onChange={(e) => setName(e.target.value)}/>
                        <p>Data angajarii</p>
                        <input type="date" placeholder="Data Angajarii" style={{border: '1px solid cyan'}}  onChange={(e) => setHireDate(e.target.value)}/><br/>
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                    </div>

                    <button type = "submit" id= "submitBtn" className = "button-text">Submit</button>
                </form>

            </div>
        </div>
    )
}

export default AddDoctor;