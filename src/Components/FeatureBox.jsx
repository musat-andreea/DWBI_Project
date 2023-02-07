import React, {useState} from 'react';
import axios from "axios";

function FeatureBox(props) {
    const [editMode, setEditMode] = useState(false);
    const [doctorName, setDoctorName] = useState(props.title);

    const handleDoctorNameEdit = async (e) => {
        let newName = e.target.value;
        setDoctorName(newName);
    };

    const handleSave = async (e) => {
        let data = {
          nume: doctorName
        };

        let config = {
            method: 'patch',
            url: `http://localhost:8008/doctor-update/${props.doctorId}`,
            headers: {
                'Content-Type': 'application/json'
            },
            data : data
        };

        axios(config)
            .then(function (response) {
                if (response.status == 200) {
                    alert (`Doctor ${props.title} edited`);
                    window.location.reload(true);
                }
            })
            .catch(function (error) {
                console.log(error);
                alert ('Please Fill the Doctor information');
            });
    };

    return (
        <div className='a-box'>
            <div className='a-b-img'>
                <img src={props.image}/>
            </div>
            <div className='s-b-text'>
                <h2> {editMode == false ? doctorName :
                    <input type={'text'} className={''} onChange={(e) => handleDoctorNameEdit(e)}
                           defaultValue={doctorName}/>}
                </h2>

                <br/>
                <br/>
                <button id="submitBtn" className="button-text"
                        onClick={() => props.doctorDeleteFunction(props.doctorId)}>Sterge doctor
                </button>
                <br/>
                <button id="submitBtn" className="button-text"
                        onClick={(e) => {
                            if (!editMode)  {
                                setEditMode(true);
                            } else {
                                setEditMode(false);
                                handleSave();
                            }
                        }}>
                    {editMode ? 'Salveaza' : 'Editeaza doctor'}
                </button>
            </div>

        </div>
    )
}

export default FeatureBox;