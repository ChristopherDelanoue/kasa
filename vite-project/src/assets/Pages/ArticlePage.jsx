import { useParams } from 'react-router';
import { useEffect, useState } from 'react';
import { Loader } from '../../Components/Loader.jsx';

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
   return (
      <div className="ArticlePage-container">
         {console.log(logement)}
         <h1>{id}</h1>
         <img
            src={logement.cover}
            alt="cover"
         />
      </div>
   );
}

export default ArticlePage;
