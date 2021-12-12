import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


export const Navbar = () => {

    const navigate = useNavigate();
    
    const handleLogout = () => {
        navigate('/login', {
            // Remplaza la url actual para no omitir que se estuvo en /login
            // y no poder 'ir atras / back' en el navegador  
            replace: true, 

        });
    };

    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            
            <Link 
                className="navbar-brand" 
                to="/"
            >
                Asociaciones
            </Link>

            <div className="navbar-collapse">
                <div className="navbar-nav">

                    <NavLink 
                        className={ ({ isActive }) => 'nav-item nav-link ' + ( isActive && 'active')} 
                        to="/marvel"
                    >
                        Marvel
                    </NavLink>

                    <NavLink 
                        className={ ({ isActive }) => 'nav-item nav-link ' + ( isActive && 'active')} 
                        to="/dc"
                    >
                        DC
                    </NavLink>
                
                    <NavLink 
                        className={ ({ isActive }) => 'nav-item nav-link ' + ( isActive && 'active')} 
                        to="/search"
                    >
                        Search
                    </NavLink>
                
                </div>
            </div>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 justify-content-end">
                <ul className="navbar-nav ml-auto">

                    <span
                        className="nav-item nav-link text-info"
                    >
                        Freddy
                    </span>

                    <button 
                        className="nav-item nav-link btn"
                        onClick= { handleLogout }
                    >
                        Logout
                    </button>
                </ul>
            </div>
        </nav>
    )
}