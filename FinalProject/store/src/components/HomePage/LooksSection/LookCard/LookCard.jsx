import './styles.css'

const LookCard = ({info}) =>
  {
    return (
        <div className="col-6 col-t-3">
            <a href="#" title="View Look" className="look-card">
                <div className="look-card-image">
                    <img className="imgfit" srcSet={info.urlSet} sizes={info.size} src={info.url} />
                </div>
                <p className="fancytext">{info.name}</p>
            </a>
        </div>
    )}

export default LookCard;
