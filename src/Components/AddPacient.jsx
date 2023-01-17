import React, {useState} from 'react';
import axios from "axios";
import {apiConfig} from "../apiConfig";

function AddPacient(props) {
    const [name, setName] = useState('');
    const [lastname, setLastname] = useState('');
    const [birthday, setBirthday] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');


    const addPatient = async (e) => {
        e.preventDefault();

        let body =
        {
            "nume": name,
            "prenume": lastname,
            "data_nastere": birthday,
            "telefon": phone,
            "email": email
        };

        let response = await axios.put(`${apiConfig.baseUrl}/pacient-create`, body);
        if (response.status == 200) {
            alert ('Patient added');
        }
    };

    return (
        <div id='addpacient'>
            <h3>Adauga un pacient</h3>
            <div className = "form-box">
                <form onSubmit={addPatient}>

                    <div className = "addpacient">
                        <input placeholder="Nume" type={'text'} onChange={(e) => setName(e.target.value)}/>
                        <input placeholder="Prenume" type={'text'} onChange={(e) => setLastname(e.target.value)}/>
                        <input placeholder="Data Nasterii" style={{border: '1px solid black'}} type={'date'} onChange={(e) => setBirthday(e.target.value)}/>
                        <input placeholder="E-mail" type={'text'} onChange={(e) => setEmail(e.target.value)}/>
                        <input placeholder="Phone 000-000-0000" type={'text'} onChange={(e) => setPhone(e.target.value)}/>
                        <br />
                        <br />
                        <br />
                        <br />
                        {/*<textarea placeholder="Shipping Address"/><br />*/}
                        {/*<textarea placeholder="Physical location of the project"/><br />*/}
                    </div>

                    <button type = "submit" id= "submitBtn" className = "button-text">Submit</button>
                </form>

            </div>


        </div>
    )
}

export default AddPacient;