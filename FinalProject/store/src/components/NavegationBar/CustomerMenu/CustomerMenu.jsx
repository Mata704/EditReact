import './styles.css'
import { useContext } from "react";
import { CartInfoContext } from '../../../contexts/CartInfoContext'


const CustomerMenu = (props) =>
  {

    const options = [{name:"Login"},{name:"Search",icon:"icn-search"},{name:"Wishlist",icon:"icn-heart"},{name:"Shopping Cart",icon:"icn-shopping-cart icon-link"}]

    const { cartCount } = useContext(CartInfoContext);

    const optionsList = options.map((option) => {
      return (
        <li key={option.name}><a href="#" title={option.name}>{option.icon ? <i className={option.icon}>{(option.name==='Shopping Cart' && cartCount!==0 ) && <div className="cart-info-counter">{cartCount}</div>}</i> : option.name} </a></li>  
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