import { useEffect, useState } from 'react';
import { Link } from 'react-router';

function Article() {
   const [articles, setArticles] = useState([]);

   useEffect(() => {
      fetch('/Data/data.json')
         .then((res) => res.json())
         .then((data) => {
            console.log('Data JSON :', data);
            setArticles(data);
         })
         .catch((err) => console.error('Erreur de chargement JSON :', err));
   }, []);

   return (
      <div className="container-shadow">
         <div className="container-logement">
            {articles.map((article) => (
               <Link
                  to={`/Article/${article.id}`}
                  key={article.id}
                  className="link-article"
               >
                  <article
                     key={article.id}
                     className="logement"
                  >
                     <img
                        src={article.cover}
                        alt="cover {article.title}"
                     />
                     <p>{article.title}</p>
                  </article>
               </Link>
            ))}
         </div>
      </div>
   );
}

export default Article;
