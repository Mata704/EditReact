import './styles.css'
import TextInfo from './TextInfo/TextInfo'

const ProductInfo = ({features}) =>
  {
    return (
        <div className="gridrowfull product-care">
            <div className="col-12">
                <ul>
                    <TextInfo type="Features" features={features} />
                    <TextInfo type="Fabric" features={features} />
                </ul>
            </div>
        </div>
    )
  }

  export default ProductInfo;
