// import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import Header from './Components/Header';
import Feature from "./Components/Feature";
import About from "./Components/About";
import aboutimage from "./images/about.jpg"
import aboutimage1 from "./images/about2.jpg";
import Presentation from "./Components/Presentation";
import Contact from "./Components/Contact";
import AddDoctor from "./Components/AddDoctor";
import AddPacient from "./Components/AddPacient";
import axios from "axios";
import { apiConfig } from "./apiConfig";
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/css/bootstrap.css';
import "bootstrap/dist/js/bootstrap.bundle.min";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import PatientList from "./Components/PatientList";
import PieChart from "./Components/PieChart";
import LineChart from "./Components/LineChart";
import Pyramid from "./Components/Pyramid";
import StackedArea from "./Components/StackedArea";
import Analize from "./Components/Analize";

function App() {
    const title = 'Welcome to your health journal!';
    const [errorMessages, setErrorMessages] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);

    const errors = {
        uname: "invalid username",
        pass: "invalid password"
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const { uname, pass } = document.forms[0];

        const data = JSON.stringify({
            "email": uname.value,
            "password": pass.value,
        });

        const config = {
            method: 'post',
            // url: 'http://192.168.50.125:3001/api/users/login',
            url: `${apiConfig.loginBaseUrl}/api/users/login`,
            headers: {
                'Content-Type': 'application/json',
            },
            data: data
        };

        axios(config)
            .then(function (response) {
                console.log(JSON.stringify(response.data));
                if (response.status == 200) {
                    setIsSubmitted(true);
                } else {
                    setErrorMessages({ name: "uname", message: response.message });
                }
            })
            .catch(function (error) {
                console.log(error);
                setErrorMessages({ name: "uname", message: error });
            });
    };

    const renderErrorMessage = (name) =>
        name === errorMessages.name && (
            <div className="error">{errorMessages.message}</div>
        );
    const renderForm = (
        <div className="form">
            <form onSubmit={handleSubmit}>
                <div className="input-container">
                    <label>Username </label>
                    <input id='user_email' type="text" name="uname" required />
                    {renderErrorMessage("uname")}
                </div>
                <div className="input-container">
                    <label>Password </label>
                    <input id='user_password' type="password" name="pass" required />
                    {renderErrorMessage("pass")}
                </div>
                <div className="button-container">
                    <input type="submit" />
                </div>
            </form>
        </div>
    );

    useEffect(() => {
        if (isSubmitted) {
            window.location.href = '#adddoctor';
        }
    }, [isSubmitted])


    return (
        <div className='App'>
            {/*<div className="app">*/}
            {/*    <div className="login-form"  style={{position: 'relative'}}>*/}
            {/*        <div className="title">Log In</div>*/}
            {/*        {isSubmitted ? <div>User is successfully logged in</div> : renderForm}*/}
            {/*    </div>*/}
            {/*</div>*/}
            <Header />

            <Row>
                <Col md={{offset: 3, span: 6}}>
                    <AddDoctor />
                </Col>

            </Row>
<br/>
            <Row>
                <Col md={{offset: 3, span: 6}}>
                    <AddPacient />
                </Col>
            </Row>
            <Feature />
            <PatientList />
            <Presentation />
            <PieChart/>
            <LineChart/>
            <Pyramid/>
            <StackedArea/>
            <Analize/>

            <About image={aboutimage} title='Pacientii nostri' button='Make an appointment' />
            <About image={aboutimage1} title='Echipa de doctori' button='Schedule a call' />
            <Contact />
        </div>


    );
}

export default App;
