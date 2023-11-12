import Sectiontitle from "../../Component/Sectiontitle/Sectiontitle";
import features from '../../../src/assets/home/featured.jpg'
import './Features.css'
const Features = () => {
    return (
        <div className="featured-iteam  text-white font-bold pt-12">
         <Sectiontitle subHeading="Cheack it out" Heading="Feature Iteam"></Sectiontitle>   
        <div className=' md:flex  justify-center text-white items-center pb-12 py-8 px-36 ' >
            <div> 
                <img src={features} alt="" />
            </div>
            <div className="md:ml-10">
                <p>Aug 20, 2029</p>
               
                <p className="uppercase">where can i get some? </p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Dolore eligendi nobis
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                Atque nostrum quis vitae placeat, id corrupti provident cumque fugit, explicabo labore consequatur quia repellendus 
                 cupiditate incidunt id ullam tempore dolores odit autem 
                 neque.</p>
                 <button className="btn btn-outline border-2 border-b-4">Order now</button>
            </div>
        </div>
        </div>
    );
};

export default Features;