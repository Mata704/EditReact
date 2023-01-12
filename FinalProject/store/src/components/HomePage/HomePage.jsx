import Slider from './Slider/Slider'
import AboutSection from './AboutSection/AboutSection'
import JournalSection from './JournalSection/JournalSection'
import TopProducts from './TopProducts/TopProducts'
import LooksSection from './LooksSection/LooksSection'
import PressSection from './PressSection/PressSection'
import TalkingSection from './TalkingSection/TalkingSection'



const HomePage = (props) =>
  {
    return (
      <>
        <Slider/>
        <TopProducts/>
        <AboutSection/>
        <JournalSection/>
        <LooksSection/>
        <PressSection/>
        <TalkingSection/>
      </>
    )
  }

  export default HomePage;