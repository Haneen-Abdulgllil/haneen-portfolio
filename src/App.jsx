
import { BrowserRouter } from "react-router-dom";

import { About, Contact, Education, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas , Footer} from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0'>
          <div className='relative z-10'>
            <Navbar />
            <Hero />
            <StarsCanvas />
          </div>
        {/* </div> */}
        <div className='relative z-0'>
          <About />
          <StarsCanvas />
        </div>
        <div className='relative z-0'>
          <Education />
          <StarsCanvas />
        </div>
        {/* <div className='relative z-0'>
          <StarsCanvas />
          <Tech /> 
        </div> */}
{/*         <div className='relative z-0'>
          <Works />
          <StarsCanvas />
        </div> */}
        <div className='relative z-0'>
          <Feedbacks />
          <StarsCanvas />
        </div>
        
        <div className='relative z-0'>
          <Contact />
          <StarsCanvas />
        </div>

        <div className='relative z-0'>
          <Footer />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;

