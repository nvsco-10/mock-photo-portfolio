import Wrapper from '../assets/wrappers/About'
import portrait from '../assets/img/pexels-simon-robben-614810.jpg'
import { motion } from "framer-motion"

const About = () => {
  
  return (
    <Wrapper>
      <motion.div 
        initial={{opacity: 0}} 
        animate={{opacity: 1}} 
        exit={{opacity: 0 }}
      >
        <div className='content'>
            <div className='content-box text'>
              <h3>About</h3>
              <p>
                I'm baby neutra subway tile jean shorts ennui irony umami chia gochujang schlitz taiyaki poke vice offal fam. Portland occupy messenger bag normcore, health goth banh mi cloud bread waistcoat chia tbh tonx. Raw denim chambray taiyaki chillwave DIY VHS. Kinfolk synth plaid shoreditch tumblr, health goth listicle squid iceland shaman.
              </p>
              <p>
                Man bun normcore food truck crucifix craft beer. Retro lo-fi next level selvage gentrify keytar man bun man braid leggings. Artisan viral gastropub, deep v 90's roof party gochujang snackwave tofu. Tumblr bicycle rights semiotics selvage farm-to-table listicle truffaut etsy +1 meh neutra.
              </p>
              <div>
                <h4>Notable Clients:</h4>
                <ul>
                  <li>Toyota</li>
                  <li>Tesla</li>
                  <li>Whole Foods</li>
                  <li>Enron</li>
                  <li>Theranos</li>
                  <li>Meta</li>
                </ul>
              </div>
            </div>
            <div className='content-box image'>
              <img src={portrait} alt='male portrait' />
            </div>
        </div>
      </motion.div>        
    </Wrapper>
  )
}

export default About