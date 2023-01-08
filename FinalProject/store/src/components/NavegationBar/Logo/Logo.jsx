import { Link } from 'react-router-dom';
import './styles.css'
import showLogo from './../../../assets/logo.svg'

const Logo = (props) =>
  {
    return (
        <div className="col-5 col-t-3 col-d-2" id="logo">
            <Link to="/" title="Ir para a página inicial">
                <img className="imgfit" src={showLogo} alt="Edit Store Logo" />
            </Link>    
        </div>
    )
  }

  export default Logo;
