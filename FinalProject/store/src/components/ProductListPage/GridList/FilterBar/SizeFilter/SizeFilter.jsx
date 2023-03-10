import './styles.css'

const SizeFilter = ({sizeFilter, setSizeFilter}) =>
  {
    const sizes =[1,2,3,4]
 
    const handleSizeChange = (event) => { 
        if(sizeFilter=='' || sizeFilter!=event.target.value){
            setSizeFilter(event.target.value)
        } else if(sizeFilter==event.target.value){
            setSizeFilter('')  
        }    
    };

    const allSizes = sizes.map((size) => {
        return (<button type="button" value={size} key={size} onClick={handleSizeChange}>{size}</button>)
    })

    return(
    <div className="sizes">
        <p className="fancytext">- Sizes</p>
        <div className="sizebtns marginverticalfourth">
            {allSizes}
        </div>
        <a href="#" title="View Size Guide" className="fancytext">See our sizing guide</a>
    </div>
    )
  }


  export default SizeFilter;