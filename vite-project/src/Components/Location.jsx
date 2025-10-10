function Location({ appartement }) {
   return (
      <div className="gauche">
         <h2>{appartement.title}</h2>
         <p>{appartement.location}</p>
      </div>
   );
}

export default Location;
