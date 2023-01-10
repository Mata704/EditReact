import './styles.css'

const QuantityInfo = (props) =>
  {

    const quantityIncrementor=() => 
    {
        props.setQuantity(props.quantity+1)
    }

    const quantityDecrementor=() => 
    {
        (props.quantity>1) ? props.setQuantity(props.quantity-1):props.setQuantity(1)
    }

    const quantityChange=(event) => 
    {
        (event.target.value>0) ? props.setQuantity(parseInt(event.target.value)):props.setQuantity(1)
    }

    return (
        <>
            <div className="col-12 fancytext">
                Quantity
            </div>
            <div className="col-6 col-d qty">
                <button type="button" className="btnleft" onClick={quantityDecrementor}>-</button>
                <input id='quantity' type="number" value={props.quantity} onChange={quantityChange} name="qty"/> 
                <button type="button" className="btnright" onClick={quantityIncrementor}>+</button>
            </div>
        </>
    )
  }

  export default QuantityInfo;