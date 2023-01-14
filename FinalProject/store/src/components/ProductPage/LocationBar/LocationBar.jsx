import './styles.css'
import { Link } from 'react-router-dom';

const LocationBar = ({name,category}) =>
  {
    const type ={
      1 : 'snickers',
      2 : 'coats',
      3 : 'pants',
      4 : 'jackets'
    }

    const getTypesString = (entryArray,type) =>{
      let auxArray=[]
      for(let i=0;i<entryArray.length;i++){
        auxArray.push(type[entryArray[i]])
      }
      return(auxArray.join('/'))
    }

    return (
        <div className="breadcrumb">
          <div className="gridrow">
              <div className="col-12">
                  <Link to="/ProductList/" title="Tops">{getTypesString(category,type)}</Link> <i className="icn-chevron-right"></i>
                  {name}
              </div>
          </div>
        </div>
    )
  }

  export default LocationBar;