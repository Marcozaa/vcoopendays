import Footer from "../components/Footer";
import LoginContainer from "../components/LoginContainer";
import { useState, useEffect } from "react";
const Login = ({setDatiUtente}) => {
      useEffect(() => {
    
  }, []);
   
    return ( <div>
        <LoginContainer setDatiUtente={setDatiUtente}/>
        <Footer />
    </div> );
}
 
export default Login;