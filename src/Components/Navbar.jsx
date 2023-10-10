import { icon } from "../External/external";

const Navbar = () => {
  return ( 
    <nav className="main_nav">
      <strong href="" id="logo">Pick&Hook</strong>
      <div>
        <a href="">New Escorts</a>
        <a href="">Premium Ads.</a>
        <a href="">Contact Us </a>
      </div>
      <a href="" id="register_a">Register For free</a>
      <div id="menu_tag">
        {icon('menu')}
      </div>
    </nav>
   );
}
 
export default Navbar;