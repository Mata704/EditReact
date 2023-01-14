import './styles.css'
import talking1 from './../../../assets/talking/talking01.png'
import talking2 from './../../../assets/talking/talking02.png'
import talking3 from './../../../assets/talking/talking03.png'
import talking4 from './../../../assets/talking/talking04.png'
import talking5 from './../../../assets/talking/talking05.png'
import talking6 from './../../../assets/talking/talking06.png'
import talking7 from './../../../assets/talking/talking07.png'
import talking8 from './../../../assets/talking/talking08.png'

const TalkingSection = () =>
  {
    const talkingInfo= [{id:1, url:talking1, classInfo:"col-4 col-t-2 col-d-1 offset-1 offset-t-1 offset-d-2 paddingbottomfull"},
                        {id:2, url:talking2, classInfo:"col-4 col-t-2 col-d-1 offset-2 offset-t-2 offset-d paddingbottomfull" },
                        {id:3, url:talking3, classInfo:"col-4 col-t-2 col-d-1 offset-1 offset-t-2 offset-d paddingbottomfull" },
                        {id:4, url:talking4, classInfo:"col-4 col-t-2 col-d-1 offset-2 offset-t-1 offset-d paddingbottomfull" },
                        {id:5, url:talking5, classInfo:"col-4 col-t-2 col-d-1 offset-1 offset-t-2 offset-d paddingbottomfull" },
                        {id:6, url:talking6, classInfo:"col-4 col-t-2 col-d-1 offset-2 offset-t-2 offset-d paddingbottomfull" },
                        {id:7, url:talking7, classInfo:"col-4 col-t-2 col-d-1 offset-1 offset-t-2 offset-d paddingbottomfull" },
                        {id:8, url:talking8, classInfo:"col-4 col-t-2 col-d-1 offset-2 offset-t-4 offset-d paddingbottomfull" },
                      ]

   const talking = talkingInfo.map((info) => {
    return (
        <div className={info.classInfo} key={info.id}>
            <img className="imgfit" src={info.url} alt={`talking ${info.id}`} />
        </div>
    )
    })


    return ( 
        <section id="talking" className="paddingverticaldouble">
                <h2 className="textcenter marginbottomfull">Talking about us</h2>
                <div className="gridrow">
                    {talking}
                </div>
            </section>      
    )}

export default TalkingSection;