import { useRef, useState } from "react";

function Signup() {
  const [state, setState] = useState({
    response_code: "",
    response_message: "",
  });

  const usernameRef = useRef();
  const passwordRef = useRef();

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
      const data = await res.json();
      setState((prevSate) => {
        return {
          ...prevSate,
          response_code: data.response_code,
          response_message: data.response_message,
        };
      });
      console.log(data);
    } catch (e) {
      console.log(e);
    }
  }
  return (
    <div>
      <h1>Give us your details</h1>
      {JSON.stringify(state)}
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
          <button onClick={(e) => handleSubmit(e)}>Signup</button>
        </div>
      </form>
    </div>
  );
}

export default Signup;
