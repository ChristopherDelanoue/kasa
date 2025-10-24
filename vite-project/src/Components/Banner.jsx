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

// a propos : ../../src/assets/Logo/Image-a-propos.png
// banner titre : "../../src/assets/Logo/Image-bg.png"
