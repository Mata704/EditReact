import './styles.css'

const SizeInfo = (props) =>
  {

    const createSizes = Object.keys(props.sizes).map((product) => {
        return ( <button type="button" key={product} onClick={() => props.setSize(product)}>{product}</button> )
    })

    return (
        <>
            <div className="col-12 fancytext">
                Size
            </div>
            <div className="col-6 sizebtns">
                {createSizes}
            </div>
            <div className="col-6 textright">
                <a href="#" title="Size Guidelines" className="fancytext">Size Guidelines</a>
            </div>
            <div className="col-12 small graymedium">
                Model is a US size 2-4, wears Matter size 1. 175cm tall.
            </div>   
        </>
    )
  }

  export default SizeInfo;