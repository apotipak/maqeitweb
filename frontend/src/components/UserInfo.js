import { Link } from "react-router-dom";


function UserInfo({ user }) {

  const mystyle = {
    color: "orange",
    fontFamily: "Arial",
    float:"right",
    cursor: "auto"
  };

  return (
    <Link style={mystyle}>Hi, {user.username}</Link>
  );
}

export default UserInfo;