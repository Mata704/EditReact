import './styles.css'
import { useState, useEffect } from 'react'
import ProductCard from './ProductCard/ProductCard'



const RelatedProducts = ({categories ,reloadAPI, setReloadAPI,id}) =>
{
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);


    //used getProductsList?nProducts=100 because getProductsList get only 10 products. 
    useEffect(() => {
        fetch("https://foxcoding.net/api/getProductsList?nProducts=100")
        .then(response => response.json())
        .then(result => {
        setData(result.data.products)
        setLoading(false)
        })
        .catch((error) => {
            console.log(error)
            });
      }, [])

    //get Full data to filter. In ideal conditions the filters are API filters
    const productList = data.filter((val) => val.category.find((category) => categories.find((cat) => cat==category))).filter((val) => val.id!=id).slice(0,4).map((product) => {
        return <ProductCard info={product} key={product.id} reloadAPI={reloadAPI} setReloadAPI={setReloadAPI}/>
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