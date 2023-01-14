import ImagesBar from './ImagesBar/ImagesBar'
import ProductImage from './ProductImage/ProductImage'
import InfoBlock from './InfoBlock/InfoBlock'


const Product = ({productData}) =>
{
    const images = [{id:0, name:productData.name,url:productData.image},
                    {id:1, name:productData.name,url:productData.image},
                    {id:2, name:productData.name,url:productData.image},
                    {id:3, name:productData.name,url:productData.image}
                   ]

    return (
        <div className="gridrow" id="product">
                <ImagesBar images={images}/>
                <ProductImage url={productData.image}/>
                <InfoBlock info={productData}/>
        </div>
    )
}

export default Product;