import { useParams } from 'react-router';
import { useEffect, useState } from 'react';
import { Loader } from '../../Components/Loader.jsx';
import DropDownArticle from '../../Components/DropDownArticle.jsx';

function ArticlePage() {
   const { id } = useParams();
   const [logement, setLogement] = useState();
   const [isOpen, setIsOpen] = useState(false);

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
                     <DropDownArticle title="Description">
                        <p>{logement.description}</p>
                     </DropDownArticle>
                     <DropDownArticle title="Équipements">
                        <ul>
                           {logement.equipments.map((equipement) => (
                              <li key={equipement.id}>{equipement}</li>
                           ))}
                        </ul>
                     </DropDownArticle>
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
