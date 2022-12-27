import { Link, useNavigate } from "react-router-dom";
import { ACTIONS } from "../context/actions";
import { useAuth } from "../context/context";

const { useRef } = require("react");

function Login() {
  const { dispatch } = useAuth();
  const usernameRef = useRef();
  const passwordRef = useRef();
  const navigate = useNavigate();
  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const res = await fetch(`http://localhost:5000/api/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: usernameRef.current.value,
          password: passwordRef.current.value,
        }),
      });
      const data = await res.json();
      if (parseInt(data.response_code) === 0) {
        dispatch({
          type: ACTIONS.LOGIN,
          isAuthenticated: true,
        });
        navigate("/dashboard");
      }
    } catch (e) {
      console.log(e);
    }
  }
  return (
    <div>
      <h1>Welcome back</h1>
      <form>
        <div>
          <label htmlFor="username">Username</label>
          <input type="text" ref={usernameRef} id="username" />
        </div>
        <div>
          <label htmlFor="password">Password</label>

          <input type="password" ref={passwordRef} id="password" />
        </div>
        <div>
          <button onClick={(e) => handleSubmit(e)}>Login</button>
        </div>
        <p>
          <Link to="/signup">Signup</Link>
        </p>
      </form>
    </div>
  );
}
export default Login;
