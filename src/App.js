import { BrowserRouter as Router } from "react-router-dom";
import Nav from "./components/Nav";
import PortfolioProvider from './utils/PortfolioContext'
import Wrapper from './assets/wrappers/App'
import AnimatedRoutes from "./components/AnimatedRoutes";


function App() {
  
  return (
    <PortfolioProvider>
      <Router>
        <Wrapper>
          <Nav />
          <AnimatedRoutes />
        </Wrapper>
      </Router> 
    </PortfolioProvider>
  );
}

export default App;
