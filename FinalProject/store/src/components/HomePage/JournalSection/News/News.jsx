import './styles.css'

const News = ({info}) =>
  {

    return (
        <a href="#" title="View Journal" className={info.text && info.srcset && info.url ? "journal-card":"journal-card journal-card-small"}>
            <p className="fancytext">{info.type}</p>
            
            <h3>{info.title}</h3>
            {info.text ? <p>{info.text}</p> : <></>}
            {info.srcset && info.url ? <div className="journal-card-image">
                                    <img className="imgfit" srcSet={info.srcset} sizes="(min-width: 750px) 720px, 360px" src={info.url} />
                                </div> : <></>}
        </a>
    )
  }

  export default News;