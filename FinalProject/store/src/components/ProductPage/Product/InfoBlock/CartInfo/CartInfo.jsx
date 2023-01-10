import './styles.css'
import SizeInfo  from './SizeInfo/SizeInfo'
import QuantityInfo  from './QuantityInfo/QuantityInfo'
import { useState } from 'react'

const CartInfo = (props) =>
  {
    const [quantity, setQuantity] = useState(1);
    const [size, setSize] = useState();
    const [cartInfo, setCartInfo] = useState([]);

    const addToCart=() => 
    {
        if(size!=undefined)
        {
            const addInfo= {id:props.id, quantity:quantity, size:size}
            const aux =[...cartInfo]
            aux.push(addInfo) 
            setCartInfo(aux)    
        }     
    }

    return (
        <div className="product-description-line gridrowfull">
            <SizeInfo sizes={props.sizes} setSize={setSize}/>
            <QuantityInfo quantity={quantity} setQuantity={setQuantity}/>
            <div className="col-6 col-d cart">
                <button type="button" onClick={addToCart}>Add to cart</button>
            </div>
            <div className="col-12 col-d textright wishlist marginbottomtwothirds">
                <a href="#" title="Add top wishlist" className="fancytext"><i className="icn-heart"></i> Add to wishlist</a>
            </div>
        </div>
    )
  }

  export default CartInfo;
