import Users from "../components/Users";
import Login from '../pages/Login';
import { useState, useEffect, useRef } from 'react';

const AdminPage = () => {
    function getCookie(cname) {
        let name = cname + '=';
        let ca = document.cookie.split(';');
        for (let i = 0; i < ca.length; i++) {
          let c = ca[i];
          while (c.charAt(0) == ' ') {
            c = c.substring(1);
          }
          if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
          }
        }
        return '';
      }
    

    const [loggato, setLoggato] = useState(false);
    const [admin, setAdmin] = useState(false);
    useEffect(() => {

        if (getCookie('username') != '') {
            setLoggato(true);
            if (getCookie('permessi') == '3') {
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