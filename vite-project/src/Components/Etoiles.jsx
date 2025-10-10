function Etoiles({ rating }) {
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

export default Etoiles;
