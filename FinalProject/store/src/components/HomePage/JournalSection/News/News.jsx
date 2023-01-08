import './styles.css'

const News = (props) =>
  {

    return (
        <a href="#" title="View Journal" className={props.info.text && props.info.srcset && props.info.url ? "journal-card":"journal-card journal-card-small"}>
            <p className="fancytext">{props.info.type}</p>
            
            <h3>{props.info.title}</h3>
            {props.info.text ? <p>{props.info.text}</p> : <></>}
            {props.info.srcset && props.info.url ? <div className="journal-card-image">
                                    <img className="imgfit" srcSet={props.info.srcset} sizes="(min-width: 750px) 720px, 360px" src={props.info.url} />
                                </div> : <></>}
        </a>
    )
  }

  export default News;