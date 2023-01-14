import { useState, useEffect } from 'react'
import ProductCard from './ProductCard/ProductCard'

const TopProducts = () =>
  {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    //used getProductsList?nProducts=100 because getProductsList get only 10 products.
    useEffect(() => {
        fetch("https://foxcoding.net/api/getProductsList?nProducts=100")
        .then(response => response.json())
        .then(result => {
        const arrayAux=[...result.data.products].sort((a, b) => b.score - a.score);
        setData(arrayAux)
        setLoading(false)
        })
        .catch((error) => {
          console.log(error)
          });
      }, [])

    //get Full data to filter. In ideal conditions the filters are API filters
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