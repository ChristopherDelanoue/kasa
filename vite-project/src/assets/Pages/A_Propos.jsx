import A_Propos_Container from '../../Components/A_Propos_Container.jsx';
import Banner from '../../Components/Banner.jsx';

function A_Propos() {
   return (
      <>
         <Banner
            image="../../src/assets/Logo/Image-a-propos.png"
            alt="banniere"
         />
         <A_Propos_Container />
      </>
   );
}

export default A_Propos;
