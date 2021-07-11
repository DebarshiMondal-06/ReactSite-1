import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer style={{
      position: 'absolute', bottom: 0, textAlign: 'center', width: '100%'
    }} class="footer text-center p-2 text-lg-left">
        <div class="text-center">
          © 2020 Copyright: &nbsp;
          <NavLink class="text-dark" to="/">Mondal.com</NavLink>
        </div>
      </footer>

  )
}

export default Footer;