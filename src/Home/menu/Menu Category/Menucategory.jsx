
import PropTypes from 'prop-types';
import Cover from "../../Shared/Cover/Cover";
import MenuIteam from '../MenuItem/MenuIteam';
import { Link } from 'react-router-dom';


const Menucategory = ({items, title,img }) => {
    return (
        <div className='mt-5'>
            {title && <Cover img={img} title={title}></Cover>}
            <div className="grid md:grid-cols-2 gap-10">
                {items?.map(item => <MenuIteam key={item._id} item={item}></MenuIteam>)}
            </div>
            <Link to={`/order/${title}`}>
            <button className="btn btn-outline border-2 border-b-4">Order now</button>
            </Link>
        </div>
    );
};

Menucategory.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            _id: PropTypes.string.isRequired, // Assuming _id is a string and is required
            // Add other prop types for each property in your item object
        })
    ),
    title: PropTypes.string,
    img: PropTypes.string,
};

export default Menucategory;
