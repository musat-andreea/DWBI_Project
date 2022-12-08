// import logo from './logo.svg';
import './App.css';
import React from 'react';
// import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import Header from './Components/Header';
import Feature from "./Components/Feature";

function App() {
    const title = 'Welcome to your health journal!';
  return (
      <div className='App'>
          <Header/>
          <Feature/>
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
