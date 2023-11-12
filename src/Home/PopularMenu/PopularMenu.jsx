import { useEffect, useState } from "react";
import Sectiontitle from "../../Component/Sectiontitle/Sectiontitle";

import MenuIteam from "../menu/MenuItem/MenuIteam";
import useMenu from "../../Hooks/useMenu";


const PopularMenu = () => {
    const [menu]=useMenu();
    const popular=menu.filter(item=>item.category==='popular');
//     const [Menu,setMenu]=useState([]);
//     useEffect(()=>{
// fetch('menu.json')
// .then(res=>res.json())
// .then(data=>{
//     const popularIteams=data.filter(iteam=>iteam.category==='popular');
//     setMenu(popularIteams)})
//     },[])
    return (
        <div>
            <section>
                <Sectiontitle 
                Heading="From our Menu"
                subHeading="Popular Iteams">


                </Sectiontitle>

                <div className=" grid md:grid-cols-2 gap-4 mt-4">
                   {
                    popular?.map(item=><MenuIteam key={item._id}
                    item={item}></MenuIteam>)
                   } 
                </div>
                <button className="btn btn-outline border-0 border-b-4 mt-4">View Menu</button>
            </section>
        </div>
    );
};

export default PopularMenu;