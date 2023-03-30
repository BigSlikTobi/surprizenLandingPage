import './App.css';
import Header from './Header';
import Hero from './Hero';
import HowItWorks from './HowItWorks';
import Action from './Action';
import Contact from './Contact';
import SurprizenBox from './SurprizenBox';
import backgroundImage from './assets/heroNew.jpg';


function App() {
  return (
    <div>
      <Header />
      <div style={{backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center'}}>
        <Hero />
        <HowItWorks />
        <SurprizenBox />
      </div>   
    
      <Action />
      <Contact />
        </div>
  );
}

export default App;
