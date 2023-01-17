import React, {useEffect} from 'react';
import axios from 'axios';
import {apiConfig} from "../apiConfig";

function AddDoctor() {
    const getDoctors = async () => {
        let doctors = await axios.get(apiConfig.baseUrl);
    };
    const addDoctor = async () => {
        let body = {

        };

        let response = await axios.post(apiConfig.baseUrl, body);
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
                <form>

                    <div className = "adddoctor">
                        <input placeholder="Nume"/>
                        <input placeholder="Data Angajarii"/><br/>
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