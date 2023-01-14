import './styles.css'

const TextInfo = ({type,features}) =>
    {
        const closeFilter = (id) =>{
            document.getElementById(id).classList.remove('open')   
        }

        const openFilter = (id) =>{   
            document.getElementById(id).classList.add('open')    
        }

        return(
            <li id={`TextInfo_${type}`}>
                <a title="Tops">
                    {type} 
                    <span className="plus" onClick={() =>{ openFilter(`TextInfo_${type}`)} }>+</span>
                    <span className="minus" onClick={() => { closeFilter(`TextInfo_${type}`)} }>-</span>
                </a>
                <div className="graymedium">
                    <p>{features}</p>
                </div>
            </li>
        )
    }

export default TextInfo;   