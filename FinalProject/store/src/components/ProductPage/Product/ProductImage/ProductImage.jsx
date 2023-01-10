import './styles.css'

const ProductImage = (props) =>
  {

    const options = [{name:"Facebook", image:"icn-facebook"},{name:"Twitter", image:"icn-twitter"},{name:"Pinteres", image:"icn-pinterest"}]
    const optionsList = options.map((option) => {
      return (
        <a key={option.name} href="#" title={option.name}><i className={option.image}></i></a>
      )
  })  
    

    return (
    <div id="bigimg" className="col-9 col-t-4 col-d-5">
        <img className="imgfit" src={props.url} />
        <div className="share margintopfull">
            Share this product 
            {optionsList}
        </div>
    </div>
    
    )
  }

  export default ProductImage;


