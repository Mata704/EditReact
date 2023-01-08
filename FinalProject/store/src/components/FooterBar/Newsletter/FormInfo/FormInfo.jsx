import './styles.css'

const FormInfo = (props) =>
  {
    return (
    <form className="gridrowfull">
        <div className="col-7 paddingleftnone">
            <input type="email" placeholder="Enter your email" name="email" />
        </div>
        <div className="col-5 paddingrightnone">
            <button type="submit">Subscribe</button>
        </div>
    </form>
    )
  }

  export default FormInfo;