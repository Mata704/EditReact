import './styles.css'

const ProductInfo = (props) =>
  {
    const TextInfo = (props) =>
    {
        function closeFilter(id)
        {
            document.getElementById(id).classList.remove('open')   
        }

        function openFilter(id)
        {   
            document.getElementById(id).classList.add('open')    
        }

        return(
            <li id={`TextInfo_${props.type}`}>
                <a title="Tops">
                    {props.type} 
                    <span className="plus" onClick={() =>{ openFilter(`TextInfo_${props.type}`)} }>+</span>
                    <span className="minus" onClick={() => { closeFilter(`TextInfo_${props.type}`)} }>-</span>
                </a>
                <div className="graymedium">
                    <p>{props.features}</p>
                </div>
            </li>
        )
    }

    



    return (
        <div className="gridrowfull product-care">
            <div className="col-12">
                <ul>
                    <TextInfo type="Features" features={props.features} />
                    <TextInfo type="Fabric" features={props.features} />
                </ul>
            </div>
        </div>
    
    )
  }

  export default ProductInfo;
