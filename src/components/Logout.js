import { useNavigate } from "react-router-dom";

function Logout() {
  const navigate = useNavigate();
  function handleLogout() {
    navigate("/login");
  }
  return <input type="button" value="logout" onClick={handleLogout} />;
}

export default Logout;
