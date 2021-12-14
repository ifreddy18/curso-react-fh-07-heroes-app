import React from 'react'
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { LoginScreen } from '../components/login/LoginScreen';
import { DashboardRoutes } from './DashboardRoutes';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';


export const AppRouter = () => {
    return (
        <BrowserRouter>

            <Routes>
                {/* <Route path="/login" element={<LoginScreen />} /> */}
                {/* Rutas hijas en DashboardRoutes */}
                {/* <Route path="/*" element={<DashboardRoutes />} />  */}


                {/* Rutas publicas */}
                <Route 
                    path="/login" 
                    element={
                        <PublicRoute>
                            <LoginScreen />
                        </PublicRoute>
                    }
                /> 

                {/* Rutas privadas */}
                <Route 
                    path="/*" 
                    element={
                        <PrivateRoute>
                            <DashboardRoutes />
                        </PrivateRoute>
                    }
                /> 

            </Routes>

        </BrowserRouter>
    )
}
