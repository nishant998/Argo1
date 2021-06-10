import {React , useState} from 'react'
import './login_register.css'

function Login_register() {
          const [Email, setEmail] = useState("") ;
          const [Password, setPassword] = useState("") ;

    function handleChange_email(event) {
        setEmail(event.target.value);
      }
    function handleChange_pass(event) {
        setPassword(event.target.value) ;
      }

    function handleSubmit(event) {
        event.preventDefault();
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
