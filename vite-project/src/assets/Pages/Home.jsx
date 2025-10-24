import Banner from '../../Components/Banner.jsx';
import Article from '../../Components/Article.jsx';

function Home() {
   return (
      <>
         <Banner
            image="../../src/assets/Logo/Image-bg.png"
            alt="banniere"
            text="Chez vous, partout et ailleurs"
         />
         <Article />
      </>
   );
}

export default Home;
