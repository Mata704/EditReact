//import { useParams } from "react-router-dom";
import './styles.css'
import FilterBar from './FilterBar/FilterBar'
import ProductCardFilter from './ProductCardFilter/ProductCardFilter'
import { useState } from 'react'

const GridList = ({sortValue,arrayData,filter,setFilter,type,subtype}) =>
  {
    const [sizeFilter, setSizeFilter] = useState('');
    const [numberProducts, setNumberProducts] = useState(6);

    const sortType = (val,type) => {
      //sort data by type
      let arrayAux
      switch(type){
        case 'Popularity':
          arrayAux=[...val].sort((a, b) => b.score - a.score);
          break;
        case "Price":
          arrayAux=[...val].sort((a, b) => a.price - b.price);
          break;
        case 'Name':
          arrayAux=[...val].sort((a, b) => a.name > b.name ? 1 : -1);
          break;
        default:
          arrayAux=[...val]
      } 
      return arrayAux
    }

    const getAllCategorys = (data,subtype,type) =>{

      //get all {categories, subcategories} existing in the api
      let AuxCategorys =[]
      let AuxNameCategorys =[]
      
      for(let i=0;i<data.length;i++){
        AuxCategorys=AuxCategorys.concat(data[i].category)
      }

      AuxCategorys = [...new Set(AuxCategorys)]
      AuxCategorys=Array.from(AuxCategorys)
      AuxCategorys=AuxCategorys.sort((a, b) => a - b)

      for(let i=0;i<AuxCategorys.length;i++){ 
        let aux={id:AuxCategorys[i], subType:subtype[AuxCategorys[i]], type:type[AuxCategorys[i]]}
        AuxNameCategorys.push(aux)
      }
      return AuxNameCategorys    
    }

    const fiterType =(types,actualtype) =>{
      //filters logic
      let aux=false
      for(let i=0;i<types.length;i++){
        if (types[i]===actualtype || actualtype===''){
          aux=true
        }
      }
      return aux
    }

    const getFilterData = (data,sortValue) =>{
      return sortType(data,sortValue).filter((val) => fiterType(Object.keys(val.sizes),sizeFilter)).filter((val) => fiterType(val.category,filter)).slice(0, numberProducts)
    }
    
    const handleNumberProducts = () => {
      setNumberProducts(numberProducts+3)
    }
    
    const productList = getFilterData(arrayData,sortValue).map((product) => {
      return <ProductCardFilter info={product} key={product.id}/>
      })

    return (
    <div className="gridrow">
        <FilterBar filter={filter} setFilter={setFilter} allCategories={getAllCategorys(arrayData,subtype,type)} sizeFilter={sizeFilter} setSizeFilter={setSizeFilter}/>
        <div id="mainproductlist" className="product-list col-12 col-t-8 col-d-9 gridrowfull">
          {productList}
          {(numberProducts<=getFilterData(arrayData,sortValue).length) &&  
          <div className="central-link-light marginbottomdouble">
            <a onClick={handleNumberProducts} title="Load More"><i className="icn-reload"></i>Load More</a>
          </div>
          }
        </div>
    </div>
      
    )
  }

  export default GridList;