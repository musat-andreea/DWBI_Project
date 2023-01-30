import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FeatureBox from "./FeatureBox";
import featureimage from "../images/feature1.jpg";
import Table from 'react-bootstrap/Table';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/css/bootstrap.css';
import { TableSimple } from 'react-pagination-table';

let fetched = false;

function PatientList() {

    const [patients, setPatients] = useState([]);

    const getPatients = async () => {

        const config = {
            method: 'get',
            url: 'http://localhost:8008/pacients',
            headers: { },
            data : ''
        };

        axios(config)
            .then(response => {
                setPatients(response.data.map(nume => nume));
            })
            .catch(function (error) {
                console.log(error);
            });
    };
    // console.log("PACIENTI ", getPatients());

    useEffect(() => {
        if (!fetched) {
            fetched = true;
            getPatients();
        }
    }, []);

    const deletePatient = async (patient_id) => {
        let response = await axios.delete(`http://localhost:8008/pacient-delete/${patient_id}`);

        if (response.status == 200) {
            alert('Patient deleted');
            window.location.reload(false);
        } else {
            alert('Error');
        }
    };

    const Header = ["Nume", "Prenume", "Sex", "Data Nasterii", "Telefon", "Email" ];

    return (
        <div id='features'>
            {/*<Table striped bordered hover>*/}
            {/*    <thead>*/}
            {/*    <tr>*/}
            {/*        <th>#</th>*/}
            {/*        <th>Nume</th>*/}
            {/*        <th>Prenume</th>*/}
            {/*        <th>Telefon</th>*/}
            {/*        <th>Email</th>*/}
            {/*        <th>Setari</th>*/}
            {/*    </tr>*/}
            {/*    </thead>*/}
            {/*    <tbody>*/}
            {/*    {patients.map((name) => {*/}
            {/*        return <>*/}
            {/*            <tr>*/}
            {/*                <td>{name[0]}</td>*/}
            {/*                /!*<  title={name} />*!/*/}
            {/*                <td>{name[1]}</td>*/}
            {/*                <td>{name[2]}</td>*/}
            {/*                <td>{name[4]}</td>*/}
            {/*                <td>{name[5]}</td>*/}
            {/*                <td><button onClick={() => deletePatient(name[0])}>Sterge pacientul</button>*/}

            {/*                <button style={{marginLeft: 1 + 'em'}}>Editeaza</button></td>*/}
            {/*            </tr>*/}
            {/*        </>*/}
            {/*    })}*/}
            {/*    </tbody>*/}
            {/*    <br />*/}
            {/*    <br />*/}
            {/*</Table>*/}
        </div>
    )
}

export default PatientList;
