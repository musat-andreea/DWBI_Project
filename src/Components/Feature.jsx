import React, {useEffect, useState} from 'react';
import FeatureBox from "./FeatureBox";
import featureimage from '../images/feature1.jpg';
import featureimage1 from '../images/feature2.jpg'
import featureimage2 from '../images/feature3.jpg'
import axios from "axios";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ReactPaginate from "react-paginate";
import {ThreeDots} from "react-loader-spinner";
import {apiConfig} from "../apiConfig";
import Button from "react-bootstrap/Button";

let fetched = false;

function Feature() {


    const [doctors, setDoctors] = useState([]);
    const [city, setCity] = useState('');
    const [loading, setLoading] = useState(true);
    const pageSize = 4;

    const getDoctors = async (pageNr, chosenCity = '') => {

        const config = {
            method: 'get',
            url: `http://localhost:8008/doctors?pageSize=${pageSize}&pageNr=${pageNr}&city=${city ?? chosenCity}`,
            headers: {},
            data: ''
        };

        setLoading(true);
        let response = await axios(config);
        setLoading(false);
        setDoctors(response.data.map(el => el));
    };

    useEffect(() => {
        if (!fetched) {
            fetched = true;
            getDoctors(1);
        }
    }, []);

    const deleteDoctor = async (doctor_id) => {
        let response = await axios.delete(`${apiConfig.baseUrl}/doctor-delete/${doctor_id}`);

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

    const handleDoctorsFilter = async (chosenCity) => {
        setCity(chosenCity);
        getDoctors(1, chosenCity);
    }

    return (
        <div id='features' style={{position: 'relative'}}>

            <Button variant="primary" onClick={() => handleDoctorsFilter('Bucuresti')}>
                Doctori Bucuresti
            </Button>
            <br/>
            <Button variant="primary" onClick={() => handleDoctorsFilter('Provincie')}>
                Doctori provincie
            </Button>
            <div className='a-container'>
                <Row>
                    {loading && <ThreeDots
                        height="80"
                        width="80"
                        radius="9"
                        color="#4fa94d"
                        ariaLabel="three-dots-loading"
                        wrapperStyle={{}}
                        wrapperClassName=""
                        visible={true}
                    />}
                    {!loading && doctors.length > 0 && doctors.map((doctorName, index) => {

                        return <>
                            <Col md={3} key={`${doctorName[0]}-${index}`}>
                                <FeatureBox image={featureimage}
                                            title={doctorName[1]}
                                            doctorId={doctorName[0]}
                                            city={city}
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

export default Feature;