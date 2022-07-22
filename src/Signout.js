import React, { useState } from 'react';
import './Signout.css';
import { Link, useNavigate } from "react-router-dom";
import StorefrontIcon from '@mui/icons-material/Storefront';
import { auth } from "./firebase";

function Signout() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const Signout = e => {
        e.preventDefault();

        auth
            .signInWithEmailAndPassword(email, password)
            .then(auth => {
                navigate('/');
            })
            .catch(error => alert(error.message))

    }


    return (
        <div className='signout'>
            <Link to='/' style={{ textDecoration: "none" }}>
                <div className="signout__item">
                    <StorefrontIcon className="signout__logoImage" fontSize="large" />
                    <h2 className="signout__logoTitle">ArifMart</h2>
                </div>
            </Link>

        </div>
    )
}

export default Signout;