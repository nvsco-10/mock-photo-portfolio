import { Routes, Route, useLocation } from "react-router-dom";
import About from '../pages/About'
import Portfolio from "../pages/Portfolio";
import Contact from '../pages/Contact'
import { AnimatePresence } from "framer-motion";

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence exitBeforeEnter>
        <Routes location={location} key={location.pathname}>
            <Route path='/' element={<Portfolio />} />
            <Route path='/portfolio' element={<Portfolio />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
        </Routes>
    </AnimatePresence>
    )
}

export default AnimatedRoutes