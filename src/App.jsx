import Hero from "./components/Hero"
import LogoSection from "./components/LogoSection"
import Navbar from "./components/Navbar"
import Steps from "./components/Steps";
import BentoGrid from "./components/BentoGrid";
import CustomerStories from "./components/CustomerStories";
import DownloadSec from "./components/DownloadSec";
import Plans from "./components/Plans";
import FAQSec from "./components/FAQSec";
import Footer from "./components/Footer";

const App = ()=> {

  return (
    <>
    <Navbar />
    <Hero />
    <LogoSection />
    <Steps />
    <BentoGrid />
    <CustomerStories />
    <DownloadSec />
    <Plans />
    <FAQSec />
    <Footer />
    </>
  )
}

export default App
