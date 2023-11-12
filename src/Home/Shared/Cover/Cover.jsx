import { Parallax, } from 'react-parallax';
import coverimg from '../../../assets/home/banner.jpg'
const Cover = ({ img, title }) => {
    console.log(img,title)
  return (
 

<Parallax
        blur={{ min: -50, max: 50 }}
        bgImage={coverimg}
        bgImageAlt="the dog"
        strength={-200}
    >
        <div
        className="hero  h-[700px]"
        style={{ backgroundImage: `url("${img}")` }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">{title}</h1>
            <p className="mb-5">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
        <div style={{ height: '200px' }} />
    </Parallax>
      
    
  );
};

export default Cover;
