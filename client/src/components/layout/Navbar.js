import React, { Fragment, useContext } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import AuthContext from "../../context/auth/authContext";
import ContactContext from "../../context/contact/contactContext";

const Navbar = (props) => {
  const authContext = useContext(AuthContext);
  const contactContext = useContext(ContactContext);

  const { isAuthenticated, logout, user } = authContext;
  
  const onLogout = () => {
    logout();
    contactContext.clearContacts();
    // props.history.push("/login");
  };

  const authLinks = (
    <Fragment>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <a onClick={onLogout}>
          <i className="fas fa-sign-out-alt"></i>{" "}
          <span className="hide-sm">Logout</span>
        </a>
      </li>
    </Fragment>
  );

  const guestLinks = (
    <Fragment>
      <li>
        <Link to="/register">Register</Link>
      </li>
      <li>
        <Link to="/login">Login</Link>
      </li>
    </Fragment>
  );

  return (
    <div className="navbar bg-primary">
      <ul>
        <li style={{ display: "block" }}>
          <h1>
            <i className={props.icon} /> {props.title}
          </h1>
          {user && (
            <h4
              style={{
                marginLeft: "3rem",
                lineHeight: "0",
                marginBottom: "1rem",
              }}
            >
              Hello, {user.name}
            </h4>
          )}
        </li>
      </ul>
      <ul>{isAuthenticated ? authLinks : guestLinks}</ul>
    </div>
  );
};
Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string,
};

Navbar.defaultProps = {
  title: "ContactsKeeper",
  icon: "fas fa-id-card-alt",
};
export default Navbar;
