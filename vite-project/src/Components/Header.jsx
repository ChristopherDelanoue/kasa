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
               <li>Accueil</li>
               <li>A Propos</li>
            </ul>
         </div>
      </nav>
   );
}

export default Header;
