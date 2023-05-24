
import Banner from './components/Banner';
import Header from './components/Header';
import SProducts from './components/SProducts';
import Savailable from './components/Savailable';
import SectionHeading from './components/SectionHeading';
import Sproviders from './components/Sproviders';
import Menu from './components/Menu';
import Uservices from './components/Uservices';

function App() {
  return (
    <>
    <Header/>
    <Banner/>
    <Uservices/>
    <SectionHeading title="Popular Service Products"/>
    <SProducts/>
    <SectionHeading title="All Popular Service Providers"/>
    <Sproviders/>
    <SectionHeading title="Services We Provide"/>
    <Savailable/>

    <Menu/>

    </>
  );
}

export default App;
