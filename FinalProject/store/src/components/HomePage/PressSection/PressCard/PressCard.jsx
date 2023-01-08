import './styles.css'

const PressCard = (props) =>
  {
    return (
      
        <div className="col-12 col-t-4">
            <a href={props.info.href} target="_blank" title="View Look" className="press-card">
                <div className="press-card-image">
                    <img className="imgfit" srcSet={props.info.urlSet} sizes={props.info.sizes} src={props.info.url} />
                </div>
                <p>{props.info.name}</p>
            </a>
        </div>
                
            
    )}

export default PressCard;