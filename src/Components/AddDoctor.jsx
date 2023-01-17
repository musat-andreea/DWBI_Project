import React from 'react';

function AddDoctor() {
    return (
        <div id='adddoctor'>
            <h3>Adauga un doctor</h3>
            <div className = "form-box">
                <form>

                    <div className = "adddoctor">
                        <input placeholder="Nume"/>
                        <input placeholder="Data Angajarii"/><br/>
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                        <br />
                    </div>

                    <button type = "submit" id= "submitBtn" className = "button-text">Submit</button>
                </form>

            </div>
        </div>
    )
}

export default AddDoctor;