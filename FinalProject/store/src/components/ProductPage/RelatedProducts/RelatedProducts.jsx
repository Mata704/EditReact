import './styles.css'
import { useState, useEffect } from 'react'
import ProductCard from './ProductCard/ProductCard'



const RelatedProducts = (props) =>
{
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("https://foxcoding.net/api/getProductsList")
        .then(response => response.json())
        .then(result => {
        setData(result.data.products)
        setLoading(false)
        })
      }, [])

      let aux=data.filter((val) => val.category.find((category) => props.categories.find((cat) => cat==category))).filter((val) => val.id!=props.id).slice(0,4)

      const productList = aux.map((product) => {
        return <ProductCard info={product} key={product.id}/>
        })
    
    return (
        <>
            <h2 className="textcenter marginverticalfull">Related Products</h2>
            <div className="gridrow marginbottomdouble product-list related-list">
                {(!loading) && productList}
            </div>
        </>
    )
}

export default RelatedProducts;