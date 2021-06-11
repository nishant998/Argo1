import {React , useState} from 'react'
import './login_register.css'
import axios from 'axios'
import { useHistory } from "react-router-dom";

function Login_register() {
          const [Email, setEmail] = useState("") ;
          const [Password, setPassword] = useState("") ;
          const [userdata , setUserData] = useState(null) ;

          let history = useHistory();

    function handleChange_email(event) {
        setEmail(event.target.value);
        sendGetRequest();
      }
    function handleChange_pass(event) {
        setPassword(event.target.value) ;
      }
      const sendGetRequest = async () => {
        try {
             await axios.get('http://localhost:5000/login/cred').then(response => {
              setUserData(response.data) ;
            });
        } catch (err) {
            // Handle Error Here
            console.error(err);
        }
    };

    function handleSubmit(event) {
        event.preventDefault();
        // alert("username is :- "+Email+" and password is :- "+Password) ;
        console.log(userdata) ;
        userdata.map(info=>{
          if(info.Email === Email && info.password === Password){
            history.push("/");
          }
        })
        alert("credentials are wrong fill again")
      }

    return (
        <div className="login_register_container">
            <form onSubmit={handleSubmit} className="form__container">
  <label className="email_label">
    Email :
    <input type="email" name="email" onChange={handleChange_email} value={Email}/>
  </label>
  <label className="password_label">
    Password :
    <input type="password" name="password" onChange={handleChange_pass} value={Password}/>
  </label>
  <input type="submit" value="Login" className="submit_form_button"/>
</form>
        </div>
    )
}

export default Login_register
