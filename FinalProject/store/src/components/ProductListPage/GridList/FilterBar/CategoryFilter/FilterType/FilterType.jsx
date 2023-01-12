import './styles.css'

const FilterType = (props) =>
  {
 
    function changeFilter(value)
    {
        if(props.filter=='' || props.filter!=value)
        {
            props.setFilter(value)
            
        } else if(props.filter==value)
        {
            props.setFilter('')  
        }
        
    }

    function closeFilter(id)
    {
        document.getElementById(id).classList.remove('open')   
    }

    function openFilter(id)
    {   
        document.getElementById(id).classList.add('open')    
    }

    const allCategories = props.allCategories.filter(category => category.type==props.type).map((category) => {
        
        return (<li key={category.subType} ><a title={category.subType} value={category.id} onClick={() => changeFilter(category.id)}><i className="icn-chevron-right"></i> {category.subType}</a></li>)
    })


    return(
    <li id={`filter${props.type}`}>
        <a title={props.type} >
            {props.type}
            <i className="icn-chevron-down" onClick={() =>{ openFilter(`filter${props.type}`)}}></i>
            <i className="icn-chevron-up" onClick={() => { closeFilter(`filter${props.type}`)}}></i>
        </a>
        <ul>
            {allCategories}
        </ul>
    </li>
    )
  }


  export default FilterType;