import './styles.css'
import { Link } from 'react-router-dom';



const ProductCardFilter = (props) =>
  {
   

    function getTypesString(entryArray)
    {
        const type ={
          1 : 'snickers',
          2 : 'coats',
          3 : 'pants',
          4 : 'jackets'
        }

        let auxArray=[]
        for(let i=0;i<entryArray.length;i++)
        {
            auxArray.push(type[entryArray[i]])
        }
        return(auxArray.join(' '))
    }

    return (
    <Link className="product-card col-6 col-d-4" to={`/Product/${props.info.id}`} title="View Product">
        <div className="product-card-image">
            {props.info.new ? <span className="product-card-image-badge">New!</span> : <></>}
            <img className="imgfit"  src={props.info.image} />
        </div>
        <p className="margintophalf marginbottomnone">{props.info.name}</p>
        <p className="gray marginnone">{getTypesString(props.info.category)}</p>
        <p className="secondary marginnone">${props.info.price}.00</p>
    </Link>
    )
  }

  export default ProductCardFilter;