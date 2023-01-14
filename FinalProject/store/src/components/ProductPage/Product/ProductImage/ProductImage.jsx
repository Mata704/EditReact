import './styles.css'

const ProductImage = ({url}) =>
  {
    const options = [{id:0, name:"Facebook", image:"icn-facebook"},{id:1, name:"Twitter", image:"icn-twitter"},{id:2, name:"Pinteres", image:"icn-pinterest"}]
    
    const optionsList = options.map((option) => {
      return (
        <a key={option.id} href="#" title={option.name}><i className={option.image}></i></a>
      )
  })  
    
    return (
    <div id="bigimg" className="col-9 col-t-4 col-d-5">
        <img className="imgfit" src={url} />
        <div className="share margintopfull">
            Share this product 
            {optionsList}
        </div>
    </div>
    
    )
  }

  export default ProductImage;


