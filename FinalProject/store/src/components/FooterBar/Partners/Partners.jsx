const Partners = () =>
  {
    //All options
    const options = [{id:1, title:"Support"},{id:2, title:"Shipping & Returns"},{id:3, title:"Size Guide"},{id:4, title:"Product Care"}]
    
    //Map all options
    const optionsList = options.map((option) => {
      return (
        <li key={option.id}><a href="#" title={option.title}>{option.title}</a></li>
      )
    })  

    return (
        <div className="col-4 col-d-2">
            <p className="margintopnone">Partners</p>
            <ul>
                {optionsList}
            </ul>
        </div>
    )
  }

  export default Partners;