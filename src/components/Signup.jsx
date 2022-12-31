import { useRef } from "react";
import { Link } from "react-router-dom";

function Signup() {
  const usernameRef = useRef();
  const passwordRef = useRef();
  function handeleShowPassword() {
    if (passwordRef.current.type === "password") {
      passwordRef.current.type = "text";
    } else {
      passwordRef.current.type = "password";
    }
  }
  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const res = await fetch(`http://localhost:5000/api/signup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: usernameRef.current.value,
          password: passwordRef.current.value,
        }),
      });
    } catch (e) {
      console.log(e);
    }
  }
  return (
    <div>
      <h1>Give us your details</h1>
      <form>
        <div>
          <label htmlFor="username">Username</label>
          <input type="text" ref={usernameRef} id="username" />
        </div>
        <div>
          <label htmlFor="password">Password</label>

          <input type="password" ref={passwordRef} id="password" />
          <br />
          <input
            type="checkbox"
            id="showPassword"
            onChange={() => handeleShowPassword()}
          />
          <label htmlFor="showPassword">show password</label>
        </div>
        <div>
          <button onClick={(e) => handleSubmit(e)}>Signup</button>
        </div>
        <p>
          <Link to="/login">Login</Link>
        </p>
      </form>
    </div>
  );
}
export default Signup;
