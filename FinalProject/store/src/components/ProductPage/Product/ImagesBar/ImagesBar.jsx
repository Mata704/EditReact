import './styles.css'




const ImagesBar = (props) =>
  {
    
    //Not on API so...
    let arrayAux=[]
    for(let i=0;i<props.nImages;i++)
    {
        arrayAux.push({name:props.name, url:props.image }) 
    }


    let imageIncrementor=0
    const imageList = arrayAux.map((product) => {
        imageIncrementor=imageIncrementor+1;
        return (
            <a href="#" title={product.name} className="open" key={imageIncrementor}>
                <img className="imgfit" src={product.url} alt={product.name} />
            </a>
        )
        })

    return (
    <div id="thumbs" className="col-3 col-t-1">
        {imageList}
    </div>  
    )
  }

  export default ImagesBar;