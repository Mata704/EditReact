import './styles.css'

const PressCard = ({info}) =>
  {
    return (
      
        <div className="col-12 col-t-4">
            <a href={info.href} target="_blank" title="View Look" className="press-card">
                <div className="press-card-image">
                    <img className="imgfit" srcSet={info.urlSet} sizes={info.sizes} src={info.url} />
                </div>
                <p>{info.name}</p>
            </a>
        </div>
                
            
    )}

export default PressCard;