import Users from "../components/Users";
import Login from '../pages/Login';
import { useState, useEffect, useRef } from 'react';

const AdminPage = () => {

    const [loggato, setLoggato] = useState(false);
    const [admin, setAdmin] = useState(false);
    useEffect(() => {

        if (document.cookie.indexOf('username=') == 0) {
            setLoggato(true);
            if (document.cookie.indexOf('admin=') == 25) {
                setAdmin(true);
            } else {
                setAdmin(false);
            }
        } else {
            setLoggato(false);
        }
    }, []);



    return (<div>
        {admin ? (
            <Users />
        ) : (
            <Login />
        )}
    </div>);
};

export default AdminPage;