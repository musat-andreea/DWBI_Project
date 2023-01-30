import React, {useEffect, useState} from 'react';
import FeatureBox from "./FeatureBox";
import featureimage from '../images/feature1.jpg';
import featureimage1 from '../images/feature2.jpg'
import featureimage2 from '../images/feature3.jpg'
import axios from "axios";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ReactPaginate from "react-paginate";

let fetched = false;

function Feature() {


    const [doctors, setDoctors] = useState([]);
    const pageSize = 4;

    const getDoctors = async (pageNr) => {

        const config = {
            method: 'get',
            url: `http://localhost:8008/doctors?pageSize=${pageSize}&pageNr=${pageNr}`,
            headers: { },
            data : ''
        };

        let response = await axios(config);

        setDoctors(response.data.map(el => el));
    };

    useEffect(() => {
        if (!fetched) {
            fetched = true;
            getDoctors(1);
        }
    }, []);

    const deleteDoctor = async (doctor_id) => {
        let response = await axios.delete(`http://localhost:8008/doctor-delete/${doctor_id}`);

        if (response.status == 200) {
            alert('Doctor deleted');
        } else {
            alert('Error');
        }
    };

    const handlePageClick = async (event) => {
        console.log('change page ', event.selected + 1);
        getDoctors(event.selected + 1);
    }

    return (
        <div id='features'>
            <div className='a-container' style={{position: 'relative'}}>
                <Row>
                {doctors.length > 0 && doctors.map((doctorName, index) => {
                    {console.log(index, doctorName)}
                        return <>
                            <Col md={3} key={`${doctorName[0]}-${index}`}><FeatureBox image={featureimage} title={doctorName[0]} doctorId={doctorName[0]}
                                                    doctorDeleteFunction={deleteDoctor}/></Col>
                        </>
                })}
                </Row>
            </div>
                <ReactPaginate
                    breakLabel="..."
                    nextLabel="next >"
                    onPageChange={handlePageClick}
                    pageRangeDisplayed={4}
                    pageCount={10}
                    previousLabel="< previous"
                    renderOnZeroPageCount={null}
                />

        </div>
    )
}

export default Feature;