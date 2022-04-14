import { useContext } from "react";
import UserInfo from "../components/UserInfo";
import AuthContext from "../context/AuthContext";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import '../Style1.css';
import styled from 'styled-components';


const Wrapper = styled.section`
  padding: 1em 0em 15em 2em;
`;

const Home = () => {
  
  const { user } = useContext(AuthContext);

  return (
    <section>
              
      <Navbar />

      <Wrapper>
        <div>
          <h2>Discover extraordinary NFTs</h2>
        </div>
      </Wrapper>

      <Footer />

    </section>
  );
};

export default Home;