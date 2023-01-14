import './styles.css'

const QuantityInfo = ({quantity, setQuantity}) =>
  {

    const quantityIncrementor=() =>{
        setQuantity(quantity+1)
    }

    const quantityDecrementor=() =>{
        (quantity>1) ? setQuantity(quantity-1):setQuantity(1)
    }

    const quantityChange=(event) =>{
        (event.target.value>0) ? setQuantity(parseInt(event.target.value)):setQuantity(1)
    }

    return (
        <>
            <div className="col-12 fancytext">
                Quantity
            </div>
            <div className="col-6 col-d qty">
                <button type="button" className="btnleft" onClick={quantityDecrementor}>-</button>
                <input id='quantity' type="number" value={quantity} onChange={quantityChange} name="qty"/> 
                <button type="button" className="btnright" onClick={quantityIncrementor}>+</button>
            </div>
        </>
    )
  }

  export default QuantityInfo;