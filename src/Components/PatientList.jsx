import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FeatureBox from "./FeatureBox";
import featureimage from "../images/feature1.jpg";
import Table from 'react-bootstrap/Table';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/css/bootstrap.css';

let fetched = false;

function PatientList(props) {

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
                setPatients(response.data.map(el => el[0]));
            })
            .catch(function (error) {
                console.log(error);
            });
    };

    useEffect(() => {
        if (!fetched) {
            fetched = true;
            getPatients();
        }
    }, []);
    return (
        <div id='features'>
            <div className='a-container'>
                {patients.map((name) => {
                    return <>
                        <FeatureBox image={featureimage} title={name} doctorId={null} doctorDeleteFunction={getPatients}/>
                    </>
                })}
            </div>
            <Table striped bordered hover>
                <thead>
                <tr>
                    <th>#</th>
                    <th>Nume</th>
                    <th>Prenume</th>
                    <th>Telefon</th>
                    <th>Email</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>1</td>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>965486969</td>
                    <td>@ougbov</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>965486969</td>
                    <td>@ougbov</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>965486969</td>
                    <td>@ougbov</td>
                </tr>
                </tbody>
            </Table>
        </div>
    )
}

export default PatientList;
