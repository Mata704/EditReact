import './styles.css'

const FilterType = ({filter,setFilter,allCategories,type}) =>
  {
 
    const changeFilter = (value) =>{
        if(filter=='' || filter!=value){
            setFilter(value)   
        } else if(filter==value){
            setFilter('')  
        }    
    }

    const closeFilter = (id) =>{
        document.getElementById(id).classList.remove('open')   
    }

    const openFilter = (id) =>{   
        document.getElementById(id).classList.add('open')    
    }

    const allSubCategories = allCategories.filter(category => category.type==type).map((category) => {   
        return (<li key={category.id} ><a title={category.subType} value={category.id} onClick={() => changeFilter(category.id)}><i className="icn-chevron-right"></i>{category.subType}</a></li>)
    })


    return(
    <li id={`filter${type}`}>
        <a title={type} >
            {type}
            <i className="icn-chevron-down" onClick={() =>{ openFilter(`filter${type}`)}}></i>
            <i className="icn-chevron-up" onClick={() => { closeFilter(`filter${type}`)}}></i>
        </a>
        <ul>
            {allSubCategories}
        </ul>
    </li>
    )
  }

  export default FilterType;