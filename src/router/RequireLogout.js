import { useSelector } from "react-redux";
import { Navigate } from "react-router";

export const RequireLogout = ({ children }) => {

    const { logged } = useSelector( state => state.auth );

    if (logged) {
        return <Navigate to="/" />;
    }

    return children;
};
