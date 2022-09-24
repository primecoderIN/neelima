
import {NavLink} from "react-router-dom"
const Navbar = () => {
  return (
    <div style={{ display: "flex",gap: "1rem", marginBottom: "5rem" }}>
      <NavLink to="/home">Home</NavLink>
      <NavLink to="/products">Products</NavLink>
      <NavLink to="/services">Services</NavLink>
    </div>
  );
}

export default Navbar