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
            <Link>Premium Ads.</Link>
            <Link to={'/newEscorts'}>New Escorts</Link>
            <Link to={'/premiumEscorts'}>Premium Escorts</Link>
            <a href="">Contact Us </a>
          </nav>
          <Link to={'/register'} id="register_a">Register For free</Link>
        </>
      }
    </section>
  );
}

export default Navbar;