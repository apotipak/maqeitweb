import { useContext } from "react";
import UserInfo from "../components/UserInfo";
import AuthContext from "../context/AuthContext";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import '../Style1.css';


const Home = () => {
  const { user } = useContext(AuthContext);
  return (
    <section>
      
      {/*user && <UserInfo user={user} />*/}
      
      <Navbar />

      <div className="content">
        <h2>Welcome</h2>
        <p>You are on home page!</p>        
      </div>

      <Footer />

    </section>
  );
};

export default Home;