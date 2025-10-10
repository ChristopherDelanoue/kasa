function Host({ appartement }) {
   return (
      <div className="host">
         <p>{appartement.host.name}</p>
         <img src={appartement.host.picture} />
      </div>
   );
}

export default Host;
