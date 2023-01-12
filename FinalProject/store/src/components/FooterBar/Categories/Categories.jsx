
const Categories = (props) =>
  {
    const options = ["About Us","Testimonials","Contact","Journal","Privacy Policy"]
    
    const optionsList = options.map((option) => {
      return (
        <li key={option}><a href="#" title={option}>{option}</a></li>
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