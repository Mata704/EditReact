import Categories from './Categories/Categories'
import Partners from './Partners/Partners'
import Contacts from './Contacts/Contacts'
import Newsletter from './Newsletter/Newsletter'


const FooterBar = () =>
  {
    return (
        <div className="gridrow">
            <Categories/>
            <Partners/>
            <Contacts/>
            <Newsletter/>
        </div>
    )
  }

  export default FooterBar;