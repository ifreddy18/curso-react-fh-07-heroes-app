import React from 'react'
import { useNavigate } from 'react-router-dom';


export const LoginScreen = () => {

    const navigate = useNavigate();
    
    const handleLogin = () => {
        navigate('/marvel', {
            // Remplaza la url actual para no omitir que se estuvo en /login
            // y no poder 'ir atras / back' en el navegador  
            replace: true, 

        });
    };

    return (
        <div className="container mt-5">
            <h1>Login Screen</h1>
            <hr />

            <button 
                className="btn btn-primary"
                onClick={ handleLogin }
            >
                Login
            </button>
        </div>
    )
}
