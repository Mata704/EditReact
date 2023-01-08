import './styles.css'
import Slides from './Slides/Slides'



const Slider = (props) =>
  {
    return (
    <section className="slider">
        <Slides/>
        <a href="#" className="slider-previous"><i className="icn-chevron-left"></i></a>
        <a href="#" className="slider-next"><i className="icn-chevron-right"></i></a>
    </section>
    )
  }

  export default Slider;