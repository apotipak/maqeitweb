import { useContext } from "react";
import AuthContext from "../context/AuthContext";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import styled from 'styled-components';


const Wrapper = styled.section`
  padding: 1em 0em 6em 2em;
`;


const TodoPage = () => {

  return (
    <section>
      
      <Navbar />
      
      <Wrapper>
        <div className="grid-item">
          <p>TODO</p>
        </div>

      </Wrapper>

      <Footer />

    </section>    
  );
};

export default TodoPage;