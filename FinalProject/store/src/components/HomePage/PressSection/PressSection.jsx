import './styles.css'
import PressCard from './PressCard/PressCard'
import press1 from './../../../assets/press/press01.jpg'
import press2 from './../../../assets/press/press02.jpg'
import press3 from './../../../assets/press/press03.jpg'
import press1Medium from './../../../assets/press/medium/press01.jpg'
import press2Medium from './../../../assets/press/medium/press02.jpg'
import press3Medium from './../../../assets/press/medium/press03.jpg'



const PressSection = (props) =>
  {

    const pressInfo= [  {id:1, url:press1, href:"https://hypebeast.com/2020/5/yohji-yamamoto-replica-spring-summer-1996-capsule-collection-release-info", urlSet:`${press1} 720w, ${press1Medium} 450w`, name:'Replica Collection', sizes:"(min-width: 1200px) 720px, 450px"},
                        {id:2, url:press2, href:"https://www.thailandtatler.com/style/yohji-yamamoto-designs-a-new-watch-from-hublot", urlSet:`${press2} 720w, ${press2Medium} 450w`, name:'Hublot Collaboration', sizes:"(min-width: 1200px) 720px, 450px"},
                        {id:3, url:press3, href:"https://flaunt.com/content/dr-martens-yohji-yamamoto", urlSet:`${press3} 720w, ${press3Medium} 450w`, name:'Dr Martens vs Yamamoto', sizes:"(min-width: 1200px) 720px, 450px"},
                     ]

    const press = pressInfo.map((press) => {
    return <PressCard info={press} key={press.id} />
    })




    return (
        <section id="press" className="paddingverticaldouble bg-graylight">
            <h2 className="textcenter marginbottomfull">Press</h2>
            <div className="gridrow">
                {press}
            </div>
            <div className="central-link">
                <a href="#" title="More News">Show More</a>
            </div>
        </section>
    )}

export default PressSection;