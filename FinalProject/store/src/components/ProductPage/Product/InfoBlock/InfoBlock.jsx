import './styles.css'
import ProductPartner from './ProductPartner/ProductPartner'
import ProductInfo from './ProductInfo/ProductInfo'
import CartInfo from './CartInfo/CartInfo'

const InfoBlock = (props) =>
  {
    

    const createStars = Array.from({ length: 5 }, () => Math.round(props.info.score)).map((element,i) => {
    return <i key={i} className={`icn-star ${element>i? "primary":""}`}></i>
    })
   
    return (
    <div id="product-description" className="col-12 col-t-7 col-d-6">
        
        <h1>{props.info.name}</h1>

        <div className="product-description-line gridrowfull nogutter">
            <div className="col-6 price">USD {props.info.price}.00</div>
            <div className="col-6 textright score">
                {createStars}
                <span>{Math.round(props.info.score)} of 5</span></div>
        </div>

        <div className="product-description-line gridrowfull">
            <div className="col-12">
                <p className="marginnone">Description</p>
                <p className="graymedium marginnone marginbottomthird smallerheight">{props.info.description}</p>
            </div>
        </div>

        <ProductPartner name="Artisan Employment" value="54 jobs"/>
        <ProductPartner name="Partnership" value={props.info.partnership}/>
        <ProductPartner name="In Collab" value={props.info.partnership}/>
        <CartInfo id={props.info.id} sizes={props.info.sizes}  cartInfo={props.cartInfo} setCartInfo={props.setCartInfo}/>
        <ProductInfo features={props.info.description} fabric={props.info.description}/>
    </div> 
    )
  }

  export default InfoBlock;
