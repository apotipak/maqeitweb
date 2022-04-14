import { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import UserInfo from "../components/UserInfo";
import styled from 'styled-components';


const Navbar = () => {
  const { user, logoutUser } = useContext(AuthContext);
  return (
    <div className="topnav">
      <nav>          
        <Link to="/">MAQEIT</Link>
        {user ? (
          <>            
            <Link onClick={logoutUser} style={{float:'right'}}>Logout</Link>
            {/*<Link to="/protected" style={{float:'right'}}>Protected Page</Link>*/}
            <UserInfo user={user} />
            <Link to="/create" style={{float:'left'}}>Create</Link>
          </>
        ) : (
          <>                
            {/*<Link className="registermenu" to="/register">Register</Link>*/}                
            <Link to="/todo" style={{float:'right'}}>Connect Wallet</Link>
            <Link to="/login" style={{float:'right'}}>Login</Link>            
          </>
        )}
      </nav>
    </div>
  );
};

export default Navbar;