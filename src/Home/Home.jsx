import Callus from "./Call us/Callus";
import CategorySwiper from "./Category/CategorySwiper";
import Features from "./Features/Features";
import PopularMenu from "./PopularMenu/PopularMenu";
import Banner from "./Shared/Banner";
import MenuIteam from "./menu/MenuItem/MenuIteam";
import Testimonial from "./Testimonial/Testimonial";
import { Helmet } from "react-helmet";

const Home = () => {
    return (
      <div>
           <Helmet>
        <title>Home page</title>
        <meta name="Menu" content="Helmet application" />
    </Helmet>  
         <div>
      <Banner></Banner> 
   </div>
   <div className="mb-4">
    <CategorySwiper></CategorySwiper>
   </div>
   <div>
      {/* row colum table ....menuiteam add  */}
    <PopularMenu></PopularMenu>
   </div>
   <div>
    <Features></Features>
   </div>
   <div className="mt-5">
    <Testimonial></Testimonial>
   </div>
   <div className="">
      <Callus></Callus>
   </div>
 
   </div>
    );
};

export default Home;