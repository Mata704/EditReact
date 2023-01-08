import './styles.css'

const ProductImage = (props) =>
  {
    

    return (
    <div id="bigimg" className="col-9 col-t-4 col-d-5">
        <img className="imgfit" src={props.url} />
        <div className="share margintopfull">
            Share this product 
            <a href="#" title="Facebook"><i className="icn-facebook"></i></a>
            <a href="#" title="Twitter"><i className="icn-twitter"></i></a>
            <a href="#" title="Pinteres"><i className="icn-pinterest"></i></a>
        </div>
    </div>
    
    )
  }

  export default ProductImage;


