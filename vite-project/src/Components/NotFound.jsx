import { NavLink } from 'react-router';

function NotFound() {
   return (
      <div className="not-found">
         <h2>404</h2>
         <p>Oups! La page que vous demandez n'existe pas.</p>
         <NavLink to="/">Retourner sur la page d’accueil</NavLink>
      </div>
   );
}

export default NotFound;
