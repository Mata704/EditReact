import './styles.css'
import { Link } from 'react-router-dom';

const MainMenu = () =>
  {
    const options = [{id:1, name:"Shop", link:"/ProductList/"},{id:2, name:"Fabric",link:"#"},{id:3, name:"Journal",link:"#"},{id:4, name:"About",link:"#"}]

    const optionsList = options.map((option) => {
      return (
        <li key={option.id}><Link to={option.link} title={option.name}>{option.name}<i className="icn-chevron-down"></i></Link></li>  
      )
    })  

    return (
        <ul id="mainmenu" className="col-12 col-t-6 col-d-7">
            {optionsList}
        </ul>
    )
  }

  export default MainMenu;