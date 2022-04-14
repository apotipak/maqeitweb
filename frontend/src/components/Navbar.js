import { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import UserInfo from "../components/UserInfo";
import styled from 'styled-components';



const myButton = styled.section`  
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;  
  float: right;
`;

const Button = styled.button`
  background-color: #325dff;
  color: #fff;
  font-size: 14px;
  padding: 12px 15px;
  margin: 5px 5px;
  border-radius: 15px;
  border-style: none;
  cursor: pointer;
  float: right;
`;

function sayHello() {
  alert('TODO');
}


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
            {/*<Link to="/todo" style={{float:'right'}}>Connect Wallet</Link>*/}
            
            <Button onClick={sayHello}>Connect Wallet</Button>

            {/*<Link to="/login" style={{float:'right'}}>Login</Link>*/}
          </>
        )}
      </nav>
    </div>
  );
};

export default Navbar;