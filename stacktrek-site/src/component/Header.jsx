import "./Header";
import StackLogo from "../assets/images/stacktrek logo.png";
import "./Header.css";

const Header = () => {
  return (
    <header>
      <img src={StackLogo} className="mr-3 h-8 sm:h-9" alt="StackTrek Logo" />
      <span>STACKLEAGUE</span>
      <span>MY COURSES</span>
    </header>
  );
};

export default Header;
