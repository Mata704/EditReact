import './styles.css'
import { Link } from 'react-router-dom';

const MainMenu = (props) =>
  {
    const options = [{name:"Shop", link:"/ProductList/"},{name:"Fabric",link:"#"},{name:"Journal",link:"#"},{name:"About",link:"#"}]

    const optionsList = options.map((option) => {
      return (
        <li key={option.name}><Link to={option.link} title={option.name}>{option.name}<i className="icn-chevron-down"></i></Link></li>  
      )
    })  

    return (
        <ul id="mainmenu" className="col-12 col-t-6 col-d-7">
            {optionsList}
        </ul>
    )
  }

  export default MainMenu;