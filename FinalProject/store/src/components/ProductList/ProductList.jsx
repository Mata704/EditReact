import './styles.css'
import { useState, useEffect } from 'react'
import HeadProductList from './HeadProductList/HeadProductList'
import SortBar from './SortBar/SortBar'
import GridList from './GridList/GridList'


const ProductList = (props) =>
  {
    
    const [sortValue, setSortValue] = useState("Price");
    
    return (
      <>
        <HeadProductList/>
        <SortBar sortValue={sortValue} setSortValue={setSortValue}/>
        <GridList sortValue={sortValue}/>
      </>
      
    )
  }

  export default ProductList;