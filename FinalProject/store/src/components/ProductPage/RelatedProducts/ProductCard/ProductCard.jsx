import './styles.css'
import { Link } from 'react-router-dom';



const ProductCard = ({reloadAPI, setReloadAPI, info}) =>
  {
    //info
    const type ={
      1 : 'snickers',
      2 : 'coats',
      3 : 'pants',
      4 : 'jackets'
    }
   
    //functions
    const getTypesString = (entryArray,type) =>
    {
      let auxArray=[]
        for(let i=0;i<entryArray.length;i++)
        {
            auxArray.push(type[entryArray[i]])
        }
        return(auxArray.join(' '))
    }

    const handleReloadApi = () =>{ 
      if(reloadAPI==true){
        setReloadAPI(false)
      }
      else{
        setReloadAPI(true)
      }
      window.scrollTo(0,0)
    }

    return (
    <Link onClick={handleReloadApi} className="product-card col-6 col-t-3" to={`/Product/${info.id}`} title="View Product">
        <div className="product-card-image">
            {info.new ? <span className="product-card-image-badge">New!</span> : <></>}
            <img className="imgfit"  src={info.image} />
        </div>
        <p className="margintophalf marginbottomnone">{info.name}</p>
        <p className="gray marginnone">{getTypesString(info.category,type)}</p>
        <p className="secondary marginnone">${info.price}.00</p>
    </Link>
    )
  }
  
  export default ProductCard;