import { Link } from "react-router-dom";
import { icon } from "../External/external";

const Navbar = ({ props }) => {
  const { type } = props

  return (
    <section className="mainNav">
      <Link to={'/'} id="logo" className="logo1">Pick&Hook</Link>
      {type === 'max' &&
        <>
          <nav>
            <a href="">New Escorts</a>
            <a href="">Premium Ads.</a>
            <a href="">Contact Us </a>
          </nav>
          <Link to={'/register'} id="register_a">Register For free</Link>
        </>
      }
    </section>
  );
}

export default Navbar;