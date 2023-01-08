import './styles.css'
import LookCard from './LookCard/LookCard'
import look1 from './../../../assets/looks/looks01.jpg'
import look2 from './../../../assets/looks/looks02.jpg'
import look3 from './../../../assets/looks/looks03.jpg'
import look4 from './../../../assets/looks/looks04.jpg'
import look1Medium from './../../../assets/looks/medium/looks01.jpg'
import look2Medium from './../../../assets/looks/medium/looks02.jpg'
import look3Medium from './../../../assets/looks/medium/looks03.jpg'
import look4Medium from './../../../assets/looks/medium/looks04.jpg'
import look1Small from './../../../assets/looks/small/looks01.jpg'
import look2Small from './../../../assets/looks/small/looks02.jpg'
import look3Small from './../../../assets/looks/small/looks03.jpg'
import look4Small from './../../../assets/looks/small/looks04.jpg'



const LooksSection = (props) =>
  {

    const lookInfo= [   {id:1, url:look1, urlSet:`${look1} 720w, ${look1Medium} 360w, ${look1Small} 240w`, name:'LOOK 1', sizes:"(min-width: 1200px) 720px, (min-width: 750px) 640px, 240px"},
                        {id:2, url:look2, urlSet:`${look2} 720w, ${look2Medium} 360w, ${look2Small} 240w`, name:'LOOK 2', sizes:"(min-width: 1200px) 720px, (min-width: 750px) 640px, 240px"},
                        {id:3, url:look3, urlSet:`${look3} 720w, ${look3Medium} 360w, ${look3Small} 240w`, name:'LOOK 3', sizes:"(min-width: 1200px) 720px, (min-width: 750px) 640px, 240px"},
                        {id:4, url:look4, urlSet:`${look4} 720w, ${look4Medium} 360w, ${look4Small} 240w`, name:'LOOK 4', sizes:"(min-width: 1200px) 720px, (min-width: 750px) 640px, 240px"}
                    ]

    const looks = lookInfo.map((look) => {
        return <LookCard info={look} key={look.id} />
    })


    return (
        <section id="looks" className="paddingverticaldouble">
            <h2 className="textcenter marginbottomfull">Looks</h2>
            <div className="gridrow">
                {looks}
            </div>
        </section>
        )
    }
    
export default LooksSection;


