import "./Header";
import StackLogo from "../assets/images/stacktrek logo.png";
import "./Header.css";
import { IoHomeOutline } from "react-icons/io5";

const Header = () => {
  return (
    <header>
      <img src={StackLogo} className="mr-3 h-8 sm:h-9" alt="StackTrek Logo" />
      <span className="mr-5"><IoHomeOutline /></span>
      <span>STACKLEAGUE</span>
      <span>MY COURSES</span>
    </header>
  );
};

export default Header;
