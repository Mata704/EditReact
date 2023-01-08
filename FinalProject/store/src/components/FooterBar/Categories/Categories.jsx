import './styles.css'

const Categories = (props) =>
  {
    return (
        <div className="col-4 col-d-2">
            <p className="margintopnone">Categories</p>
            <ul>
                <li><a href="#" title="About Us">About Us</a></li>
                <li><a href="#" title="Testimonials">Testimonials</a></li>
                <li><a href="#" title="Contact">Contact</a></li>
                <li><a href="#" title="Journal">Journal</a></li>
                <li><a href="#" title="Privacy Policy">Privacy Policy</a></li>
            </ul>
        </div>
    )
  }

  export default Categories;