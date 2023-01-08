import './styles.css'
import FilterType from './FilterType/FilterType'

const FilterBar = (props) =>
  {

    function changeSizeFilter(value,filter,setFilter)
    {
        if(filter=='' || filter!=value)
        {
            setFilter(value)

        } else if(filter==value)
        {
            setFilter('')  
        }
        
    }

    return (
    <div id="filters" className="col-12 col-t-4 col-d-3">
        <p className="fancytext">Filters</p>
        <ul className="categories">
            <FilterType filter={props.filter} setFilter={props.setFilter} allCategories={props.allCategories} type='Tops' />
            <FilterType filter={props.filter} setFilter={props.setFilter} allCategories={props.allCategories} type='Bottoms' />
            <FilterType filter={props.filter} setFilter={props.setFilter} allCategories={props.allCategories} type='Bags' />
            <FilterType filter={props.filter} setFilter={props.setFilter} allCategories={props.allCategories} type='Shoes' />
        </ul>
        <div className="sizes">
            <p className="fancytext">- Sizes</p>
            <div className="sizebtns marginverticalfourth">
                <button type="button" onClick={() => changeSizeFilter(1,props.sizeFilter,props.setSizeFilter)}>1</button>
                <button type="button" onClick={() => changeSizeFilter(2,props.sizeFilter,props.setSizeFilter)}>2</button>
                <button type="button" onClick={() => changeSizeFilter(3,props.sizeFilter,props.setSizeFilter)}>3</button>
                <button type="button" onClick={() => changeSizeFilter(4,props.sizeFilter,props.setSizeFilter)}>4</button>
            </div>
            <a href="#" title="View Size Guide" className="fancytext">See our sizing guide</a>
        </div>
    </div>
      
    )
  }

  export default FilterBar;