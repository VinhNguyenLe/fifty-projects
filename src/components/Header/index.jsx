import React, { useEffect, useRef, useState } from 'react';
import { projectRoutes } from '../../router';
import { Link } from 'react-router-dom';
import './Header.scss';

function Header() {
  const [state, setState] = useState(false);
  const handleClick = () => {
    setState(!state);
  };
  const headerRef = useRef();
  const handleClick2 = (e) => {
    if (headerRef.current == e.target) {
      setState(false);
    }
  };

  return (
    <div className="Header">
      <h2 className="HeaderTitle" onClick={(e) => setState(false)}>
        <Link to="/">50 Projects 50 Days</Link>
      </h2>
      <div ref={headerRef} className="HeaderSelector" onClick={(e) => handleClick2(e)}>
        <h3 onClick={handleClick}>Select project</h3>
        {state && (
          <ul>
            {projectRoutes.map((route, index) => (
              <li key={index}>
                <Link to={route.path} onClick={(e) => setState(false)}>
                  {route.day} - {route.name}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default Header;
