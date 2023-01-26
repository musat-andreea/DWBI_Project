import React from 'react';
import {
    DashboardLayoutComponent,
    PanelsDirective,
    PanelDirective,
} from "@syncfusion/ej2-react-layouts";

import "/node_modules/@syncfusion/ej2/material.css";

function About(props) {
    const onCreate = () => {
        // logic goes here
    };

    const onPanelResize = () => {
        // logic goes here
    };

    return (
        <div id='about'>
            <div className='about-image'>
                <img src={props.image} alt=''/>
            </div>
            <div className='about-text'>
                <h2> {props.title} </h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <button> {props.button} </button>
            </div>
        {/*    <DashboardLayoutComponent*/}
        {/*        created={onCreate}*/}
        {/*        columns={6}*/}
        {/*        // id=”predefine_dashboard”*/}
        {/*    cellSpacing={[5, 5]}*/}
        {/*    resizeStop={onPanelResize}*/}
        {/*    allowResizing={true}*/}
        {/*    allowDragging={true}*/}
        {/*></DashboardLayoutComponent>*/}
        </div>
    )
}

export default About;