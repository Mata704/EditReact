const ProductPartner = (props) =>
  {
    return (

        <div className="product-description-line gridrowfull">
            <div className="col-6">
                {props.name}
            </div>
            <div className="col-6 graymedium">
                {props.value}
            </div>
        </div>  
    )
  }

  export default ProductPartner;
