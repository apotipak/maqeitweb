import { useContext } from "react";
import AuthContext from "../context/AuthContext";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import styled from 'styled-components';


const Wrapper = styled.section`
  padding: 1em 0em 6em 2em;
`;

const LoginPage = () => {
  const { loginUser } = useContext(AuthContext);
  const handleSubmit = e => {
    e.preventDefault();
    const username = e.target.username.value;
    const password = e.target.password.value;
    username.length > 0 && loginUser(username, password);
  };

  return (
    <section>
      
      <Navbar />
      
        <Wrapper>
          <div className="grid-item">
            <form onSubmit={handleSubmit}>
              <h1>Login </h1>        
              <label htmlFor="username">Username</label>
              <input type="text" id="username" placeholder="Enter Username" />
              <label htmlFor="password">Password</label>
              <input type="password" id="password" placeholder="Enter Password" />
              <button type="submit">Login</button>        
            </form>
          </div>
        </Wrapper>

      <Footer />

    </section>    
  );
};




export default LoginPage;