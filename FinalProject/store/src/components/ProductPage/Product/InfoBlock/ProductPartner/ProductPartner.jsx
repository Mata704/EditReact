const ProductPartner = ({name, value}) =>
  {
    return (

        <div className="product-description-line gridrowfull">
            <div className="col-6">
                {name}
            </div>
            <div className="col-6 graymedium">
                {value}
            </div>
        </div>  
    )
  }

  export default ProductPartner;
