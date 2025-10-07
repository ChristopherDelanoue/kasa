import { useParams } from 'react-router';
import { useEffect, useState } from 'react';
import { Loader } from '../../Components/Loader.jsx';
import DropDown from '../../Components/DropDown.jsx';

function ArticlePage() {
   const { id } = useParams();
   const [logement, setLogement] = useState();

   useEffect(() => {
      fetch('/Data/data.json')
         .then((data) => data.json())
         .then((res) => {
            const find = res.find((a) => a.id === id);
            setLogement(find);
         });
   }, [id]);

   if (!logement) {
      return <Loader />;
   }
   if (logement) {
      return (
         <div className="ArticlePage-container">
            {console.log(logement)}
            <img
               src={logement.cover}
               alt="cover"
            />
            <div className="sous-photo">
               <div className="sous-photo-gauche">
                  <div className="groupe">
                     <div className="gauche">
                        <h2>{logement.title}</h2>
                        <p>{logement.location}</p>
                     </div>
                     <div className="droite">
                        <p>{logement.host.name}</p>
                        <img src={logement.host.picture} />
                     </div>
                  </div>
                  <div className="groupe">
                     <div className="tag">
                        {logement.tags.map((tag, index) => (
                           <p key={index}>{tag}</p>
                        ))}
                     </div>
                     {etoiles(logement.rating)}
                  </div>
                  <div className="groupe-description">
                     <div className="DropDown">
                        <p>Description</p>
                        <img
                           src="../../src/assets/Logo/arrow-up.png"
                           alt="arrow"
                        />
                     </div>
                     <div className="DropDown">
                        <p>Equipement</p>
                        <img
                           src="../../src/assets/Logo/arrow-up.png"
                           alt="arrow"
                        />
                     </div>
                  </div>
               </div>
               <div className="sous-photo-droite"></div>
            </div>
         </div>
      );
   } else {
      return <Loader />;
   }

   function etoiles(rating) {
      const note = parseInt(rating);
      const star = [];
      for (let i = 0; i < 5; i++) {
         star.push(
            <i
               key={i}
               className={`fa-solid fa-star ${i < note ? 'orange' : 'grey'}`}
            ></i>,
         );
      }
      return <div className="star">{star}</div>;
   }
}

export default ArticlePage;
