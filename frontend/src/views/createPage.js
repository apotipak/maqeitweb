import { useEffect, useState } from "react";
import useAxios from "../utils/useAxios";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import styled from 'styled-components';


const Wrapper = styled.section`
  padding: 1em 0em 6em 2em;
`;

function CreatePage() {
  const [res, setRes] = useState("");
  const api = useAxios();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get("/test/");
        setRes(response.data.response);
      } catch {
        setRes("Something went wrong");
      }
    };
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section>
      
      <Navbar />
      
      <Wrapper>
        <div className="grid-item">
          <p>Create</p>
        </div>

      </Wrapper>

      <Footer />

    </section>    
  );
}

export default CreatePage;