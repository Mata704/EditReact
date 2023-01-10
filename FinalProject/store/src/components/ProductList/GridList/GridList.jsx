//import { useParams } from "react-router-dom";
import './styles.css'
import FilterBar from './FilterBar/FilterBar'
import ProductCardFilter from './ProductCardFilter/ProductCardFilter'
import { useState, useEffect } from 'react'

const GridList = (props) =>
  {
 
   const {sortValue} = props;
   const [arrayData, setarrayData] = useState([]);
   const [loading, setLoading] = useState(true);
   const [filter, setFilter] = useState('');
   const [sizeFilter, setSizeFilter] = useState('');
   const [numberProducts, setNumberProducts] = useState(6);

    //Fetch api data
    useEffect(() => {
        fetch("https://foxcoding.net/api/getProductsList")
        .then(response => response.json())
        .then(result => {
        setarrayData(result.data.products)
        setLoading(false)
        })
      }, [])

    //dict for filters
    const subtype ={
        1 : 'snickers',
        2 : 'coats',
        3 : 'pants',
        4 : 'jackets'
    }
    
    const type={
        1 : 'Shoes',
        2 : 'Tops',
        3 : 'Bottoms',
        4 : 'Tops'
      }
 
    function sortType(val,type)
    {
      //sort data by type
        let arrayAux
        switch(type)
        {
          case 'Popularity':
            arrayAux=[...val].sort((a, b) => b.score - a.score);
            break;
          case "Price":
            arrayAux=[...val].sort((a, b) => a.price - b.price);
            break;
          case 'Name':
            arrayAux=[...val].sort((a, b) => a.name > b.name ? 1 : -1);
            break;
          case 'Season':
            arrayAux=[...val]
            break;
          default:
            arrayAux=[...val]
        } 
        return arrayAux
    }

    function getAllCategorys(data,subtype,type)
    {
      //get all {categories, subcategories} existing in the api
      let AuxCategorys =[]
      let AuxNameCategorys =[]
      for(let i=0;i<data.length;i++)
      {
        AuxCategorys=AuxCategorys.concat(data[i].category)
      }

      AuxCategorys = [...new Set(AuxCategorys)]
      AuxCategorys=Array.from(AuxCategorys)
      AuxCategorys=AuxCategorys.sort((a, b) => a - b)

      for(let i=0;i<AuxCategorys.length;i++)
      { 
        let aux={id:AuxCategorys[i], subType:subtype[AuxCategorys[i]], type:type[AuxCategorys[i]]}
        AuxNameCategorys.push(aux)
      }
      return AuxNameCategorys    
    }

    const fiterType =(types,actualtype) =>
    {
      //filters logic
      let aux=false
      for(let i=0;i<types.length;i++)
      {
        if (types[i]==actualtype || actualtype=='')
        {
          aux=true
        }
      }
      return aux
    }

    //filter data to map
    let valaux=sortType(arrayData,sortValue)
    let productsFilter=valaux.filter((val) => fiterType(Object.keys(val.sizes),sizeFilter)).filter((val) => fiterType(val.category,filter)).slice(0, numberProducts)
    let numberProductsLenght=productsFilter.length
    const productList = productsFilter.map((product) => {
      return <ProductCardFilter info={product} key={product.id}/>
      })
    
    //Get all categories/subcategories existing in the data
    let allCategories= getAllCategorys(arrayData,subtype,type)

    return (
    <div className="gridrow">
      {(!loading) && 
      <>
        <FilterBar filter={filter} setFilter={setFilter} allCategories={allCategories} sizeFilter={sizeFilter} setSizeFilter={setSizeFilter} setNumberProducts={setNumberProducts}/>
        <div id="mainproductlist" className="product-list col-12 col-t-8 col-d-9 gridrowfull">
          {productList}
          {(numberProducts<=numberProductsLenght) &&  
          <div className="central-link-light marginbottomdouble">
            <a onClick={() => setNumberProducts(numberProducts+3) } title="Load More"><i className="icn-reload"></i>Load More</a>
          </div>
          }
        </div>
      </>
      }
    </div>
      
    )
  }

  export default GridList;