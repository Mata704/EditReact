import './styles.css'

const LookCard = (props) =>
  {
    return (
        <div className="col-6 col-t-3">
            <a href="#" title="View Look" className="look-card">
                <div className="look-card-image">
                    <img className="imgfit" srcSet={props.info.urlSet} sizes={props.info.size} src={props.info.url} />
                </div>
                <p className="fancytext">{props.info.name}</p>
            </a>
        </div>
    )}

export default LookCard;
