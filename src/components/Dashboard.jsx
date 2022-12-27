import { ACTIONS } from "../context/actions";
import { useAuth } from "../context/context";

function Dashboard() {
  const { dispatch } = useAuth();
  function handleLogout() {
    dispatch({ type: ACTIONS.LOGOUT });
  }
  return (
    <div>
      <h1>Dasboard</h1>
      <p>You are logged in</p>
      <button onClick={() => handleLogout()}>Logout</button>
    </div>
  );
}

export default Dashboard;
