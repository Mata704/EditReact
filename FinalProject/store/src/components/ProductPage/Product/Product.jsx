import ImagesBar from './ImagesBar/ImagesBar'
import ProductImage from './ProductImage/ProductImage'
import InfoBlock from './InfoBlock/InfoBlock'


const Product = (props) =>
{
    

    return (
        <div className="gridrow" id="product">
                <ImagesBar name={props.productData.name} image={props.productData.image} nImages='4'/>
                <ProductImage url={props.productData.image}/>
                <InfoBlock info={props.productData} cartInfo={props.cartInfo} setCartInfo={props.setCartInfo}/>
        </div>
    )
}

export default Product;