import './styles.css'

const Partners = (props) =>
  {
    const options = ["Support","Shipping & Returns","Size Guide","Product Care"]
    
    const optionsList = options.map((option) => {
      return (
        <li key={option}><a href="#" title={option}>{option}</a></li>
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