import { Link } from "react-router-dom";
import LogoutButton from "./LogoutButton";

const Navbar = () => (
  <>
    <nav className="flex justify-between p-4 bg-violet-300">
      
      <Link to="/logout" 
      className="mr-4 font-semibold text-blue-800"
      ><button className="hover:cursor-pointer px-2 py-2 rounded-xl"><LogoutButton /></button></Link>
      
      <Link to="/login" 
      className="mr-4 font-semibold text-blue-800"
      ><button className="hover:cursor-pointer px-2 py-2 bg-amber-200 rounded-xl">Login</button></Link>
      
      <Link to="/register" 
      className="mr-4 font-semibold text-blue-800"
      ><button className="hover:cursor-pointer px-2 py-2 bg-amber-200 rounded-xl">Register</button></Link>
      
      <Link to="/users" 
      className="mr-4 font-semibold text-blue-800"
      ><button className="hover:cursor-pointer px-2 py-2 bg-amber-200 rounded-xl">User List</button></Link>
      
    </nav>


  </>
);

export default Navbar;