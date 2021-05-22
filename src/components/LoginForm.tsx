import React, { useState, FormEvent} from 'react';
import {useHistory} from "react-router";




function LoginForm() {
  const history = useHistory();
const [username, setUsername]= useState("")
const [password, setPassword]= useState("")
const [rememberMe, setRememberMe]= useState("")
  

  function handleSubmit( e: FormEvent ) {
    e.preventDefault();

    setUsername( "" );
    setPassword( "");
    setRememberMe( "" );
    history.push("/");
  }
  return (
    <div className="LoginForm">
      <div>
        <div>Something</div>
        <div>Something Else</div>
      </div>
      <div>
        <form onSubmit={handleSubmit}>
          <div>
            <label>
              Username
              <input type="text" />
            </label>
          </div>

          <div>
            <label>
              Password
              <input type="text" />
            </label>
          </div>

          <div>
            <label>
              How Did you hear about use?
              <select>
              <option></option>
                <option value="youTube">Youtube</option>
                <option value="grandRapidsFreePress">Grand Rapids Free Press</option>
                <option value="facebook">Facebook</option>
                <option value="friend">A friend</option>
              </select>
            </label>
          </div>
          <div>
            <div>
              <label>Remeber Me
                <input  type="checkbox"/>
              </label>
            </div>
            <div>
             <a href="">Forgot Password</a> 
            </div>
          </div>
          <div>
            <button type="submit">Welcome</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginForm;
