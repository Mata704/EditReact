import './styles.css'

const ProductList = ({sortValue, setSortValue, type, subtype}) =>
  {
    const sortOptions = [{id:1, name:"Price"},{id:2, name:"Popularity"},{id:3, name:"Name"},{id:4, name:"Season"}]

    const handleMaxPriceChange = (event) => {
        setSortValue(event.target.value);
    };
    
    const optionsList = sortOptions.map((option) => {
        return (
            <option key={option.id} value={option.name}>{option.name}</option>
        )
    })  

    return (
    <div id="sortbar">
        <div className="gridrow">
            <div className="col-4">{type}{subtype?` > ${subtype}`:''}</div>
            <div className="col-8 textright">Sort by
                <select value={sortValue} onChange={handleMaxPriceChange}>
                    {optionsList}
                </select>
            </div>
        </div>
    </div>  
    )
  }

  export default ProductList;