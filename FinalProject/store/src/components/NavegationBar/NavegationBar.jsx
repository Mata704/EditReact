import './styles.css'
import Logo from './Logo/Logo'
import MainMenu from './MainMenu/MainMenu'
import CustomerMenu from './CustomerMenu/CustomerMenu'


const NavegationBar = (props) =>
  {
    return (
      <nav className="gridrow">
        <Logo/>
        <MainMenu/>
        <CustomerMenu/>
      </nav>
    )
  }

  export default NavegationBar;