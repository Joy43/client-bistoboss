
import PropTypes from 'prop-types';
const Sectiontitle = ({Heading,subHeading}) => {
    return (
        <div>
         <p className='text-yellow-600 mx-auto my-10  text-center w-4/12'>{subHeading}</p> 
         <h3 className='text-center uppercase text-3xl border-y-4  '>{Heading}</h3>  
        </div>
    );
};
Sectiontitle.propTypes = {
    Heading: PropTypes.string.isRequired,
    subHeading: PropTypes.string.isRequired,
};

export default Sectiontitle;