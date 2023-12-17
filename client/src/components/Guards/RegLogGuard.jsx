import { useContext } from "react"
import { Navigate, Outlet } from "react-router-dom";
import AuthContext from "../../contexts/authContext"

export default function RegLogGuard(props) {
    const {email} = useContext(AuthContext);

    if (email) {
        return <Navigate to="/logout" />;
    }

    return <Outlet />;
}