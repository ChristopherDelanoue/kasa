import { useParams } from 'react-router';
import { useEffect, useState } from 'react';
import { Loader } from '../../Components/Loader.jsx';
import DropDownArticle from '../../Components/DropDownArticle.jsx';
import ImageArticlePage from '../../Components/ImageArticlePage.jsx';
import Etoiles from '../../Components/Etoiles.jsx';
import Tag from '../../Components/Tag.jsx';
import Host from '../../Components/Host.jsx';
import Location from '../../Components/Location.jsx';
import NotFound from '../../Components/NotFound.jsx';

function ArticlePage() {
   const { id } = useParams();
   const [logement, setLogement] = useState(null);
   const [loading, setLoading] = useState(true);
   const [isOpen, setIsOpen] = useState(false);
   const [index, setIndex] = useState(0);

   useEffect(() => {
      fetch('/Data/data.json')
         .then((data) => data.json())
         .then((res) => {
            const find = res.find((a) => a.id === id);
            setLogement(find || null);
         })
         .finally(() => {
            setLoading(false);
         });
   }, [id]);

   if (loading) {
      return <Loader />;
   }
   if (logement) {
      return (
         <div className="ArticlePage-container">
            <ImageArticlePage
               index={index}
               pictures={logement.pictures}
               changePicture={changePicture}
            />
            <div className="sous-photo">
               <div className="sous-photo-gauche">
                  <div className="desc_container">
                     <div className="location_tag">
                        <Location appartement={logement} />
                        <Tag tags={logement.tags} />
                     </div>
                     <div className="host_rating">
                        <Etoiles rating={logement.rating} />
                        <Host appartement={logement} />
                     </div>
                  </div>
                  <div className="groupe-description">
                     <DropDownArticle title="Description">
                        <p>{logement.description}</p>
                     </DropDownArticle>
                     <DropDownArticle title="Équipements">
                        <ul>
                           {logement.equipments.map((equipement) => (
                              <li key={equipement}>{equipement}</li>
                           ))}
                        </ul>
                     </DropDownArticle>
                  </div>
               </div>
            </div>
         </div>
      );
   } else {
      return <NotFound />;
   }

   function changePicture(direction) {
      setIndex((prevIndex) => {
         if (direction === 'moins') {
            return prevIndex === 0
               ? logement.pictures.length - 1
               : prevIndex - 1;
         } else if (direction === 'plus') {
            return prevIndex === logement.pictures.length - 1
               ? 0
               : prevIndex + 1;
         } else {
            return prevIndex;
         }
      });
   }
}

export default ArticlePage;
