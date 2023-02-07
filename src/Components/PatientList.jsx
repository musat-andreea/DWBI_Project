import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FeatureBox from "./FeatureBox";
import featureimage from "../images/feature1.jpg";
import Table from 'react-bootstrap/Table';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/css/bootstrap.css';
import {TableSimple} from 'react-pagination-table';
import ReactPaginate from "react-paginate";
import {apiConfig} from "../apiConfig";

let fetched = false;

function PatientList(props) {

    const [editMode, setEditMode] = useState(false);
    const [patients, setPatients] = useState([]);
    const [loading, setLoading] = useState(true);
    const [pacientName, setPacientName] = useState('');
    const [pacientPrename, setPacientPrename] = useState('');
    const [pacientPhone, setPacientPhone] = useState('');
    const [pacientEmail, setPacientEmail] = useState('');
    const pageSize = 15;

    const handlePacientNameEdit = async (e) => {
        let newName = e.target.value;
        setPacientName(newName);
    };

    const handleSave = async (e, patientId) => {
        let data = {
            nume: pacientName,
            prenume: pacientPrename,
            telefon: pacientPhone,
            email: pacientEmail
        };

        let config = {
            method: 'patch',
            url: `http://localhost:8008/pacient-update/${patientId}`,
            headers: {
                'Content-Type': 'application/json'
            },
            data: data
        };

        axios(config)
            .then(function (response) {
                if (response.status == 200) {
                    alert(`Pacient ${pacientName} edited`);
                    window.location.reload(true);
                }
            })
            .catch(function (error) {
                console.log(error);
                alert('Please Fill the Patient information');
            });
    };

    const getPatients = async (pageNr) => {

        const config = {
            method: 'get',
            url: `${apiConfig.baseUrl}/pacients?pageSize=${pageSize}&pageNr=${pageNr}`,
            headers: {},
            data: ''
        };

        setLoading(true);
        axios(config)
            .then(response => {
                setPatients(response.data.map(nume => nume));
                setLoading(false)
            })
            .catch(function (error) {
                console.log(error);
            });
    };
    // console.log("PACIENTI ", getPatients());

    useEffect(() => {
        if (!fetched) {
            fetched = true;
            getPatients(1);
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

    const handlePageClick = async (event) => {
        console.log('change page ', event.selected + 1);
        getPatients(event.selected + 1);
    };

    const Header = ["Nume", "Prenume", "Sex", "Data Nasterii", "Telefon", "Email"];

    return (
        <div id='features' style={{position: 'relative'}}>
            <h3>Lista pacientilor</h3>
            <Table striped bordered hover>
                <thead>
                <tr>
                    <th>#</th>
                    <th>Nume</th>
                    <th>Prenume</th>
                    <th>Data Nasterii</th>
                    <th>Telefon</th>
                    <th>Email</th>
                    <th>Setari</th>
                </tr>
                </thead>
                <tbody>
                {!loading && patients.length > 0 && patients.map((name, index) => {
                    return <>
                        <tr key={`${name[0]}-${index}`}>
                            <td>{name[0]}</td>
                            {/*<  title={name} />*/}
                            <td>{editMode == false ? name[1] :
                                <input type={'text'} className={''} onChange={(e) => handlePacientNameEdit(e)}
                                       defaultValue={name[1]}/>}</td>
                            <td>{editMode == false ? name[2] :
                                <input type={'text'} className={''} onChange={(e) => setPacientPrename(e.target.value)}
                                       defaultValue={name[2]}/>}</td>
                            <td>{name[4]}</td>

                            <td>{editMode == false ? name[5] :
                                <input type={'text'} className={''} onChange={(e) => setPacientPhone(e.target.value)}
                                       defaultValue={name[5]}/>}</td>
                            <td>{editMode == false ? name[6] :
                                <input type={'text'} className={''} onChange={(e) => setPacientEmail(e.target.value)}
                                       defaultValue={name[6]}/>}</td>
                            <td>
                                <button onClick={() => deletePatient(name[0])}>Sterge pacientul</button>
                                <button style={{marginLeft: 1 + 'em'}}
                                        onClick={(e) => {
                                            if (!editMode) {
                                                setEditMode(true);
                                            } else {
                                                setEditMode(false);
                                                handleSave(e, name[0]);
                                            }
                                        }}>
                                    {editMode ? 'Salveaza' : 'Editeaza pacient'}
                                </button>
                            </td>
                        </tr>
                    </>
                })}
                </tbody>
                <br/>
                <br/>
            </Table>
            <ReactPaginate
                breakLabel="..."
                nextLabel="next >"
                onPageChange={handlePageClick}
                pageRangeDisplayed={4}
                pageCount={42}
                previousLabel="< previous"
                renderOnZeroPageCount={null}
                pageClassName="page-item"
                pageLinkClassName="page-link"
                previousClassName="page-item"
                previousLinkClassName="page-link"
                nextClassName="page-item"
                nextLinkClassName="page-link"
                breakClassName="page-item"
                breakLinkClassName="page-link"
                containerClassName="pagination"
                activeClassName="active"
            />
        </div>
    )
}

export default PatientList;
