import StackLogo from "../assets/images/stacktrek logo2.png";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <img src={StackLogo} className="mr-3 h-8 sm:h-9" />
      <span>Terms | Privacy Policy | EULA</span>
      <span>© StackTrek All Rights Reserved.</span>
    </footer>
  );
};

export default Footer;
