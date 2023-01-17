import React from 'react';

function AddPacient() {
    return (
        <div id='addpacient'>
            <h3>Adauga un pacient</h3>
            <div className = "form-box">
                <form>

                    <div className = "addpacient">
                        <input placeholder="Nume"/>
                        <input placeholder="Prenume"/>
                        <input placeholder="Data Nasterii"/>
                        <input placeholder="E-mail"/>
                        <input placeholder="Phone 000-000-0000"/>
                        <br />
                        <br />
                        <br />
                        <br />
                        {/*<textarea placeholder="Shipping Address"/><br />*/}
                        {/*<textarea placeholder="Physical location of the project"/><br />*/}
                    </div>

                    <button type = "submit" id= "submitBtn" className = "button-text">Submit</button>
                </form>

            </div>


        </div>
    )
}

export default AddPacient;