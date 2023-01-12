import FilterType from './FilterType/FilterType'

const CategoryFilter = (props) =>
  {
    const filterCategories =['Tops','Bottoms','Bags','Shoes']
      
    const allFilterCategories = filterCategories.map((categorie,i) => {
        return <FilterType key={i} filter={props.filter} setFilter={props.setFilter} allCategories={props.allCategories} type={categorie}/>
    })
    
    return(
    <ul className="categories">
        {allFilterCategories}
    </ul>
    )
  }


  export default CategoryFilter;