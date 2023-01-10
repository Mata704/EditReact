import './styles.css'
import SizeFilter from './SizeFilter/SizeFilter'
import CategoryFilter from './CategoryFilter/CategoryFilter'

const FilterBar = (props) =>
  {
    
    return (
    <div id="filters" className="col-12 col-t-4 col-d-3">
        <p className="fancytext">Filters</p>
        <CategoryFilter filter={props.filter} setFilter={props.setFilter} allCategories={props.allCategories} />
        <SizeFilter sizeFilter={props.sizeFilter} setSizeFilter={props.setSizeFilter} />
    </div>   
    )
  }

  export default FilterBar;