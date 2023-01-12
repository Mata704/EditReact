import { useState, useEffect } from 'react'
import HeadProductList from './HeadProductList/HeadProductList'
import SortBar from './SortBar/SortBar'
import GridList from './GridList/GridList'


const ProductListPage = (props) =>
  {
    const [sortValue, setSortValue] = useState("Price");
    const [arrayData, setarrayData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [filter, setFilter] = useState('');

    const subtype ={
      1 : 'snickers',
      2 : 'coats',
      3 : 'pants',
      4 : 'jackets',
    }
  
    const type={
      1 : 'Shoes',
      2 : 'Tops',
      3 : 'Bottoms',
      4 : 'Tops',
      '': 'Products'
    }

    //Fetch api data
    useEffect(() => {
      fetch("https://foxcoding.net/api/getProductsList?nProducts=100")
      .then(response => response.json())
      .then(result => {
      setarrayData(result.data.products)
      setLoading(false)
      })
    }, [])
    

    return (
      <>
      {(!loading) &&
        <>
          <HeadProductList type={type[filter]} />
          <SortBar sortValue={sortValue} setSortValue={setSortValue} type={type[filter]} subtype={subtype[filter]}/>
          <GridList sortValue={sortValue} arrayData={arrayData} filter={filter} setFilter={setFilter} type={type} subtype={subtype} />
        </>
      }
      </>
      
    )
  }

  export default ProductListPage;