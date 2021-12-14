import { useContext } from "react"
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../auth/authContext"

export const PrivateRoute = ({ children }) => {

    const { user } = useContext( AuthContext );
    const { pathname, search } = useLocation();

    const lastLocation = pathname + search;

    localStorage.setItem('lastLocation', lastLocation );

    return user.logged
        ? children
        : <Navigate to="/login" />
    
}
