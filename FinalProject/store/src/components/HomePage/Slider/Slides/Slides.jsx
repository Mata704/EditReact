import './styles.css'
import showSlider from './../../../../assets/slider/slider01.jpg'
import showSliderMedium from './../../../../assets/slider/slider01-medium.jpg'
import showSliderSmall from './../../../../assets/slider/slider01-small.jpg'

const Slides = (props) =>
  {
    return (
    <div className="slider-slides">
        <div className="slider-slides-slide">
        <img srcSet={`${showSlider} 1920w, ${showSliderMedium} 1024w, ${showSliderSmall} 576w`} sizes='(min-width: 1200px) 1920px, (min-width: 750px) 1024px, 576px' src={showSlider} alt="Lore Impsum @edit" />
            <div className="slider-slides-slide-caption">
                <p className="h1">
                    Yohji Yamamoto<br />
                    Y-3
                </p>
                <a href="#" title="Shop Now">Shop Now</a>
            </div>
        </div>
    </div>   
    )
  }

  export default Slides;