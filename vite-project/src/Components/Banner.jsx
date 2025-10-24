function Banner({ image, alt, text }) {
   return (
      <div className="banner">
         <img
            src={image}
            alt={alt}
         />
         <p>{text}</p>
      </div>
   );
}

export default Banner;
