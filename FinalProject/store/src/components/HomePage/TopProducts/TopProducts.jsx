import { useState, useEffect } from 'react'
import './styles.css'
import ProductCard from './ProductCard/ProductCard'

const TopProducts = (props) =>
  {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("https://foxcoding.net/api/getProductsList")
        .then(response => response.json())
        .then(result => {
        const arrayAux=[...result.data.products].sort((a, b) => b.score - a.score);
        setData(arrayAux)
        setLoading(false)
        })
      }, [])

    const productList = data.slice(0, 8).map((product,i) => {
        return <ProductCard info={product} position={i} key={product.id}/>
        })


    return (
    <section id="products" className="product-list bg-graylight paddingtopdouble paddingbottomfull">
        <h1 className="textcenter">Top Products</h1>
        { (!loading) &&
        <div className="gridrow">
           {productList}
        </div>
        }
    </section>
    )
  }

  export default TopProducts;