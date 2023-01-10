import './styles.css'


const CustomerMenu = (props) =>
  {

    const options = [{name:"Login"},{name:"Search",icon:"icn-search"},{name:"Wishlist",icon:"icn-heart"},{name:"Shopping Cart",icon:"icn-shopping-cart"}]

    const optionsList = options.map((option) => {
      return (
        <li key={option.name}><a href="#" title={option.name}>{option.icon ? <i className={option.icon}></i> : option.name}</a></li>  
      )
    })  

    return (
        <ul id="customermenu" className="col-7 col-t-3 col-d-2 textright">
                 {optionsList}   
        </ul>
    )
  }

  export default CustomerMenu;