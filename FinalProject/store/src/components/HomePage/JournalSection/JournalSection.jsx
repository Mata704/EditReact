import './styles.css'
import News from './News/News'
import journal1 from './../../../assets/journal/journal01.jpg'
import journal2 from './../../../assets/journal/journal02.jpg'
import journal3 from './../../../assets/journal/journal03.jpg'
import journal1Medium from './../../../assets/journal/medium/journal01.jpg'
import journal2Medium from './../../../assets/journal/medium/journal02.jpg'
import journal3Medium from './../../../assets/journal/medium/journal03.jpg'

const JornalSection = (props) =>
  {

    const info =[
        {
            type: 'Awards - January 2006',
            title:'Royal Designer for Industry',
            text:'The title "Royal Designer for Industry" (RDI) is awarded annually by the RSA to designers of all disciplines who have achieved "sustained design excellence, work of aesthetic value and significant benefit to society."',
            url: journal1,
            srcset: `${journal1} 720w, ${journal1Medium} 360w`
        },
        {
            type: 'Awards - January 2011',
            title:'Commander of the Order of Arts and Letters',
            url: journal2,
            srcset: `${journal2} 720w, ${journal2Medium} 360w`
        },
        {
            type: 'Design - January 2020',
            title:'Yohji',
            text:'Yohji Yamamoto is widely regarded as ranking among the greatest fashion designers of the late twentieth and early twenty-first centuries.'
        },
        {
            type: 'Design - January 2014',
            title:'Real Madrid Uniform',
            text:'Designs the third jersey (uniform) for Spains professional soccer team, "Real Madrid"'
        },
        {
            type: 'Collections - January 2006',
            title:'New Collection',
            url: journal3,
            srcset: `${journal3} 720w, ${journal3Medium} 360w`
        }
    ]


    return (
    <section id="journal" className="paddingverticaldouble">
        <h2 className="textcenter marginbottomfull">Journal</h2>
        
        <div className="gridrow">
            <div className="col-12 col-d-6">
                <News info={info[0]}/>
            </div>
            <div className="col-6 col-d-3">
                <News info={info[1]}/>
                <News info={info[2]}/>
            </div>
            <div className="col-6 col-d-3">
                <News info={info[3]}/>
                <News info={info[4]}/>
            </div>
        </div>
        
        <div className="central-link">
            <a href="#" title="See the Journal">See the Journal</a>
        </div>
    </section>
    )
  }

  export default JornalSection;