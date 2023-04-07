
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Upload from '../../components/Itemes/Upload';
const EmployeIndex = () => {
    const [fullname, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [CIN, setCIN] = useState("");
    const [interet, setInteret] = useState("");
    const [type, setType] = useState("");
    const navigate = useNavigate();
    
    
    
    
    
    
    useEffect(() => {
        const accesToken = localStorage.getItem("accessToken_emp");
        if (accesToken === undefined || accesToken === null || accesToken === 0) {
            navigate('/employe/login')
        }
        const affiche = async () => {
            const res = await axios({
                method: "get",
                url: "http://localhost:8000/api/employe/",
                headers: {
                    "Accept": "application/json",
                    "Authorization": 'Bearer ' + accesToken
                }
            })
            setFullName(res.data.datas.fullname)
            setEmail(res.data.datas.email)
            setCIN(res.data.datas.CIN)
            setInteret(res.data.datas.interet)
            setType(res.data.datas.type)
        }
        affiche();
    }, []);

    //last time i was here
    return (
        <div className='profile-container'>
            <div className="profile-controle">
                <div className="profile-header">
                    <div className="profile-img-controle">
                    <div className='img-container'>
                        <Upload person={'employe'}/>
                    </div>
                        <p className='profile-info-img'>Personnalisez votre compte avec une photo.
                            <p className='profile-info-text'>Clicker sur le photo profile pour ajouter la photo</p>
                        </p>
                        
                    </div>
                </div>
                <div className='profile-column'>
                    <div className='profile-data'>
                        <p className='profile-info'>Votre nom complete</p>
                        <p >{fullname}</p>
                    </div>
                </div>
            </div>

            <div className='profile-controle'>
                <div className='profile-header'>
                    <div className="profile-data">
                        <p>Profile info</p>
                    </div>
                </div>

                <div className='profile-column'>
                    <div className='profile-data'>
                        <p className='profile-info'>Votre CIN</p>
                        <p >{CIN}</p>
                    </div>
                </div>

                <div className='profile-column'>
                    <div className='profile-data'>
                        <p className='profile-info'>Votre interet</p>
                        <p >{interet}</p>
                    </div>
                </div>

                <div className='profile-column'>
                    <div className='profile-data'>
                        <p className='profile-info'>Votre classe</p>
                        <p >{type}</p>
                    </div>
                </div>
            </div>
            <div className='profile-controle'>
                <div className='profile-header'>
                    <div className="profile-data">
                        <p>Account info</p>
                    </div>
                </div>

                <div className='profile-column'>
                    <div className='profile-data'>
                        <p className='profile-info'>Votre email</p>
                        <p >{email}</p>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default EmployeIndex