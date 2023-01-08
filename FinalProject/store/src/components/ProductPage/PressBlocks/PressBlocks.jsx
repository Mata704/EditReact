import press1 from './../../../assets/press/press01.jpg'
import press2 from './../../../assets/press/press02.jpg'
import press3 from './../../../assets/press/press03.jpg'
import press1Medium from './../../../assets/press/medium/press01.jpg'
import press2Medium from './../../../assets/press/medium/press02.jpg'
import press3Medium from './../../../assets/press/medium/press03.jpg'



const PressBlocks = (props) =>
{

    const pressInfo=[   
                    {id:1, name:'Replica Collection',srcSet:`${press1} 720w, ${press1Medium} 450w`, src:{press1}},
                    {id:2, name:'Hublot Collaboration',srcSet:`${press2} 720w, ${press2Medium} 450w`, src:{press2}},
                    {id:3, name:'Dr Martens vs Yamamoto',srcSet:`${press3} 720w, ${press3Medium} 450w`, src:{press3}}
                    ]


    const blocks = pressInfo.map((press) => {
    return (<div className="col-12 col-t-4" key={press.id}>
                <img className="imgfit" srcSet={press.srcSet} sizes="(min-width: 1200px) 720px, 450px" src={press.src} />
                <p className="textcenter">{press.name}</p>
            </div>
            )
    })
    

    return (
        <div className="gridrow marginverticalfull">
            {blocks}
        </div>
    )
}

export default PressBlocks;