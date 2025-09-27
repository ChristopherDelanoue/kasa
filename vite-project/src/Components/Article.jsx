import { useEffect, useState } from 'react';

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
      <article className="article">
         {articles.map((article) => (
            <div
               key={article.id}
               className="article"
            >
               <img
                  src={article.cover}
                  alt="cover {article.title}"
               />
            </div>
         ))}
      </article>
   );
}

export default Article;
