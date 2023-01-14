import './styles.css'
import SizeFilter from './SizeFilter/SizeFilter'
import CategoryFilter from './CategoryFilter/CategoryFilter'

const FilterBar = ({filter,setFilter,allCategories,sizeFilter,setSizeFilter}) =>
  {
    
    return (
    <div id="filters" className="col-12 col-t-4 col-d-3">
        <p className="fancytext">Filters</p>
        <CategoryFilter filter={filter} setFilter={setFilter} allCategories={allCategories} />
        <SizeFilter sizeFilter={sizeFilter} setSizeFilter={setSizeFilter} />
    </div>   
    )
  }

  export default FilterBar;