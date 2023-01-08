//import { useParams } from "react-router-dom";
import './styles.css'

const ProductList = (props) =>
  {
    const {sortValue, setSortValue} = props;
    return (
    <div id="sortbar">
        <div className="gridrow">
            <div className="col-4">Tops</div>
            <div className="col-8 textright">Sort by
                <select value={sortValue} onChange={(e) => setSortValue(e.target.value)}>
                    <option value="Price">Price</option>
                    <option value="Popularity">Popularity</option>
                    <option value="Name">Name</option>
                    <option value="Season">Season</option>
                </select>
            </div>
        </div>
    </div>
      
    )
  }

  export default ProductList;