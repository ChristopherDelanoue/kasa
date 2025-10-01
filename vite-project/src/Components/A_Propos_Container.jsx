import { useState } from 'react';
import DropDown from './DropDown.jsx';

function A_Propos_Container() {
   const a_propos_value = [
      {
         title: 'Fiabilité',
         desc: 'Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipe',
      },
      {
         title: 'Respect',
         desc: 'La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme',
      },
      {
         title: 'Service',
         desc: 'La qualité du service est au coeur de notre engagement chez Kasa. Nous veillons a ce que chaque interaction, que ce soit avec nos hotes ou nos locataires soit empreinte de respect et de bienveillance.',
      },
      {
         title: 'Sécurité',
         desc: "la sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laussant une not aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.",
      },
   ];

   const [openState, setOpenState] = useState(
      Array(a_propos_value.length).fill(false),
   );

   const toggle = (index) => {
      const newState = [...openState];
      newState[index] = !newState[index];
      setOpenState(newState);
   };

   return (
      <div className="container">
         {a_propos_value.map((item, index) => (
            <DropDown
               key={index}
               index={index}
               toggle={toggle}
               isOpen={openState[index]}
               title={item.title}
               desc={item.desc}
            />
         ))}
      </div>
   );
}

export default A_Propos_Container;
