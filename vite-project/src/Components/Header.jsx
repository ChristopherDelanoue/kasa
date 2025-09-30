import { NavLink, Outlet } from 'react-router';

function Header() {
   return (
      <nav>
         <div className="nav-bar">
            <img
               className="logo"
               src="../../src/assets/Logo/LOGO.png"
               alt="logo"
            />

            <ul className="nav-link">
               <li>
                  <NavLink to="/">Accueil</NavLink>
               </li>
               <li>
                  <NavLink to="/A_propos">A Propos</NavLink>
               </li>
            </ul>
         </div>
      </nav>
   );
}

export default Header;
