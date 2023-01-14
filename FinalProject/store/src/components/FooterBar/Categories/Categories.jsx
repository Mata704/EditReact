
const Categories = () =>
  {
    //Info
    const options = [{id:1, title:"About Us"},{id:2, title:"Testimonials"},{id:3, title:"Contact"},{id:4, title:"Journal"},{id:5, title:"Privacy Policy"}]
    
    //Map all options
    const optionsList = options.map((option) => {
      return (
        <li key={option.id}><a href="#" title={option.title}>{option.title}</a></li>
      )
  })  

    return (
        <div className="col-4 col-d-2">
            <p className="margintopnone">Categories</p>
            <ul>
              {optionsList}
            </ul>
        </div>
    )
  }

  export default Categories;