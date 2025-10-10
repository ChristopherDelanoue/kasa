function ImageArticlePage({ index, pictures, changePicture }) {
   return (
      <div className="images_container">
         <img
            src={pictures[index]}
            alt="cover {pictures[index]}"
         />
         <div className="overlay">
            <i
               onClick={() => changePicture('moins')}
               className="fa-solid fa-chevron-left"
            ></i>
            <i
               onClick={() => changePicture('plus')}
               className="fa-solid fa-chevron-right"
            ></i>
            <p>
               {index + 1}/{pictures.length}
            </p>
         </div>
      </div>
   );
}

export default ImageArticlePage;
