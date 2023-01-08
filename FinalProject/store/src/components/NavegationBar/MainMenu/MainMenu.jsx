import './styles.css'
import { Link } from 'react-router-dom';

const MainMenu = (props) =>
  {
    return (
        <ul id="mainmenu" className="col-12 col-t-6 col-d-7">
            <li><Link to="/ProductList/" title="Shop">Shop <i className="icn-chevron-down"></i></Link></li>
            <li><a href="#" title="Fabric">Fabric<i className="icn-chevron-down"></i></a></li>
            <li><a href="#" title="Journal">Journal<i className="icn-chevron-down"></i></a></li>
            <li><a href="#" title="About">About<i className="icn-chevron-down"></i></a></li>
        </ul>
    )
  }

  export default MainMenu;