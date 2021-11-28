import { Navigate, useLocation } from "react-router";
import { useSelector } from "react-redux";

export const RequireAuth = ({ children }) => {

    let location = useLocation();

    const { logged } = useSelector( state => state.auth );

    if (!logged) {
        return <Navigate to="/login" state={{ from: location }} />;
    }

    return children;
};
