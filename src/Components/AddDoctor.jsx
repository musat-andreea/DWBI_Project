import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/css/bootstrap.css';

function AddDoctor(props) {
    const [name, setName] = useState('');
    const [prenume, setPrenume] = useState('');
    const [hireDate, setHireDate] = useState('');

    const getDoctors = async () => {
        let doctors = await axios.get(`http://localhost:8008/doctors`);
    };
    const addDoctor = async (e) => {
        e.preventDefault();

        var data = JSON.stringify({
            "id_spital": 1,
            "id_specializare": 1,
            "nume": name,
            "prenume": prenume,
            "data_angajare": hireDate
          });
          
          var config = {
            method: 'put',
            url: 'http://localhost:8008/doctor-create',
            headers: { 
              'Content-Type': 'application/json'
            },
            data : data
          };
          
          axios(config)
            .then(function (response) {
                if (response.status == 200) {
                    alert (`Doctor ${name} added`);
                    window.location.reload(false);
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

        let response = await axios.delete('http://localhost:8008/doctors');
    };

    useEffect(() => {

    });
    return (
            <Form onSubmit={addDoctor}  style={{position: 'relative'}}>
                <h3>Adauga un doctor</h3>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Nume</Form.Label>
                    <Form.Control type="text" placeholder="Introduceti numele doctorului" onChange={(e) => setName(e.target.value)}/>
                    <Form.Control type="text" placeholder="Introduceti prenumele doctorului" onChange={(e) => setPrenume(e.target.value)}/>
                    {/*<Form.Text className="text-muted">*/}
                    {/*    We'll never share your email with anyone else.*/}
                    {/*</Form.Text>*/}
                </Form.Group>
                <Form.Group controlId="duedate">
                    <Form.Label>Data angajarii</Form.Label>
                    <Form.Control
                        type="date"
                        name="duedate"
                        placeholder="Introduceti data angajarii"
                        //value={hireDate}
                        onChange={(e) => setHireDate(e.target.value)}
                    />
                </Form.Group>
                <br />
                {/*<Form.Group className="mb-3" controlId="formBasicEmail">*/}
                {/*    <Form.Label>Spital</Form.Label>*/}
                {/*    <Form.Control type="text" placeholder="Introduceti spitalul doctorului" onChange={(e) => setName(e.target.value)}/>*/}
                {/*    /!*<Form.Text className="text-muted">*!/*/}
                {/*    /!*    We'll never share your email with anyone else.*!/*/}
                {/*    /!*</Form.Text>*!/*/}
                {/*</Form.Group>*/}
                {/*<Form.Group className="mb-3" controlId="formBasicEmail">*/}
                {/*    <Form.Label>Specializare</Form.Label>*/}
                {/*    <Form.Control type="text" placeholder="Introduceti specializarea doctorului" onChange={(e) => setName(e.target.value)}/>*/}
                {/*    /!*<Form.Text className="text-muted">*!/*/}
                {/*    /!*    We'll never share your email with anyone else.*!/*/}
                {/*    /!*</Form.Text>*!/*/}
                {/*</Form.Group>*/}
                {/*<Form.Group className="mb-3" controlId="formBasicPassword">*/}
                {/*    <Form.Label>Password</Form.Label>*/}
                {/*    <Form.Control type="password" placeholder="Password" />*/}
                {/*</Form.Group>*/}

                <br />
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>

    );
}

export default AddDoctor;
