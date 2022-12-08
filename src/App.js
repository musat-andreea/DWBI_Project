// import logo from './logo.svg';
import './App.css';
import React from 'react';
// import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import Header from './Components/Header';
import Feature from "./Components/Feature";
import About from "./Components/About";
import aboutimage from "./images/about.jpg"
import aboutimage1 from "./images/about2.jpg";
import Presentation from "./Components/Presentation";
import Contact from "./Components/Contact";

function App() {
    const title = 'Welcome to your health journal!';
  return (
      <div className='App'>
          <Header/>
          <Feature/>
          <Presentation/>
          <About image={aboutimage} title='Comes With All You Need For Better Life' button='Make an appointment' />
          <About image={aboutimage1} title='Meet a new doctor' button='Schedule a call' />
          <Contact/>
      </div>
      // <div style={{
      //     backgroundImage: `url("https://thumbs.dreamstime.com/b/healthcare-technology-doctor-using-digital-tablet-icon-medical-network-hospital-background-162019727.jpg")`
      // }}>
      //     <div className="App">
      //       <div className="content">
      //           <Header/>
      //           <h1>{title}</h1>
      //
      //       </div>
      //     </div>
      // </div>


  );
}

export default App;
