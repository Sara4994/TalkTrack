import { Link } from 'gatsby';
import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const Navbar = () => {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

  return (
    <header>
      <nav id="navbar">
        <p id="brand">
          <Link to="/">Talk Track</Link>
        </p>
        <div className="nav-items">
          {isAuthenticated && (
            <>
              <Link to="/addTalk" className="nav-item">
                Add Talk
              </Link>
              <button
                className="linkBtn nav-item"
                onClick={() => logout({ returnTo: window.location.origin })}
              >
                Logout
              </button>
            </>
          )}
          {!isAuthenticated && (
            <button
              className="linkBtn nav-item"
              onClick={() =>
                loginWithRedirect({ appState: `${window.location.pathname}` })
              }
            >
              Login
            </button>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
