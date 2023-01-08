import './styles.css'
import FormInfo from './FormInfo/FormInfo'

const Newsletter = (props) =>
  {
    return (
    <div className="col-12 col-d-6 newsletter">
        <p className="margintopnone">Subscribe to newsletter</p>
        <FormInfo/>
        <div className="social">
            <a href="#" title="Facebook"><i className="icn-facebook"></i></a>
            <a href="#" title="Twitter"><i className="icn-twitter"></i></a>
        </div>
    </div>
    )
  }

  export default Newsletter;