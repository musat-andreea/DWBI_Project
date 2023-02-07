import React, {useState} from 'react';
import axios from "axios";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {apiConfig} from "../apiConfig";

function AddPacient(props) {
    const [name, setName] = useState('');
    const [lastname, setLastname] = useState('');
    const [birthday, setBirthday] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [sex, setSex] = useState('');

    const addPatient = async (e) => {
        e.preventDefault();

        var data = JSON.stringify({
            "nume": lastname,
            "prenume": name,
            "data_nastere": birthday,
            "telefon": phone,
            "email": email,
            "sex": sex
        });
        
        var config = {
            method: 'put',
            url: `${apiConfig.baseUrl}/pacient-create`,
            headers: { 
                'Content-Type': 'application/json'
            },
            data : data
        };
        
        axios(config)
            .then(function (response) {
                if (response.status == 200) {
                    alert ('Patient added');
                    window.location.reload(false);
                }
            })
            .catch(function (error) {
                console.log(error);
                alert ('Please Fill the Patient information');
            });
    };

    return (
        <div id='addpacient'  style={{position: 'relative'}}>
            <h3>Adauga un pacient</h3>
            <Form onSubmit={addPatient}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Nume</Form.Label>
                    <Form.Control type="text" placeholder="Introduceti numele pacientului" onChange={(e) => setName(e.target.value)} />
                    {/*<Form.Text className="text-muted">*/}
                    {/*    We'll never share your email with anyone else.*/}
                    {/*</Form.Text>*/}
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Prenume</Form.Label>
                    <Form.Control type="text" placeholder="Introduceti prenumele pacientului" onChange={(e) => setLastname(e.target.value)} />
                </Form.Group>
                <Form.Group controlId="duedate">
                    <Form.Label>Data nasterii</Form.Label>
                    <Form.Control
                        type="date"
                        name="duedate"
                        placeholder="Introduceti data nasterii"
                        // value={birthday}
                        onChange={(e) => setBirthday(e.target.value)}
                    />
                </Form.Group>
                <br />
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Telefon</Form.Label>
                    <Form.Control type="text" placeholder="Introduceti numarul de telefon al pacientului" onChange={(e) => setPhone(e.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Introduceti adresa de email a pacientului" onChange={(e) => setEmail(e.target.value)} />
                </Form.Group>

                {/*<Form.Group className="mb-3" controlId="formBasicPassword">*/}
                {/*    <Form.Label>Password</Form.Label>*/}
                {/*    <Form.Control type="password" placeholder="Password" />*/}
                {/*</Form.Group>*/}
                <Form.Label>Introduceti sexul pacientului</Form.Label>
                <Form.Select aria-label="Introduceti sexul pacientului" onChange={(e) => setSex(e.target.value)}>
                    <option>Alege optiune</option>
                    <option value="f">Feminin</option>
                    <option value="m">Masculin</option>
                </Form.Select>
                <br />
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>



        </div>
    )
}

export default AddPacient;
