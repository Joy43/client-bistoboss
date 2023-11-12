

const MenuIteam = ({item}) => {
    const {name,image,price,recipe}=item;

    return (
        <div className="flex space-x-4 mb-3" >
            <div>
          <img className="w-[120px]" style={{borderRadius:'0 200px 200px  200px'}} src={image} alt="" />  
        </div>
        <div>
            <h3 className="uppercase">{name}</h3>
            <p>{recipe}</p>
        </div>
        <p>{price}</p>
        </div>
    );
};

export default MenuIteam;