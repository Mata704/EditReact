import FilterType from './FilterType/FilterType'

const CategoryFilter = ({filter,setFilter,allCategories}) =>
  {
    const filterCategories =[{id:1, name:'Tops'},{id:2, name:'Bottoms'},{id:3, name:'Bags'},{id:4, name:'Shoes'}]
      
    const allFilterCategories = filterCategories.map((categorie) => {
        return <FilterType key={categorie.id} filter={filter} setFilter={setFilter} allCategories={allCategories} type={categorie.name}/>
    })
    
    return(
    <ul className="categories">
        {allFilterCategories}
    </ul>
    )
  }


  export default CategoryFilter;