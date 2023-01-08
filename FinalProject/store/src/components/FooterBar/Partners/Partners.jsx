import './styles.css'

const Partners = (props) =>
  {
    return (
        <div className="col-4 col-d-2">
            <p className="margintopnone">Partners</p>
            <ul>
                <li><a href="#" title="Support">Support</a></li>
                <li><a href="#" title="Shipping & Returns">Shipping & Returns</a></li>
                <li><a href="#" title="Size Guide">Size Guide</a></li>
                <li><a href="#" title="Product Care">Product Care</a></li>
            </ul>
        </div>
    )
  }

  export default Partners;