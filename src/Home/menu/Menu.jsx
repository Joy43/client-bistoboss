import {Helmet} from "react-helmet";
import Cover from "../Shared/Cover/Cover";
import img from '../../assets/menu/menu-bg.png'
import desertsIMG from '../../assets/menu/dessert-bg.jpeg'
import Prizaimg from '../../assets/menu/pizza-bg.jpg'
import saladimg from '../../assets/menu/salad-bg.jpg'
import drinksimg from '../../assets/menu/banner3.jpg'
import useMenu from "../../Hooks/useMenu";
import Sectiontitle from "../../Component/Sectiontitle/Sectiontitle";
import Menucategory from "./Menu Category/Menucategory";

const Menu = () => {

    const [menu]=useMenu();
    const dessert=menu.filter(item=>item.category==='dessert');

    const salad=menu.filter(item=>item.category==='salad');
    const pizza=menu.filter(item=>item.category==='pizza');
    const offered=menu.filter(item=>item.category==='offered');
    const drinks=menu.filter(item=>item.category==='drinks');
    return (
        <div>
            <Helmet>
        <title>Bisto Menu</title>
        <meta name="Menu" content="Helmet application" />
        
    </Helmet> 
    
        <Cover img={img}title='our menu' ></Cover>
        {/* main cover */}
        <Sectiontitle subHeading="Don't Miss" Heading="Todayas OFFER"></Sectiontitle>
     {/* offerred */}
      <Menucategory items={offered}></Menucategory>
      {/* dessert menu iteam */}
      <Menucategory
      items={dessert}
      title="Dessert" 
      img={desertsIMG}>

      </Menucategory>
      {/* --------menu iteams ---------*/}
      <Menucategory
         items={pizza}
         title="Prizza" 
         img={Prizaimg}
      ></Menucategory>
           <Menucategory
         items={salad}
         title="prizza" 
         img={saladimg}
      ></Menucategory>
       <Menucategory
         items={drinks}
         title="drinks" 
         img={drinksimg}
      ></Menucategory>

        </div>
    );
};

export default Menu;