// import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';
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

function App() {
    const title = 'Welcome to your health journal!';
    const [errorMessages, setErrorMessages] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);
    const database = [
        {
            username: "user1",
            password: "pass1"
        },
        {
            username: "user2",
            password: "pass2"
        }
    ];
    const errors = {
        uname: "invalid username",
        pass: "invalid password"
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        var { uname, pass } = document.forms[0];
        const userData = database.find((user) => user.username === uname.value);
        if (userData) {
            if (userData.password !== pass.value) {
                setErrorMessages({ name: "pass", message: errors.pass });
            } else {
                setIsSubmitted(true);
            }
        } else {
            setErrorMessages({ name: "uname", message: errors.uname });
        }
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
                    <input type="text" name="uname" required />
                    {renderErrorMessage("uname")}
                </div>
                <div className="input-container">
                    <label>Password </label>
                    <input type="password" name="pass" required />
                    {renderErrorMessage("pass")}
                </div>
                <div className="button-container">
                    <input type="submit" />
                </div>
            </form>
        </div>
    );


    return (
      <div className='App'>
          <div className="app">
              <div className="login-form">
                  <div className="title">Sign In</div>
                  {isSubmitted ? <div>User is successfully logged in</div> : renderForm}
              </div>
          </div>
          <Header/>

          <AddDoctor/>
          <AddPacient/>
          <Feature/>
          <Presentation/>
          <About image={aboutimage} title='Pacientii nostri' button='Make an appointment' />
          <About image={aboutimage1} title='Echipa de doctori' button='Schedule a call' />
          <Contact/>
      </div>


  );
}

export default App;
