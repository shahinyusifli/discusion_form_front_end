import { Link } from "react-router-dom";
import authFindUser from "../services/auth-find-user";

const Navbar = () => {
  const user = authFindUser()
  return (
    <nav className="navbar">
      <h1>Discussion forum</h1>
      <div className="links">
        {user && <Link to="/dashboard">Dashboard</Link>}
        {user && <Link to="/dashbaord/post">Create topic</Link>}
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
        {user &&  <Link to="/logout">Logout</Link>}
        {user && <Link to="/topic">Topics</Link>}
        
      </div>
    </nav>
  );
}
 
export default Navbar;