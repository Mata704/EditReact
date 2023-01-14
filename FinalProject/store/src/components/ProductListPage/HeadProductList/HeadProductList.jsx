import './styles.css'


const HeadProductList = ({type}) =>
  {
    return (
    <div id="headerproductlist">
        <div className="textoverlay">
            <h1>{type}</h1>
            <p>These awesome products</p>
        </div>
    </div>
      
    )
  }

  export default HeadProductList;