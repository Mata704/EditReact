import './styles.css'
import ProductPartner from './ProductPartner/ProductPartner'
import ProductInfo from './ProductInfo/ProductInfo'
import CartInfo from './CartInfo/CartInfo'

const InfoBlock = ({info}) =>
  {
    const createStars = Array.from({ length: 5 }, () => Math.round(info.score)).map((element,i) => {
    return <i key={i} className={`icn-star ${element>i? "primary":""}`}></i>
    })
  
    return (
    <div id="product-description" className="col-12 col-t-7 col-d-6">
        
        <h1>{info.name}</h1>

        <div className="product-description-line gridrowfull nogutter">
            <div className="col-6 price">USD {info.price}.00</div>
            <div className="col-6 textright score">
                {createStars}
                <span>{Math.round(info.score)} of 5</span></div>
        </div>

        <div className="product-description-line gridrowfull">
            <div className="col-12">
                <p className="marginnone">Description</p>
                <p className="graymedium marginnone marginbottomthird smallerheight">{info.description}</p>
            </div>
        </div>

        <ProductPartner name="Artisan Employment" value="54 jobs"/>
        <ProductPartner name="Partnership" value={info.partnership}/>
        <ProductPartner name="In Collab" value={info.partnership}/>
        <CartInfo id={info.id} sizes={info.sizes}/>
        <ProductInfo features={info.description}/>
    </div> 
    )
  }

  export default InfoBlock;
