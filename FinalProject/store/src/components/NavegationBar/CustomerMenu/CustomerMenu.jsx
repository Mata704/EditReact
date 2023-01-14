import './styles.css'
import { useContext } from "react";
import { CartContext } from '../../../contexts/CartContext'


const CustomerMenu = () =>
  {
    const options = [{id:0, name:"Login"},{id:1,name:"Search",icon:"icn-search"},{id:2,name:"Wishlist",icon:"icn-heart"},{id:3,name:"Shopping Cart",icon:"icn-shopping-cart icon-link"}]
    const { cartCount } = useContext(CartContext);

    const optionsList = options.map((option) => {
      return (
        <li key={option.id}><a href="#" title={option.name}>{option.icon ? <i className={option.icon}>{(option.name==='Shopping Cart' && cartCount!==0 ) && <div className="cart-info-counter">{cartCount}</div>}</i> : option.name} </a></li>  
      )
    })  

    return (
      <>
        <ul id="customermenu" className="col-7 col-t-3 col-d-2 textright">
          {optionsList}  
        </ul>
      </>
    )
  }

  export default CustomerMenu;