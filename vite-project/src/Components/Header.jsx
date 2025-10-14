import { NavLink, Outlet } from 'react-router';

function Header() {
   return (
      <nav>
         <div className="nav-bar">
            <NavLink to="/">
               <img
                  className="logo"
                  src="../../src/assets/Logo/LOGO.png"
                  alt="logo"
               />
            </NavLink>

            <ul className="nav-link">
               <li>
                  <NavLink
                     to="/"
                     className={({ isActive }) =>
                        isActive ? 'active-link' : ''
                     }
                  >
                     Accueil
                  </NavLink>
               </li>
               <li>
                  <NavLink
                     to="/A_propos"
                     className={({ isActive }) =>
                        isActive ? 'active-link' : ''
                     }
                  >
                     A Propos
                  </NavLink>
               </li>
            </ul>
         </div>
      </nav>
   );
}

export default Header;
