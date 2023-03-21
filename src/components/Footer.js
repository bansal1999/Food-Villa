// Footer component for footer section
import { useContext } from "react";
import UserContext from "../utils/UserContext";

const Footer = () => {
  const { user } = useContext(UserContext);

  return (
    <div className="p-10 m-10">
      Created By {user.name} - {user.email}
      <i className="fa-solid fa-heart"></i>
      <a
        className="p-5"
        href="https://www.linkedin.com/in/shikharbansal007/"
        target="_blank"
      >
        Contact here
      </a>
      <i className="fa-solid fa-copyright"></i>
      <strong>Food Villa</strong>
    </div>
  );
};

export default Footer;
