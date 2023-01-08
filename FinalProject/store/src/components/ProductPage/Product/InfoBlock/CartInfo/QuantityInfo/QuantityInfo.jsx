import './styles.css'

const QuantityInfo = (props) =>
  {

    const quantityIncrementor=(qnt,setQnt) => 
    {
        setQnt(qnt+1)
    }

    const quantityDecrementor=(qnt,setQnt) => 
    {
        (qnt>1) ? setQnt(qnt-1):setQnt(1)
    }

    const quantityChange=(val,setQnt) => 
    {
        (val.target.value>0) ? setQnt(parseInt(val.target.value)):setQuantity(1)
    }

    return (
        <>
            <div className="col-12 fancytext">
                Quantity
            </div>
            <div className="col-6 col-d qty">
                <button type="button" className="btnleft" onClick={() => quantityDecrementor(props.quantity,props.setQuantity)}>-</button>
                <input id='quantity' type="number" value={props.quantity} onChange={e => quantityChange(e,props.setQuantity) } name="qty"/> 
                <button type="button" className="btnright" onClick={() => quantityIncrementor(props.quantity,props.setQuantity)}>+</button>
            </div>
        </>
    )
  }

  export default QuantityInfo;