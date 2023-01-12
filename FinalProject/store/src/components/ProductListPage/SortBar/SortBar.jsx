//import { useParams } from "react-router-dom";
import './styles.css'

const ProductList = (props) =>
  {
    const {sortValue, setSortValue, type, subtype} = props;
    const sortOptions = ["Price","Popularity","Name","Season"]

    
    const handleMaxPriceChange = (event) => {
        setSortValue(event.target.value);
    };
    
    const optionsList = sortOptions.map((option) => {
        return (
            <option key={option} value={option}>{option}</option>
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