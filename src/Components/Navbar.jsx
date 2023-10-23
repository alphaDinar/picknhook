import { Link } from "react-router-dom";
import { icon } from "../External/external";
import { useState } from "react";

const Navbar = ({ props }) => {
  const { type } = props

  const [navToggled, setNavToggled] = useState(false);
  const toggleNav =()=>{
    navToggled ? setNavToggled(false) : setNavToggled(true);
  }

  return (
    <section className="mainNav">
      <Link to={'/'} id="logo" className="logo1">Pick&Hook</Link>
      {type === 'max' &&
        <>
          <nav className={navToggled ? 'change' : ''}>
            <Link to={'/premiumAccount'}>Premium Account</Link>
            <Link to={'/newEscorts'}>New Escorts</Link>
            <Link to={'/premiumEscorts'}>Premium Escorts</Link>
            <a href="">Contact Us </a>
            <button onClick={toggleNav}>{icon('menu')}</button>
          </nav>
          <Link to={'/register'} id="register_a">Register For free</Link>
        </>
      }
    </section>
  );
}

export default Navbar;