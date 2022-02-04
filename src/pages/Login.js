import Footer from "../components/Footer";
import LoginContainer from "../components/LoginContainer";

const Login = ({setDatiUtente}) => {
    return ( <div>
        <LoginContainer setDatiUtente={setDatiUtente}/>
        <Footer />
    </div> );
}
 
export default Login;