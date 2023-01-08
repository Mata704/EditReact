import './styles.css'
import SizeInfo  from './SizeInfo/SizeInfo'
import QuantityInfo  from './QuantityInfo/QuantityInfo'
import { useState } from 'react'

const CartInfo = (props) =>
  {
    const [quantity, setQuantity] = useState(1);
    const [size, setSize] = useState();

    const addToCart=(ci,setCI,qnt,sz,id) => 
    {
        if(sz!=undefined)
        {
            const addInfo= {id:id, quantity:qnt, size:sz}
            const aux =[...ci]
            aux.push(addInfo) 
            setCI(aux)    
        }     
    }


    return (
        <div className="product-description-line gridrowfull">
            <SizeInfo sizes={props.sizes} setSize={setSize}/>
            <QuantityInfo quantity={quantity} setQuantity={setQuantity}/>
            <div className="col-6 col-d cart">
                <button type="button" onClick={()=>addToCart(props.cartInfo, props.setCartInfo,quantity,size,props.id)}>Add to cart</button>
            </div>
            <div className="col-12 col-d textright wishlist marginbottomtwothirds">
                <a href="#" title="Add top wishlist" className="fancytext"><i className="icn-heart"></i> Add to wishlist</a>
            </div>
        </div>
    )
  }

  export default CartInfo;
