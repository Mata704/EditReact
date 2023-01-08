const MultiTextBlock = (props) =>
  {
    
    const blocks = props.info.map((block) => {
      return (<div className={`col-12 col-t-10 col-d-8 offset-t-1 offset-d-2 ${block.extraClass}`} key={block.id}>
                {block.text}
              </div>
  )
  })
    
    return (
    <div className="gridrow">
      {blocks}
    </div>
    )
    }
export default MultiTextBlock;