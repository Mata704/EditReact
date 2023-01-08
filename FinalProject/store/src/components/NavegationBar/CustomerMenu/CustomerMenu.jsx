import './styles.css'


const CustomerMenu = (props) =>
  {
    return (
        <ul id="customermenu" className="col-7 col-t-3 col-d-2 textright">
                    <li><a href="#" title="Login">Login</a></li>
                    <li><a href="#" title="Search"><i className="icn-search"></i></a></li>
                    <li><a href="#" title="Wishlist"><i className="icn-heart"></i></a></li>
                    <li><a href="#" title="Shopping Cart"><i className="icn-shopping-cart"></i></a></li>
        </ul>
    )
  }

  export default CustomerMenu;