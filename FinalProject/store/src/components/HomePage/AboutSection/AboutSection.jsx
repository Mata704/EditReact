import './styles.css'
import aboutImage from './../../../assets/journal/about.jpg'
import aboutImageMedium from './../../../assets/journal/medium/about.jpg'
import aboutImageSmall from './../../../assets/journal/small/about.jpg'




const AboutSection = (props) =>
  {
    return (
    <section id="about" className="paddingverticaldouble">
        <h2 className="textcenter marginbottomfull">About</h2>
        <div className="gridrow">
            <div className="col-12 col-t-6">
                <img className="imgfit" srcSet={`${aboutImage} 720w, ${aboutImageMedium} 410w, ${aboutImageSmall} 450w`} sizes="(min-width: 1200px) 720px, (min-width: 750px) 410px, 450px" src={aboutImage} />
            </div>
            <div className="col-12 col-t-6 about">
                <p className="margintopnone">The partnership between renowned Japanese fashion designer, Yohji Yamamoto and authentic sports brand, Adidas, has revolutionized the industry. Adidas represents sport, Yohji Yamamoto represents design, and both symbolize true craftsmanship. Together they have developed the future in sportswear.</p>
                <p>
                    <span className="fancytext">Adidas and Yamamoto together since</span>
                    October 2002
                </p>
                <p className="marginbottomnone">
                    <span className="fancytext">The symbols</span>
                    The "Y" stands for Yohji Yamamoto<br />
                    The "3" represents the signature Adidas three stripe logo<br />
                    the "-" signifies the link between the two
                </p>
            </div>
        </div>
    </section>
    )
  }

  export default AboutSection;