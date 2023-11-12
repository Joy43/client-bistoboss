import { useState } from 'react';
import Cover from '../../Home/Shared/Cover/Cover';
import orderimg from '../../assets/shop/banner2.jpg'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenu from '../../Hooks/useMenu';
import FoodCard from '../../Component/FoodCard/FoodCard';
import OrderTab from './Order Tab/OrderTab';
import { useParams } from 'react-router-dom';
import { Helmet, HelmetProvider } from 'react-helmet-async';
const Order = () => {
  const categories=['salad','prizza','soup','dessert','drinks']
  const {category}= useParams();
  const initialIndex=categories.indexOf(category)
 const [menu]=useMenu();
 
 console.log(category);
    const[tabIndex,setTabIndex]=useState(initialIndex)

    const dessert=menu.filter(item=>item.category==='dessert');

    const salad=menu.filter(item=>item.category==='salad');
    const pizza=menu.filter(item=>item.category==='pizza');
    const offered=menu.filter(item=>item.category==='offered');
    const drinks=menu.filter(item=>item.category==='drinks');
    return (
        <div>
         <Helmet>
        <title>Hello World</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
           <Cover img={orderimg} title="Order Food"></Cover> 
<Tabs defaultIndex={tabIndex} onSelect={(index)=>setTabIndex(index)}>
    <TabList>
      <Tab>salad</Tab>
      <Tab>Pizza</Tab>
      <Tab>Soup</Tab>
      <Tab>Dessert</Tab>
      <Tab>Drinks</Tab>
      

    </TabList>

    <TabPanel>
   {/* <div className='grid md:grid-cols-3 gap-10'>
   {
      salad.map(item=><FoodCard key={item._id} item={item}>
        
      </FoodCard>)}
   </div> */}
   <OrderTab items={salad}></OrderTab>
      </TabPanel>
    <TabPanel>
      <OrderTab items={pizza}></OrderTab>
      </TabPanel>
    <TabPanel><OrderTab items={dessert}></OrderTab></TabPanel>
    <TabPanel><OrderTab items={offered}></OrderTab></TabPanel>
    <TabPanel><OrderTab iteam={drinks}></OrderTab></TabPanel>
  </Tabs>
        </div>
    );
};

export default Order;