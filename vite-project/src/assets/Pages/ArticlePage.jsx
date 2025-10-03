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
                     <div className="star"></div>
                  </div>
                  <div className="groupe"></div>
               </div>
               <div className="sous-photo-droite"></div>
            </div>
         </div>
      );
   } else {
      return <Loader />;
   }
}

export default ArticlePage;
