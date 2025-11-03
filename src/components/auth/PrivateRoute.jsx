import React, { useContext } from 'react';
import { ContextUser } from '../../context/UserContext';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({children,requiredRole }) => {
    //obtener el usuario logueado desde el contexto
    const {currentUser} = useContext(ContextUser);


    //verificar si el usuario logueado tiene el rol necesario para acceder a la ruta
    if (currentUser && currentUser.perfil === requiredRole) {
        return <Navigate to={"/admin"}></Navigate>;
    }else if (currentUser && currentUser.perfil !== requiredRole) {
        return <Navigate to={"/registro"}></Navigate>;
    }




    return children
};

export default PrivateRoute;