import React, {useState} from 'react';
import axios from "axios";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function AddPacient(props) {
    const [name, setName] = useState('');
    const [lastname, setLastname] = useState('');
    const [birthday, setBirthday] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');


    const addPatient = async (e) => {
        e.preventDefault();

        var data = JSON.stringify({
            "nume": lastname,
            "prenume": name,
            "data_nastere": birthday,
            "telefon": phone,
            "email": email
        });
        
        var config = {
            method: 'put',
            url: 'http://localhost:8008/pacient-create',
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
        <div id='addpacient'>
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
                {/*<Form.Group className="mb-3" controlId="formBasicCheckbox">*/}
                {/*    <Form.Check type="checkbox" label="Check me out" />*/}
                {/*</Form.Group>*/}
                <br />
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>



        </div>
    )
}

export default AddPacient;
