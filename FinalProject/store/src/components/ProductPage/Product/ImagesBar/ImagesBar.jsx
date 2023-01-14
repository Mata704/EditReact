
const ImagesBar = ({images}) =>
  {

    const imageList = images.map((product) => {
        return (
            <a href="#" title={product.name} className="open" key={product.id}>
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