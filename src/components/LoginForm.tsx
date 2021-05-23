import React, { useState, FormEvent} from 'react';
import {useHistory} from "react-router";




function LoginForm() {
  const history = useHistory();
const [username, setUsername]= useState("")
const [password, setPassword]= useState("")
const [rememberMe, setRememberMe]= useState(false)
  
function onClose(){
  history.push("/");
}
  function handleSubmit( e: FormEvent ) {
    e.preventDefault();

    setUsername( "" );
    setPassword( "");
    setRememberMe( false);
    history.push("/");
  }
  return (
    <div className="LoginContainer">
      <div>
      <label className="closeButton"onClick={onClose}><i className="material-icons">close</i></label>

        <div>Something</div>
        <div>Something Else</div>
      </div>
      <div>
        <form className="LoginForm" onSubmit={handleSubmit}>
          <div>
            <label>
              Username
              <input type="text" value={username} onChange={(e) => setUsername(e.target.value)}/>
            </label>
          </div>

          <div>
            <label>
              Password
              <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
            </label>
          </div>

          <div>
            <label>
              How did you hear about use?
              <select>
              <option value="undefined"></option>
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
                <input  type="checkbox" checked={rememberMe} onChange={(e) => setRememberMe(e.target.checked)}/>
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
