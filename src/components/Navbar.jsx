import "../styles/Navbar.css";
import { NavLink } from "react-router-dom";
{
  /* TODO: 
      - [] Make the border appear.
       */
}

function Navbar() {
  return (
    <nav>
      <div className="Logo">
        <img src="https://res.cloudinary.com/dw1igjvgi/image/upload/v1725391047/SanusPRWeb/SANUS_LOGO-removebg-preview_ln8tjt.png" />
        <div className="logoText">
          <p className="Sanus"> SANUS </p>
          <p className="PuertoRico"> PUERTO RICO </p>
        </div>
        <div style={{ margin: "10px"}} />
        <NavLink
          to="/"
          style={({ isActive }) => ({
            color: isActive ? "#7CAE69" : "#756491",
          })}
        >
          Home
        </NavLink>
        <div style={{ margin: "10px" }} />
        <NavLink
          to="/about"
          style={({ isActive }) => ({
            color: isActive ? "#7CAE69" : "#756491",
          })}
        >
          About
        </NavLink>
        <div style={{ margin: "10px" }} />
        <NavLink
          to="/team"
          style={({ isActive }) => ({
            color: isActive ? "#7CAE69" : "#756491",
          })}
        >
          Our Team
        </NavLink>
        <div style={{ margin: "10px" }} />
        <NavLink
          to="/learn"
          style={({ isActive }) => ({
            color: isActive ? "#7CAE69" : "#756491",
          })}
        >
          Learning Community
        </NavLink>
        <div style={{ margin: "10px" }} />
        <span> Eng | Esp </span>
      </div>
    </nav>
  );
}

export default Navbar;
